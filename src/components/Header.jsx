function Header({ cartCount }) {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">MiniShop</h1>

        <div className="flex items-center gap-4">
          <button className="hover:bg-gray-100 p-2 rounded-lg">🔍</button>
          <button className="relative hover:bg-gray-100 p-2 rounded-lg">
            🛒
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs
                             w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
          <button className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
            👤
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
