// แสดงรายละเอียดสินค้าแบบ Modal เมื่อกด View Detail (Challenge 3)
function ProductDetail({ product, onClose, onAddToCart }) {
  if (!product) return null

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold pr-4">{product.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">
            ✕
          </button>
        </div>

        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center p-4 mt-4">
          <img src={product.image} alt={product.title} className="max-h-full object-contain" />
        </div>

        <p className="text-xs text-gray-400 uppercase mt-4">{product.category}</p>
        <p className="text-2xl font-bold text-blue-600 mt-1">฿{product.price.toLocaleString()}</p>

        {product.rating && (
          <p className="mt-1 text-sm">
            <span className="text-yellow-500">★</span> {product.rating.rate}{' '}
            <span className="text-gray-400">({product.rating.count} รีวิว)</span>
          </p>
        )}

        <p className="text-gray-600 text-sm mt-4">{product.description}</p>

        <button
          onClick={() => {
            onAddToCart(1)
            onClose()
          }}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
