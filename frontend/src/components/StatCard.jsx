const StatCard = ({ title, value, icon, trend }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          {trend && <p className="text-green-500 text-sm mt-2">{trend}</p>}
        </div>
        <div className="text-4xl text-slate-300">{icon}</div>
      </div>
    </div>
  )
}

export default StatCard