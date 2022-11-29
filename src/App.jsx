import './App.css';
import { Home, Books } from './pages/pages.js'
import { Nav, Footer } from './components/components.js'
import { bookData } from 'assets/data';
// import Home from './pages/Home'
// import Books from './pages/Books'
// import BookInfo from './pages/BookInfo'
// import Cart from './pages/Cart'
// import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/books" element={<Books books={bookData} /> } />
          {/* <Route path="/books/:id" element={<BookInfo /> } />
          <Route path="/cart" element={<Cart /> } /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
