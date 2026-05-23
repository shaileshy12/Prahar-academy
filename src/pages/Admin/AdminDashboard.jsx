import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalEnquiries: 0,
    pendingEnquiries: 0,
    solvedEnquiries: 0,
    totalUsers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStats = async () => {
    setRefreshing(true);
    setError(null);
    
    try {
      const [enquiriesRes, usersRes] = await Promise.all([
        axios.get("http://localhost:4000/api/v1/admin/enquiries", { withCredentials: true }),
        axios.get("http://localhost:4000/api/v1/admin/users", { withCredentials: true })
      ]);

      const enquiries = enquiriesRes.data.data || enquiriesRes.data.enquiries || [];
      const pending = enquiries.filter(e => 
        e.status?.toLowerCase() === "pending"
      ).length;
      const solved = enquiries.filter(e => 
        e.status?.toLowerCase() === "solved"
      ).length;

      setStats({
        totalEnquiries: enquiries.length,
        pendingEnquiries: pending,
        solvedEnquiries: solved,
        totalUsers: usersRes.data.data?.length || usersRes.data.users?.length || 0
      });
    } catch (error) {
      console.error("Failed to fetch stats:", error);
      setError(
        error.response?.data?.message || 
        "Failed to load dashboard stats. Please check your connection."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const StatsCard = ({ icon: Icon, title, value, color, trend }) => (
    <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className={`p-3 bg-gradient-to-br ${color} rounded-xl shadow-lg group-hover:scale-105 transition-transform`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{title}</p>
            <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mt-1">
              {value.toLocaleString()}
            </p>
            {trend && (
              <p className="text-xs font-medium text-green-600 mt-1 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {trend}
              </p>
            )}
          </div>
        </div>
        <div className="w-2 h-2 bg-gradient-to-r from-[#556b2f] to-[#7f9f3f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );

  const QuickActionCard = ({ icon: Icon, title, description, href, color }) => (
    <Link 
      to={href}
      className="group block p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-dashed border-gray-200 rounded-2xl hover:border-[#556b2f] hover:shadow-lg hover:bg-[#556b2f]/5 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 ${color} rounded-xl shadow-md group-hover:scale-105 transition-all duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#556b2f] transition-colors mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#556b2f] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );

  if (loading) {
    return (
      <div className="min-h-[500px] flex flex-col items-center justify-center p-8">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#556b2f]/20 border-t-[#556b2f] mb-6 shadow-lg" />
        <p className="text-lg text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#556b2f] to-gray-700 bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-md">
            Jai Hind Physical Academy - Manage enquiries & users
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={fetchStats}
            disabled={refreshing}
            className="px-6 py-3 bg-gradient-to-r from-[#556b2f] to-[#7f9f3f] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-[#7f9f3f] hover:to-[#9bbf5f] transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {refreshing ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Refreshing...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh Stats
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-1">Failed to load stats</h3>
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        <StatsCard
          icon={(props) => (
            <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          )}
          title="Total Enquiries"
          value={stats.totalEnquiries}
          color="from-orange-400 to-orange-500"
        />
        
        <StatsCard
          icon={(props) => (
            <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          title="Pending"
          value={stats.pendingEnquiries}
          color="from-yellow-400 to-yellow-500"
        />
        
        <StatsCard
          icon={(props) => (
            <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          title="Solved"
          value={stats.solvedEnquiries}
          color="from-emerald-400 to-emerald-500"
        />
        
        <StatsCard
          icon={(props) => (
            <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
          title="Total Users"
          value={stats.totalUsers}
          color="from-blue-400 to-blue-500"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <QuickActionCard
          icon={(props) => (
            <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l6 6 6-6H9" />
            </svg>
          )}
          title="View All Enquiries"
          description="Manage pending & solved student admission enquiries"
          href="/admin/enquiries"
          color="bg-gradient-to-r from-[#556b2f] to-[#7f9f3f]"
        />
        
        <QuickActionCard
          icon={(props) => (
            <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
          title="Manage Users"
          description="View and manage registered students & admin users"
          href="/admin/users"
          color="bg-gradient-to-r from-blue-500 to-blue-600"
        />
        
        <QuickActionCard
          icon={(props) => (
            <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          title="Analytics Overview"
          description="View detailed reports and performance metrics"
          href="/admin/analytics"
          color="bg-gradient-to-r from-purple-500 to-purple-600"
        />
      </div>
    </div>
  );
};

export default AdminDashboard;