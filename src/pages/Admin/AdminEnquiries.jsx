import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    fetchEnquiries();
  }, [activeTab]);

  const fetchEnquiries = async () => {
    setLoading(true);

    try {
      let endpoint = "http://localhost:4000/api/v1/admin/enquiries";

      if (activeTab === "pending") {
        endpoint += "/pending";
      } else if (activeTab === "solved") {
        endpoint += "/solved";
      }

      const res = await axios.get(endpoint, { withCredentials: true });

      console.log("Enquiries API response:", res.data);

      const enquiryData =
        res.data?.data ||
        res.data?.enquiries ||
        res.data?.allEnquiries ||
        res.data?.results ||
        [];

      setEnquiries(Array.isArray(enquiryData) ? enquiryData : []);
    } catch (error) {
      console.error(
        "Failed to fetch enquiries:",
        error.response?.data || error.message
      );
      alert("Failed to load enquiries");
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  };

  const markSolved = async (enquiryId) => {
    try {
      const res = await axios.patch(
        `http://localhost:4000/api/v1/admin/enquiries/${enquiryId}/solve`,
        {},
        { withCredentials: true }
      );

      if (res.data.success) {
        await fetchEnquiries();
        alert("✅ Enquiry marked as solved!");
      }
    } catch (error) {
      console.error(
        "Failed to update enquiry:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Failed to update enquiry");
    }
  };

  const allCount = enquiries.length;
  const pendingCount = enquiries.filter(
    (e) => e.status?.toLowerCase() === "pending"
  ).length;
  const solvedCount = enquiries.filter(
    (e) => e.status?.toLowerCase() === "solved"
  ).length;

  const tabs = [
    { id: "all", label: "All Enquiries", badge: allCount },
    { id: "pending", label: "Pending", badge: pendingCount },
    { id: "solved", label: "Solved", badge: solvedCount },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] p-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#556b2f]"></div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Enquiries Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage student admission enquiries
          </p>
        </div>

        <button
          onClick={fetchEnquiries}
          className="px-4 py-2 bg-[#556b2f] text-white rounded-xl hover:bg-[#7f9f3f] transition-colors w-full lg:w-auto"
        >
          Refresh
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex flex-col sm:flex-row space-x-0 sm:space-x-1 px-4 -mb-px overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium rounded-t-lg transition-colors flex-1 sm:flex-none whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-white text-[#556b2f] border-b-2 border-[#556b2f] shadow-sm"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab.label}
                {tab.badge > 0 && (
                  <span className="ml-2 bg-[#556b2f]/10 text-[#556b2f] text-xs font-bold px-2 py-1 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="overflow-hidden">
          {enquiries.length === 0 ? (
            <div className="text-center py-12 px-4">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No enquiries found
              </h3>
              <p className="text-gray-500">
                Student enquiries will appear here when submitted.
              </p>
            </div>
          ) : isMobile ? (
            <div className="divide-y divide-gray-200">
              {enquiries.map((enquiry) => (
                <div key={enquiry._id} className="p-5 sm:p-6 hover:bg-gray-50">
                  <div className="flex justify-between items-start gap-3 mb-4">
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-900 text-base sm:text-lg break-words">
                        {enquiry.fullName}
                      </div>
                      <div className="text-sm text-gray-500 break-all">
                        {enquiry.email}
                      </div>
                    </div>

                    <span
                      className={`shrink-0 px-3 py-1 text-xs font-semibold rounded-full ${
                        enquiry.status === "solved"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {enquiry.status === "solved" ? "Solved" : "Pending"}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Phone:</span>
                      <span className="text-right text-gray-900 break-all">
                        {enquiry.phone}
                      </span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Course:</span>
                      <span className="text-right font-medium text-gray-900">
                        {enquiry.course}
                      </span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Location:</span>
                      <span className="text-right text-gray-900 break-words max-w-[65%]">
                        {enquiry.location || "Not provided"}
                      </span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span className="text-gray-500">Date:</span>
                      <span className="text-right text-gray-900">
                        {new Date(enquiry.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {enquiry.status === "pending" && (
                    <button
                      onClick={() => markSolved(enquiry._id)}
                      className="w-full px-4 py-2 bg-[#556b2f] text-white text-sm font-medium rounded-xl hover:bg-[#7f9f3f] transition-colors"
                    >
                      Mark Solved
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[220px]">
                      Student
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[150px]">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[160px]">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[220px]">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[120px]">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[130px]">
                      Date
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-[150px]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900 text-sm">
                          {enquiry.fullName}
                        </div>
                        <div className="text-sm text-gray-500 break-all">
                          {enquiry.email}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {enquiry.course}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 text-sm">
                          {enquiry.phone}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-900 break-words">
                        {enquiry.location || "Not provided"}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                            enquiry.status === "solved"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {enquiry.status === "solved" ? "Solved" : "Pending"}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(enquiry.createdAt).toLocaleDateString()}
                      </td>

                      <td className="px-6 py-4 text-right">
                        {enquiry.status === "pending" ? (
                          <button
                            onClick={() => markSolved(enquiry._id)}
                            className="px-4 py-2 bg-[#556b2f] text-white text-sm font-medium rounded-xl hover:bg-[#7f9f3f] transition-colors"
                          >
                            Mark Solved
                          </button>
                        ) : (
                          <span className="text-sm text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEnquiries;