import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  // --- DARK MODE LOGIC ---
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check their saved preference when the page loads
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // The function to flip the switch
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  
  const [loading, setLoading] = useState(false);

  // Form States
  const [passwords, setPasswords] = useState({ oldPassword: "", newPassword: "" });
  const [profile, setProfile] = useState({ fullName: "", email: "" });
  const [siteData, setSiteData] = useState({
    contactEmail: "", phone1: "", phone2: "", address: "", facebook: "", instagram: "", youtube: ""
  });

  // Fetch initial data on load
  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const config = { headers: { Authorization: `Bearer ${token}` }, withCredentials: true };
      
      const [adminRes, siteRes] = await Promise.all([
        axios.get("http://localhost:4000/api/v1/admin/me", config),
        axios.get("http://localhost:4000/api/v1/admin/website-settings")
      ]);

      if (adminRes.data.success) setProfile({ fullName: adminRes.data.data.fullName, email: adminRes.data.data.email });
      if (siteRes.data.success) setSiteData(siteRes.data.data);
    } catch (error) {
      console.error("Failed to fetch settings data", error);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      await axios.put("http://localhost:4000/api/v1/admin/change-password", passwords, {
        withCredentials: true, headers: { Authorization: `Bearer ${token}` }
      });
      alert("✅ Password changed successfully!");
      setPasswords({ oldPassword: "", newPassword: "" });
    } catch (error) {
      alert("❌ " + (error.response?.data?.message || "Failed to update"));
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      await axios.put("http://localhost:4000/api/v1/admin/update-profile", profile, {
        withCredentials: true, headers: { Authorization: `Bearer ${token}` }
      });
      alert("✅ Profile updated successfully!");
    } catch (error) {
      alert("❌ Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSiteData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      await axios.put("http://localhost:4000/api/v1/admin/website-settings", siteData, {
        withCredentials: true, headers: { Authorization: `Bearer ${token}` }
      });
      alert("✅ Website data updated! The public site will now reflect these changes.");
    } catch (error) {
      alert("❌ Failed to update website settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Platform Settings</h1>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* --- LEFT SIDEBAR: TABS --- */}
        <div className="w-full md:w-64 space-y-2">
          <button onClick={() => setActiveTab("profile")} className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${activeTab === "profile" ? "bg-[#556b2f] text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}>
            Profile & Security
          </button>
          <button onClick={() => setActiveTab("website")} className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${activeTab === "website" ? "bg-[#556b2f] text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}>
            Global Website Data
          </button>
          <button onClick={() => setActiveTab("notifications")} className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${activeTab === "notifications" ? "bg-[#556b2f] text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}>
            Notifications (Beta)
          </button>
          <button onClick={() => setActiveTab("sessions")} className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${activeTab === "sessions" ? "bg-[#556b2f] text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}>
            Active Sessions
          </button>
        </div>

        {/* --- RIGHT CONTENT AREA --- */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 min-h-[500px]">
          
          {/* TAB 1: PROFILE & SECURITY */}
          {activeTab === "profile" && (
            <div className="space-y-12 animate-fadeIn">
              {/* Profile Details */}
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Admin Profile</h2>
                <form onSubmit={handleUpdateProfile} className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                    <input type="text" value={profile.fullName} onChange={(e) => setProfile({...profile, fullName: e.target.value})} className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#556b2f] outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Login Email</label>
                    <input type="email" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#556b2f] outline-none" required />
                  </div>
                  <button type="submit" disabled={loading} className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">Save Profile</button>
                </form>
              </section>

              {/* Password Change */}
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Change Password</h2>
                <form onSubmit={handleUpdatePassword} className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Current Password</label>
                    <input type="password" value={passwords.oldPassword} onChange={(e) => setPasswords({...passwords, oldPassword: e.target.value})} className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#556b2f] outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">New Password</label>
                    <input type="password" value={passwords.newPassword} onChange={(e) => setPasswords({...passwords, newPassword: e.target.value})} className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#556b2f] outline-none" required minLength="6"/>
                  </div>
                  <button type="submit" disabled={loading} className="px-6 py-2 bg-[#556b2f] text-white rounded-lg hover:bg-[#7f9f3f] transition-colors">Update Password</button>
                </form>
              </section>
            </div>
          )}

          {/* --- UI PREFERENCES SECTION --- */}
              <section className="pt-6 border-t mt-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Appearance</h2>
                
                <div className="flex items-center justify-between p-4 border rounded-xl bg-gray-50 max-w-md">
                  <div>
                    <h4 className="font-semibold text-gray-800">Dark Mode</h4>
                    <p className="text-sm text-gray-500">Easier on the eyes for night-time work.</p>
                  </div>
                  
                  {/* The Toggle Switch */}
                  <button 
                    onClick={toggleTheme}
                    className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none ${isDarkMode ? 'bg-[#556b2f]' : 'bg-gray-300'}`}
                  >
                    <span 
                      className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-8' : 'translate-x-1'}`}
                    />
                  </button>
                </div>
              </section>

          {/* TAB 2: GLOBAL WEBSITE DATA */}
          {activeTab === "website" && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Public Website Settings</h2>
              <p className="text-sm text-gray-500 mb-6">Changes made here will instantly update the contact information shown to students on the main website.</p>
              
              <form onSubmit={handleUpdateSiteData} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700">Contact Information</h3>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Official Email</label>
                    <input type="email" value={siteData.contactEmail} onChange={(e) => setSiteData({...siteData, contactEmail: e.target.value})} className="w-full border rounded-lg p-2" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Primary Phone</label>
                    <input type="text" value={siteData.phone1} onChange={(e) => setSiteData({...siteData, phone1: e.target.value})} className="w-full border rounded-lg p-2" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Secondary Phone</label>
                    <input type="text" value={siteData.phone2} onChange={(e) => setSiteData({...siteData, phone2: e.target.value})} className="w-full border rounded-lg p-2" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Academy Address</label>
                    <textarea value={siteData.address} onChange={(e) => setSiteData({...siteData, address: e.target.value})} className="w-full border rounded-lg p-2 h-24" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700">Social Media Links</h3>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Instagram URL</label>
                    <input type="text" value={siteData.instagram} onChange={(e) => setSiteData({...siteData, instagram: e.target.value})} className="w-full border rounded-lg p-2" placeholder="https://instagram.com/..." />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">YouTube URL</label>
                    <input type="text" value={siteData.youtube} onChange={(e) => setSiteData({...siteData, youtube: e.target.value})} className="w-full border rounded-lg p-2" placeholder="https://youtube.com/..." />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Facebook URL</label>
                    <input type="text" value={siteData.facebook} onChange={(e) => setSiteData({...siteData, facebook: e.target.value})} className="w-full border rounded-lg p-2" placeholder="https://facebook.com/..." />
                  </div>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button type="submit" disabled={loading} className="w-full md:w-auto px-8 py-3 bg-[#556b2f] text-white font-bold rounded-xl hover:bg-[#7f9f3f] transition-all shadow-md">
                    {loading ? "Saving..." : "Save Public Settings"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: NOTIFICATIONS (UI Mockup) */}
          {activeTab === "notifications" && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Notification Preferences</h2>
              <div className="bg-yellow-50 text-yellow-800 p-4 rounded-xl mb-6 text-sm border border-yellow-200">
                🚀 <b>Pro Feature:</b> These toggles are currently UI placeholders. Connecting them to an email server like Nodemailer is planned for v2.0!
              </div>
              
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
                  <div>
                    <h4 className="font-semibold text-gray-800">New Enquiry Alerts</h4>
                    <p className="text-sm text-gray-500">Receive an email immediately when a student submits an enquiry.</p>
                  </div>
                  <input type="checkbox" className="w-6 h-6 text-[#556b2f] rounded" defaultChecked />
                </label>
                
                <label className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
                  <div>
                    <h4 className="font-semibold text-gray-800">Daily Digest</h4>
                    <p className="text-sm text-gray-500">Receive a summary of pending enquiries every morning at 8:00 AM.</p>
                  </div>
                  <input type="checkbox" className="w-6 h-6 text-[#556b2f] rounded" />
                </label>
              </div>
            </div>
          )}

          {/* TAB 4: SESSIONS (UI Mockup) */}
          {activeTab === "sessions" && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Active Sessions & Security</h2>
              <p className="text-sm text-gray-500 mb-6">Manage the devices currently logged into the Prahar Admin panel.</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-green-200 bg-green-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">💻</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Windows PC - Chrome</h4>
                      <p className="text-xs text-green-600 font-bold">Active Now • Mumbai, India</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-xl opacity-60">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">iPhone 14 Pro - Safari</h4>
                      <p className="text-xs text-gray-500">Last active: 2 hours ago</p>
                    </div>
                  </div>
                  <button className="text-sm text-red-500 hover:text-red-700 font-medium">Revoke</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminSettings;