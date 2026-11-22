import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const LINT_SRC = 'https://lint.page/kit/4d0fe3.js' // Accumulus validator: last item in <head>
const CHECK_SRC = 'https://divonbriesen.github.io/teaching/tools/standards-check.js' // Vicunadator: last item in <body>

const READY_EVENTS = ['DOMContentLoaded', 'load', 'readystatechange']

// On a normal page the checker runs when the browser finishes loading. React has already
// finished "loading" by the time a page renders, so those events never fire again.
// This loads the checker and, once, runs whatever it asked to run at page load.
function loadCheckerLikeFreshPage(isCancelled) {
  const queued = new Set()
  const calls = []
  const proto = EventTarget.prototype.addEventListener
  const prevOnload = window.onload
  const prevReady = document.onreadystatechange

  const intercept = (target) =>
    function (type, handler, options) {
      if (READY_EVENTS.includes(type) && handler && !queued.has(handler)) {
        queued.add(handler)
        calls.push([target, type, handler])
        return
      }
      return proto.call(target, type, handler, options)
    }

  const restore = () => {
    delete document.addEventListener
    delete window.addEventListener
  }

  document.addEventListener = intercept(document)
  window.addEventListener = intercept(window)

  const script = document.createElement('script')
  script.src = CHECK_SRC

  const finish = () => {
    restore()
    // Handlers assigned with window.onload = ... / document.onreadystatechange = ...
    if (window.onload && window.onload !== prevOnload && !queued.has(window.onload)) {
      calls.push([window, 'load', window.onload])
    }
    window.onload = prevOnload
    if (document.onreadystatechange && document.onreadystatechange !== prevReady && !queued.has(document.onreadystatechange)) {
      calls.push([document, 'readystatechange', document.onreadystatechange])
    }
    document.onreadystatechange = prevReady
    if (isCancelled()) return
    setTimeout(() => {
      calls.forEach(([target, type, handler]) => {
        const event = new Event(type)
        if (typeof handler === 'function') handler.call(target, event)
        else if (handler.handleEvent) handler.handleEvent(event)
      })
    }, 0)
  }
  script.onload = finish
  script.onerror = restore
  document.body.appendChild(script)
  return { script, restore }
}

export default function Layout() {
  const { pathname } = useLocation()

  // Re-inject the validators on every page change, after React has rendered the page
  useEffect(() => {
    let cancelled = false
    let lint = null
    let checker = null

    const start = () => {
      lint = document.createElement('script')
      lint.src = LINT_SRC
      lint.crossOrigin = 'anonymous'
      // Load one after the other so Accumulus stays last in <head> and Vicunadator last in <body>
      const next = () => {
        if (!cancelled) checker = loadCheckerLikeFreshPage(() => cancelled)
      }
      lint.onload = next
      lint.onerror = next
      document.head.appendChild(lint)
    }

    const timer = setTimeout(start, 0)
    return () => {
      cancelled = true
      clearTimeout(timer)
      if (lint) lint.remove()
      if (checker) {
        checker.restore()
        checker.script.remove()
      }
    }
  }, [pathname])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
