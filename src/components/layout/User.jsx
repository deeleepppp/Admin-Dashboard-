import React from 'react'
import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { user } = useAuth()

  if (!user) return <div className="text-center mt-10 text-gray-500">No user logged in</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full border-2 border-blue-500"
            src={`https://avatar.iran.liara.run/username?username=${user.username}`} 
            alt="User avatar"
          />
          <h2 className="mt-4 text-xl font-bold text-gray-800">{user.username}</h2>
          <p className="text-gray-600 text-sm">Email: {user.email || "N/A"}</p>
        </div>

        <div className="mt-6 space-y-2">
          <div className="text-gray-700">
            <span className="font-medium">Token:</span>
            <p className="text-xs text-gray-500 break-words">{user.accessToken || "Not available"}</p>
          </div>

          <div className="text-gray-700">
            <span className="font-medium">User ID:</span> {user.id || "N/A"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
