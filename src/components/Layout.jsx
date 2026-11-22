import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// Which page-load event the standards checker waits for.
// If it runs twice (doubled counts) try 'load'; if it doesn't show at all, try the other one.
const READY_EVENT = 'DOMContentLoaded'

export default function Layout() {
  const { pathname } = useLocation()

  // Re-inject the validators on every page change, after React has rendered
  useEffect(() => {
    // Accumulus (lint.page) goes last in <head>
    const lint = document.createElement('script')
    lint.src = 'https://lint.page/kit/4d0fe3.js'
    lint.crossOrigin = 'anonymous'
    document.head.appendChild(lint)

    // Vicunadator (standards-check) goes last in <body>
    const checker = document.createElement('script')
    checker.src = 'https://divonbriesen.github.io/teaching/tools/standards-check.js'
    checker.onload = () => {
      // Tell the script the "page" is ready, since React rendered after the real load event
      document.dispatchEvent(new Event(READY_EVENT, { bubbles: true }))
    }
    document.body.appendChild(checker)

    return () => {
      lint.remove()
      checker.remove()
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