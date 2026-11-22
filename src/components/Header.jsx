import Include from './Include.jsx'
import headerHtml from '../../public/components/header.html?raw'

export default function Header() {
  return <Include file="components/header.html" html={headerHtml} />
}
