import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='*' element={<h1>Not Found</h1>} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
