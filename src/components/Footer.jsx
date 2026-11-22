import Include from './Include.jsx'
import footerHtml from '../../public/components/footer.html?raw'

export default function Footer() {
  return <Include file="components/footer.html" html={footerHtml} />
}
