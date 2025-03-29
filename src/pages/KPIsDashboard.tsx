import { Link } from "react-router-dom";
import { FaArrowLeft, FaSignOutAlt, FaExclamationTriangle, FaChartLine, FaChartBar, FaBolt, FaLeaf, FaCog, FaBug } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const KPIsDashboard = () => {
  const [activeTab, setActiveTab] = useState("kpis");

  const kpis = [
    {
      title: "Demand Forecasting Accuracy",
      value: "94.5%",
      trend: "+2.3%",
      icon: FaChartLine,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Mean Absolute Percentage Error",
      value: "3.2%",
      trend: "-0.5%",
      icon: FaChartBar,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Load Balancing Efficiency",
      value: "98.7%",
      trend: "+1.2%",
      icon: FaBolt,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Peak Load Reduction",
      value: "15.3%",
      trend: "+3.1%",
      icon: FaChartLine,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Demand Response Activation Rate",
      value: "92.4%",
      trend: "+1.8%",
      icon: FaBolt,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Energy Consumption Reduction",
      value: "18.6%",
      trend: "+2.7%",
      icon: FaLeaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Grid Stability Index",
      value: "96.8%",
      trend: "+1.5%",
      icon: FaBolt,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Renewable Energy Utilization Rate",
      value: "85.2%",
      trend: "+4.2%",
      icon: FaLeaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "AI Model Training Time",
      value: "2.3h",
      trend: "-0.5h",
      icon: FaCog,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Fault Detection Codes",
      value: "12",
      trend: "-3",
      icon: FaBug,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="w-20 bg-gradient-to-b from-red-500 to-pink-600 text-white flex flex-col items-center py-6 shadow-lg"
      >
        <Link to="/ecosystem">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 p-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <FaArrowLeft size={24} />
          </motion.button>
        </Link>
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
          className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg mb-6 text-white"
        >
          <h1 className="text-3xl font-bold">⚡ POWERNETPRO</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <FaExclamationTriangle size={24} />
          </motion.button>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 bg-white p-4 rounded-xl shadow-md mb-6"
        >
          <Link to="/ecosystem">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === "ecosystem"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Ecosystem Dash
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("kpis")}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === "kpis"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            KPIs
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("trends")}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === "trends"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Trends
          </motion.button>
        </motion.div>

        {/* KPIs Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className={`${kpi.bgColor} p-3 rounded-lg w-fit mb-4`}>
                <kpi.icon className={`${kpi.color} text-2xl`} />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{kpi.title}</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">{kpi.value}</span>
                <span className={`text-sm font-medium ${
                  kpi.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default KPIsDashboard;
