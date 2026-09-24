import { useState } from 'react'
import { products, categories } from '../data/data.js'

function Products({ addToCart, openWorkshop }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All Categories')

  const filtered = products.filter((product) => {
    const matchName = product.name.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === 'All Categories' || product.category === category
    return matchName && matchCategory
  })

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
        <button onClick={openWorkshop} className="text-blue-600 text-sm hover:underline">
          React Workshop →
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 sm:w-56"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 && (
        <p className="mt-6 text-gray-500">ไม่พบสินค้าที่ค้นหา</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {filtered.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow p-5 hover:shadow-lg">
            <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-5xl">
              {product.icon}
            </div>
            <h3 className="text-lg font-bold mt-4">{product.name}</h3>
            <p className="text-blue-600 font-bold mt-2">฿{product.price.toLocaleString()}</p>
            <p className="mt-2">
              <span className="text-yellow-500">★</span> {product.rating}{' '}
              <span className="text-gray-400">({product.reviews})</span>
            </p>
            <button
              onClick={() => addToCart(1)}
              className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
