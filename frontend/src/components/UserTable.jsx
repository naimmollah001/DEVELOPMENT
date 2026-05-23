const UserTable = ({ users }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Username</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Joined</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{user.username}</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {new Date(user.created_at).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-sm">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-800">Active</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable