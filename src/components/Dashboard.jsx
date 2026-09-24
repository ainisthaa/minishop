import { orders, statusColors } from '../data/data.js'

function StatCard({ icon, iconBg, label, value, valueColor }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
      <div className={'w-12 h-12 rounded-full flex items-center justify-center text-xl ' + iconBg}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h3 className={'text-2xl font-bold ' + valueColor}>{value}</h3>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <StatCard icon="📦" iconBg="bg-blue-100" label="Total Products" value="24" valueColor="text-blue-600" />
        <StatCard icon="🛒" iconBg="bg-green-100" label="Orders" value="128" valueColor="text-green-600" />
        <StatCard icon="฿" iconBg="bg-purple-100" label="Revenue" value="฿48,500" valueColor="text-purple-600" />
      </div>

      <div className="bg-white rounded-xl shadow mt-6 p-5">
        <h3 className="text-lg font-bold mb-3">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="py-2 px-3">#</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Customer</th>
                <th className="py-2 px-3">Items</th>
                <th className="py-2 px-3">Total</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b last:border-b-0">
                  <td className="py-3 px-3">{order.id}</td>
                  <td className="py-3 px-3">{order.date}</td>
                  <td className="py-3 px-3">{order.customer}</td>
                  <td className="py-3 px-3">{order.items}</td>
                  <td className="py-3 px-3">฿{order.total.toLocaleString()}</td>
                  <td className="py-3 px-3">
                    <span className={'px-3 py-1 rounded-full text-xs ' + statusColors[order.status]}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
