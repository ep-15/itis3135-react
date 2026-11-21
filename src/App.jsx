import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Introduction from './pages/Introduction.jsx'
import Contract from './pages/Contract.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <Routes>
      {/* Layout renders the shared header + footer around every page */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="contract" element={<Contract />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}
