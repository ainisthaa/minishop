import { useState } from 'react'
import { shoes } from '../data/data.js'

function Workshop({ cartCount, addToCart }) {
  const [quantity, setQuantity] = useState(1)

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function increase() {
    setQuantity(quantity + 1)
  }

  function handleAdd() {
    addToCart(quantity)
    setQuantity(1)
  }

  return (
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">React Workshop</h2>
          <p className="mt-2 text-gray-600">ลองใช้งาน React กับ Tailwind CSS</p>
          <p className="text-sm text-gray-400">
            เพิ่มจำนวนสินค้าในตะกร้า และดูจำนวนสินค้าที่เลือกได้ที่ไอคอนตะกร้า
          </p>
        </div>
        <div className="relative bg-white rounded-xl shadow p-3 text-2xl">
          🛒
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs
                           w-6 h-6 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow mt-6 p-6 flex flex-col sm:flex-row gap-6">
        <div className="sm:w-64 h-48 bg-gray-100 rounded-lg flex items-center justify-center text-7xl">
          {shoes.icon}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold">{shoes.name}</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">฿{shoes.price.toLocaleString()}</p>
          <p className="mt-2">
            <span className="text-yellow-500">★</span> {shoes.rating}{' '}
            <span className="text-gray-400">({shoes.reviews})</span>
          </p>

          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={decrease}
              className="w-10 h-10 bg-blue-600 text-white text-xl rounded-lg hover:bg-blue-700"
            >
              −
            </button>
            <div className="w-16 h-10 border border-gray-300 rounded-lg flex items-center justify-center">
              {quantity}
            </div>
            <button
              onClick={increase}
              className="w-10 h-10 bg-blue-600 text-white text-xl rounded-lg hover:bg-blue-700"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Workshop
