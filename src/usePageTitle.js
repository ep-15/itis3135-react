import { useEffect } from 'react'

// Updates the browser tab title whenever a page mounts
export default function usePageTitle(page) {
  useEffect(() => {
    document.title = `Ethan Primak's Elegant Panda | ITIS3135 | ${page}`
  }, [page])
}
