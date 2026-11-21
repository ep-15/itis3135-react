import { Link } from 'react-router-dom'

// Links to your original site (absolute URLs, since these pages don't exist in this React app)
const MAIN = 'https://ep-15.github.io/itis3135/'

export default function Header() {
  return (
    <header>
      <h1>Ethan Primak's Elegant Panda | ITIS3135</h1>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/introduction">Introduction</Link> |{' '}
        <Link to="/contract">Contract</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
      <nav className="secondary-nav">
        <a href={MAIN + 'stuff/cRapPy PaGe😍.htm'}>Crappy Page</a> |{' '}
        <a href={MAIN + 'eprimakdesigns.co/index.html'}>E. Primak Designs</a> |{' '}
        <a href={MAIN + 'hobby/index.html'}>Hobby</a> |{' '}
        <a href={MAIN + 'elegantpanda/index.html'}>Elegant Panda</a>
      </nav>
    </header>
  )
}
