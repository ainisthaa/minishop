function SummaryBox({ icon, bg, label, value }) {
  return (
    <div className={'rounded-xl p-4 ' + bg}>
      <div className="text-xl">{icon}</div>
      <p className="text-sm text-gray-500 mt-2">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  )
}

function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800">Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow p-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
              👤
            </div>
            <h3 className="text-xl font-bold">Alex Student</h3>
          </div>
          <p className="text-gray-500 mt-4">✉️ alex@example.com</p>
          <p className="text-gray-500 mt-1">🪪 Student ID: 66123456</p>
          <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
          <h3 className="text-lg font-bold mb-4">Account Summary</h3>
          <div className="grid grid-cols-2 gap-4">
            <SummaryBox icon="🛒" bg="bg-blue-50" label="Total Orders" value="128" />
            <SummaryBox icon="฿" bg="bg-purple-50" label="Total Spent" value="฿48,500" />
            <SummaryBox icon="📦" bg="bg-green-50" label="Wishlist Items" value="6" />
            <SummaryBox icon="⭐" bg="bg-yellow-50" label="Loyalty Points" value="320" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
