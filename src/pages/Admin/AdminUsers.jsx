import React, { useState, useEffect } from "react";

function AdminUsers() {
  const users = [
    { id: 1, name: "Saurabh Singh", email: "saurabh@example.com", role: "Admin" },
    { id: 2, name: "Rahul Sharma", email: "rahul@example.com", role: "User" },
    { id: 3, name: "Priya Patil", email: "priya@example.com", role: "User" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        Admin Users
      </h1>

      <div className="bg-white shadow-md rounded-2xl border border-gray-100 overflow-hidden">
        {isMobile ? (
          // Mobile: Card layout
          <div className="divide-y divide-gray-200">
            {users.map((user) => (
              <div key={user.id} className="p-6 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium text-lg text-gray-900">
                    {user.name}
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    user.role === "Admin" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {user.role}
                  </span>
                </div>
                
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">ID:</span>
                    <span className="font-medium">{user.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email:</span>
                    <span>{user.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop: Table layout
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {user.id}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        user.role === "Admin" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminUsers;