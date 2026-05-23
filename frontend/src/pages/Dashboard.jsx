import { useEffect, useState } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Sidebar from '../components/Sidebar'
import StatCard from '../components/StatCard'
import UserTable from '../components/UserTable'
import * as dashboardService from '../services/dashboardService'

const Dashboard = () => {
  const [stats, setStats] = useState(null)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, usersData] = await Promise.all([
          dashboardService.getStats(),
          dashboardService.getUsers()
        ])
        setStats(statsData)
        setUsers(usersData.users)
      } catch (err) {
        setError('Failed to load dashboard')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div className="text-center py-8">Loading...</div>
  if (error) return <div className="text-center py-8 text-red-600">{error}</div>

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 500 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 700 },
    { name: 'May', value: 800 },
    { name: 'Jun', value: 900 },
  ]

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 flex-1 bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Users" value={stats?.totalUsers || 0} icon="👥" trend={stats?.growth} />
          <StatCard title="Active Users" value={stats?.activeUsers || 0} icon="✅" />
          <StatCard title="Revenue" value={stats?.revenue || '$0'} icon="💰" />
          <StatCard title="Growth" value={stats?.growth || '0%'} icon="📈" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">User Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Revenue</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
          <UserTable users={users} />
        </div>
      </main>
    </div>
  )
}

export default Dashboard