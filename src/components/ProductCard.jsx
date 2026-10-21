// รับข้อมูลสินค้าผ่าน Props ตามข้อกำหนดของใบงาน (name, price, image, category)
function ProductCard({ name, price, image, category, rating, onAddToCart, onViewDetail }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg flex flex-col">
      <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center p-4">
        <img src={image} alt={name} className="max-h-full object-contain" />
      </div>

      <p className="text-xs text-gray-400 uppercase mt-3">{category}</p>
      <h3 className="text-lg font-bold mt-1 line-clamp-2">{name}</h3>
      <p className="text-blue-600 font-bold mt-2">฿{price.toLocaleString()}</p>

      {rating && (
        <p className="mt-1 text-sm">
          <span className="text-yellow-500">★</span> {rating.rate}{' '}
          <span className="text-gray-400">({rating.count})</span>
        </p>
      )}

      <div className="mt-auto pt-4 flex gap-2">
        <button
          onClick={onViewDetail}
          className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50"
        >
          View Detail
        </button>
        <button
          onClick={onAddToCart}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
