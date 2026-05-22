import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Sidebar = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 p-6">
      <h1 className="text-2xl font-bold mb-8">Client Org</h1>
      <nav className="space-y-4 mb-8">
        <Link to="/dashboard" className="block px-4 py-2 rounded hover:bg-slate-800">
          Dashboard
        </Link>
        <Link to="#" className="block px-4 py-2 rounded hover:bg-slate-800">
          Users
        </Link>
        <Link to="#" className="block px-4 py-2 rounded hover:bg-slate-800">
          Settings
        </Link>
      </nav>
      <button
        onClick={handleLogout}
        className="w-full px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </aside>
  )
}

export default Sidebar
