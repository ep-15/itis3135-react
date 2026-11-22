import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// The same two scripts your original pages load
const SCRIPTS = [
  { src: 'https://lint.page/kit/4d0fe3.js', crossOrigin: 'anonymous' },
  { src: 'https://divonbriesen.github.io/teaching/tools/standards-check.js' },
]

export default function Layout() {
  const { pathname } = useLocation()

  // Re-inject the validators on every page change, after React has rendered
  useEffect(() => {
    const added = SCRIPTS.map(({ src, crossOrigin }) => {
      const s = document.createElement('script')
      s.src = src
      if (crossOrigin) s.crossOrigin = crossOrigin
      // Tell scripts that wait for page-load events that the "page" is ready
      s.onload = () => {
        document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }))
        window.dispatchEvent(new Event('load'))
      }
      document.body.appendChild(s)
      return s
    })
    return () => added.forEach((s) => s.remove())
  }, [pathname])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}