export const orders = [
  { id: 1, date: '2025-09-15', customer: 'Somchai J.', items: 3, total: 1260, status: 'Completed' },
  { id: 2, date: '2025-09-14', customer: 'Nattaya K.', items: 1, total: 520, status: 'Processing' },
  { id: 3, date: '2025-09-13', customer: 'Kritsada P.', items: 2, total: 980, status: 'Shipped' },
  { id: 4, date: '2025-09-12', customer: 'Piyaporn S.', items: 1, total: 450, status: 'Completed' },
  { id: 5, date: '2025-09-11', customer: 'Thanawat C.', items: 4, total: 1800, status: 'Pending' },
]

export const statusColors = {
  Completed: 'bg-green-100 text-green-700',
  Processing: 'bg-blue-100 text-blue-700',
  Shipped: 'bg-purple-100 text-purple-700',
  Pending: 'bg-yellow-100 text-yellow-700',
}

// สินค้าสำหรับหน้า React Workshop
export const shoes = { name: 'Sport Shoes', icon: '👟', price: 1590, rating: 4.6, reviews: 15 }
