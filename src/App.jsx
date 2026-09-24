import { useState } from 'react'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Products from './components/Products.jsx'
import Profile from './components/Profile.jsx'
import Workshop from './components/Workshop.jsx'

function App() {
  const [page, setPage] = useState('dashboard')
  const [cartCount, setCartCount] = useState(2)

  function addToCart(qty) {
    setCartCount(cartCount + qty)
  }

  let content
  if (page === 'products') {
    content = <Products addToCart={addToCart} openWorkshop={() => setPage('workshop')} />
  } else if (page === 'workshop') {
    content = <Workshop cartCount={cartCount} addToCart={addToCart} />
  } else if (page === 'profile') {
    content = <Profile />
  } else {
    content = <Dashboard />
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartCount={cartCount} />
      <div className="flex flex-col md:flex-row">
        <Sidebar page={page} setPage={setPage} />
        <main className="flex-1 p-6">{content}</main>
      </div>
    </div>
  )
}

export default App
