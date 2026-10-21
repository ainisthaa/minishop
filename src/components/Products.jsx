import { useState, useEffect } from 'react'
import ProductList from './ProductList.jsx'
import ProductDetail from './ProductDetail.jsx'

function Products({ addToCart, openWorkshop }) {
  // State สำหรับข้อมูลจาก API
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // State สำหรับ Filter / Sort / Detail
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sortOrder, setSortOrder] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  // ดึงข้อมูลสินค้าจาก Fake Store API ตอน Component เริ่มทำงาน
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('โหลดข้อมูลไม่สำเร็จ')
        }
        return response.json()
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        setError('ไม่สามารถโหลดข้อมูลได้')
        setLoading(false)
      })
  }, [])

  const categories = ['All', ...new Set(products.map((p) => p.category))]

  let filtered = products.filter((product) => {
    const matchName = product.title.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === 'All' || product.category === category
    return matchName && matchCategory
  })

  if (sortOrder === 'low-high') {
    filtered = [...filtered].sort((a, b) => a.price - b.price)
  } else if (sortOrder === 'high-low') {
    filtered = [...filtered].sort((a, b) => b.price - a.price)
  }

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
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 sm:w-56 capitalize"
        >
          {categories.map((c) => (
            <option key={c} value={c} className="capitalize">{c}</option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 sm:w-56"
        >
          <option value="">Sort by...</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      {/* Loading State */}
      {loading && (
        <p className="mt-10 text-center text-gray-500">Loading products...</p>
      )}

      {/* Error State */}
      {!loading && error && (
        <p className="mt-10 text-center text-red-600">{error}</p>
      )}

      {/* Empty State */}
      {!loading && !error && filtered.length === 0 && (
        <p className="mt-10 text-center text-gray-500">ไม่พบสินค้าที่ค้นหา</p>
      )}

      {/* Success State */}
      {!loading && !error && filtered.length > 0 && (
        <div className="mt-6">
          <ProductList
            products={filtered}
            onAddToCart={addToCart}
            onViewDetail={setSelectedProduct}
          />
        </div>
      )}

      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
    </div>
  )
}

export default Products
