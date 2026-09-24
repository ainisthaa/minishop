import './style.css'

// ---------- ข้อมูล ----------
const orders = [
  { id: 1, date: '2025-09-15', customer: 'Somchai J.', items: 3, total: 1260, status: 'Completed' },
  { id: 2, date: '2025-09-14', customer: 'Nattaya K.', items: 1, total: 520, status: 'Processing' },
  { id: 3, date: '2025-09-13', customer: 'Kritsada P.', items: 2, total: 980, status: 'Shipped' },
  { id: 4, date: '2025-09-12', customer: 'Piyaporn S.', items: 1, total: 450, status: 'Completed' },
  { id: 5, date: '2025-09-11', customer: 'Thanawat C.', items: 4, total: 1800, status: 'Pending' },
]

const products = [
  { name: 'Laptop', icon: '💻', price: 12900, rating: 4.3, reviews: 24 },
  { name: 'Headphones', icon: '🎧', price: 1290, rating: 4.3, reviews: 18 },
  { name: 'Backpack', icon: '🎒', price: 890, rating: 4.7, reviews: 32 },
  { name: 'Smart Watch', icon: '⌚', price: 2990, rating: 4.4, reviews: 20 },
]

const statusColors = {
  Completed: 'bg-green-100 text-green-700',
  Processing: 'bg-blue-100 text-blue-700',
  Shipped: 'bg-purple-100 text-purple-700',
  Pending: 'bg-yellow-100 text-yellow-700',
}

let currentPage = 'dashboard'
let cartCount = 2

// ---------- ส่วนประกอบของหน้า ----------
function renderHeader() {
  return `
    <header class="bg-white shadow-md">
      <div class="flex items-center justify-between px-6 py-4">
        <h1 class="text-2xl font-bold text-blue-600">MiniShop</h1>

        <div class="flex items-center gap-4">
          <button class="hover:bg-gray-100 p-2 rounded-lg">🔍</button>
          <button id="cartBtn" class="relative hover:bg-gray-100 p-2 rounded-lg">
            🛒
            <span id="cartBadge" class="absolute -top-1 -right-1 bg-blue-600 text-white
                  text-xs w-5 h-5 rounded-full flex items-center justify-center">
              ${cartCount}
            </span>
          </button>
          <button class="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
            👤
          </button>
        </div>
      </div>
    </header>
  `
}

function renderSidebar() {
  const menus = [
    { key: 'dashboard', icon: '🏠', label: 'Dashboard' },
    { key: 'products', icon: '📦', label: 'Products' },
    { key: 'profile', icon: '👤', label: 'Profile' },
  ]

  let html = ''
  menus.forEach(function (menu) {
    const active = menu.key === currentPage
    const style = active ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'
    html += `
      <button data-page="${menu.key}"
        class="menu-btn flex items-center gap-3 w-full px-4 py-2 rounded-lg text-left ${style}">
        <span>${menu.icon}</span>
        <span>${menu.label}</span>
      </button>
    `
  })

  return `
    <aside class="w-full md:w-56 bg-white md:min-h-screen p-4
                  flex md:flex-col gap-2 border-b md:border-b-0 md:border-r">
      ${html}
    </aside>
  `
}

// ---------- หน้า Dashboard ----------
function renderStatCard(icon, iconBg, label, value, valueColor) {
  return `
    <div class="bg-white p-5 rounded-xl shadow flex items-center gap-4">
      <div class="w-12 h-12 ${iconBg} rounded-full flex items-center justify-center text-xl">
        ${icon}
      </div>
      <div>
        <p class="text-sm text-gray-500">${label}</p>
        <h3 class="text-2xl font-bold ${valueColor}">${value}</h3>
      </div>
    </div>
  `
}

function renderDashboard() {
  let rows = ''
  orders.forEach(function (order) {
    rows += `
      <tr class="border-b last:border-b-0">
        <td class="py-3 px-3">${order.id}</td>
        <td class="py-3 px-3">${order.date}</td>
        <td class="py-3 px-3">${order.customer}</td>
        <td class="py-3 px-3">${order.items}</td>
        <td class="py-3 px-3">฿${order.total.toLocaleString()}</td>
        <td class="py-3 px-3">
          <span class="px-3 py-1 rounded-full text-xs ${statusColors[order.status]}">
            ${order.status}
          </span>
        </td>
      </tr>
    `
  })

  return `
    <h2 class="text-2xl font-bold text-gray-800">Dashboard</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      ${renderStatCard('📦', 'bg-blue-100', 'Total Products', '24', 'text-blue-600')}
      ${renderStatCard('🛒', 'bg-green-100', 'Orders', '128', 'text-green-600')}
      ${renderStatCard('฿', 'bg-purple-100', 'Revenue', '฿48,500', 'text-purple-600')}
    </div>

    <div class="bg-white rounded-xl shadow mt-6 p-5">
      <h3 class="text-lg font-bold mb-3">Recent Orders</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="bg-gray-50 text-gray-500">
            <tr>
              <th class="py-2 px-3">#</th>
              <th class="py-2 px-3">Date</th>
              <th class="py-2 px-3">Customer</th>
              <th class="py-2 px-3">Items</th>
              <th class="py-2 px-3">Total</th>
              <th class="py-2 px-3">Status</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `
}

// ---------- หน้า Products ----------
function renderProducts() {
  let cards = ''
  products.forEach(function (product) {
    cards += `
      <div class="bg-white rounded-xl shadow p-5 hover:shadow-lg">
        <div class="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-5xl">
          ${product.icon}
        </div>
        <h3 class="text-lg font-bold mt-4">${product.name}</h3>
        <p class="text-blue-600 font-bold mt-2">฿${product.price.toLocaleString()}</p>
        <p class="mt-2">
          <span class="text-yellow-500">★</span>
          ${product.rating}
          <span class="text-gray-400">(${product.reviews})</span>
        </p>
        <button class="add-cart w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    `
  })

  return `
    <h2 class="text-2xl font-bold text-gray-800">Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      ${cards}
    </div>
  `
}

// ---------- หน้า Profile ----------
function renderSummaryBox(icon, bg, label, value) {
  return `
    <div class="${bg} rounded-xl p-4">
      <div class="text-xl">${icon}</div>
      <p class="text-sm text-gray-500 mt-2">${label}</p>
      <p class="text-xl font-bold">${value}</p>
    </div>
  `
}

function renderProfile() {
  return `
    <h2 class="text-2xl font-bold text-gray-800">Profile</h2>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <div class="bg-white rounded-xl shadow p-8">
        <div class="flex flex-col items-center gap-3">
          <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <h3 class="text-xl font-bold">Alex Student</h3>
        </div>
        <p class="text-gray-500 mt-4">✉️ alex@example.com</p>
        <p class="text-gray-500 mt-1">🪪 Student ID: 66123456</p>
        <button class="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Edit Profile
        </button>
      </div>

      <div class="bg-white rounded-xl shadow p-6 lg:col-span-2">
        <h3 class="text-lg font-bold mb-4">Account Summary</h3>
        <div class="grid grid-cols-2 gap-4">
          ${renderSummaryBox('🛒', 'bg-blue-50', 'Total Orders', '128')}
          ${renderSummaryBox('฿', 'bg-purple-50', 'Total Spent', '฿48,500')}
          ${renderSummaryBox('📦', 'bg-green-50', 'Wishlist Items', '6')}
          ${renderSummaryBox('⭐', 'bg-yellow-50', 'Loyalty Points', '320')}
        </div>
      </div>
    </div>
  `
}

// ---------- รวมทั้งหมด ----------
function renderContent() {
  if (currentPage === 'products') return renderProducts()
  if (currentPage === 'profile') return renderProfile()
  return renderDashboard()
}

function render() {
  document.querySelector('#app').innerHTML = `
    <div class="min-h-screen bg-gray-100">
      ${renderHeader()}
      <div class="flex flex-col md:flex-row">
        ${renderSidebar()}
        <main class="flex-1 p-6">
          ${renderContent()}
        </main>
      </div>
    </div>
  `

  // เปลี่ยนหน้าเมื่อกดเมนู
  document.querySelectorAll('.menu-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentPage = btn.dataset.page
      render()
    })
  })

  // กด Add to Cart แล้วเพิ่มตัวเลขบนตะกร้า
  document.querySelectorAll('.add-cart').forEach(function (btn) {
    btn.addEventListener('click', function () {
      cartCount++
      document.getElementById('cartBadge').textContent = cartCount
    })
  })
}

render()
