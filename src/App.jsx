import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import ScrollToTop from './components/layout/ScrollTop'
import Gallery from './components/gallery/Gallery'

function App() {

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='*' element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/gallery' element={<Gallery />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
