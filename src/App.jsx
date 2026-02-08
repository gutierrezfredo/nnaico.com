import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookDemo from './pages/BookDemo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<BookDemo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
