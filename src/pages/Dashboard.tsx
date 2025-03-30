import { Link } from "react-router-dom";
import { FaSignOutAlt, FaDownload, FaThLarge, FaSearch, FaFilter, FaRedo, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "../assets/powernetImg.jpg";
const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const sites = [
    {
      id: 1,
      name: "Example Site",
      address: "123 Street, City",
      peakPower: "500 kW",
      powerIn: "300 kW",
      powerOut: "200 kW",
      status: "Active",
    },
    // Add more sites as needed
  ];

  const filteredSites = sites.filter(site =>
    site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    site.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="w-20 bg-gradient-to-b from-red-500 to-pink-600 text-white flex flex-col items-center py-6 shadow-lg"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 p-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          <FaThLarge size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 p-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          <FaDownload size={24} />
        </motion.button>
        <Link to="/" className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-700 p-3 rounded-lg hover:bg-red-800 transition-colors"
          >
            <FaSignOutAlt size={20} />
          </motion.button>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center bg-white p-6 rounded-xl shadow-md mb-6"
        >
          <img src={Logo} alt="logo" className="self-center w-xs " />
          <div className="flex rounded-xl bg-gray-300">
            <div className=" px-5 py-2 text-2xl text-black">Energy Generated</div>
            <div className="bg-gray-500 text-white rounded-r-2xl px-5 py-2 text-2xl">100 Kwh</div>
          </div>
          <div className="flex rounded-xl bg-gray-300">
            <div className=" px-5 py-2 text-2xl text-black">Energy Exported</div>
            <div className="bg-gray-500 text-white rounded-r-2xl px-5 py-2 text-2xl">90 Kwh</div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
          >
            <FaExclamationTriangle size={24} />
          </motion.button>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mb-6 bg-white p-4 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold text-gray-800">Your Sites</h2>
          <div className="text-black bg-gray-300 px-2 py-1 rounded-md ">
            {sites.length}
          </div>
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sites..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2"
          >
            <FaSearch /> Search
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2"
          >
            <FaRedo /> Reset
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2"
          >
            <FaFilter /> Filter
          </motion.button>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="overflow-x-auto bg-white rounded-xl shadow-md"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 text-left">Sr.No</th>
                <th className="p-4 text-left">Site Name</th>
                <th className="p-4 text-left">Address</th>
                <th className="p-4 text-left">Peak Power</th>
                <th className="p-4 text-left">Power I/P</th>
                <th className="p-4 text-left">Power O/P</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Report</th>
              </tr>
            </thead>
            <tbody>
              {filteredSites.map((site, index) => (
                <motion.tr
                  key={site.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 border-b">{index + 1}</td>
                  <td className="p-4 border-b font-medium">{site.name}</td>
                  <td className="p-4 border-b">{site.address}</td>
                  <td className="p-4 border-b">{site.peakPower}</td>
                  <td className="p-4 border-b">{site.powerIn}</td>
                  <td className="p-4 border-b">{site.powerOut}</td>
                  <td className="p-4 border-b">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {site.status}
                    </span>
                  </td>
                  <td className="p-4 border-b">
                    <Link to="/ecosystem">
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        📄
                      </button>
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
