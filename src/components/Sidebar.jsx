const menus = [
  { key: 'dashboard', icon: '🏠', label: 'Dashboard' },
  { key: 'products', icon: '📦', label: 'Products' },
  { key: 'profile', icon: '👤', label: 'Profile' },
]

function Sidebar({ page, setPage }) {
  return (
    <aside className="w-full md:w-56 bg-white md:min-h-screen p-4
                      flex md:flex-col gap-2 border-b md:border-b-0 md:border-r">
      {menus.map((menu) => {
        // หน้า workshop ถือเป็นส่วนหนึ่งของ Products
        const active = menu.key === page || (menu.key === 'products' && page === 'workshop')
        const style = active
          ? 'bg-blue-100 text-blue-700 font-semibold'
          : 'text-gray-600 hover:bg-gray-100'

        return (
          <button
            key={menu.key}
            onClick={() => setPage(menu.key)}
            className={'flex items-center gap-3 w-full px-4 py-2 rounded-lg text-left ' + style}
          >
            <span>{menu.icon}</span>
            <span>{menu.label}</span>
          </button>
        )
      })}
    </aside>
  )
}

export default Sidebar
