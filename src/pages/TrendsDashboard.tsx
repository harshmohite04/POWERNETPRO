import { Link } from "react-router-dom";
import { FaArrowLeft, FaSignOutAlt, FaChartBar, FaChartLine, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "../assets/powernetImg.jpg";
const TrendsDashboard = () => {
    const [activeTab, setActiveTab] = useState("trends");
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                className="w-20 bg-gradient-to-b from-red-500 to-pink-600 text-white flex flex-col items-center py-6 shadow-lg"
            >
                <Link to="/dashboard">
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
                    className="flex justify-between items-center bg-white p-6 rounded-xl shadow-lg mb-6 text-white"
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
                        className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                        <FaExclamationTriangle size={24} />
                    </motion.button>
                </motion.div>

                {/* Tabs & Ecosystem Selection */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 rounded-xl shadow-md mb-6"
                >
                    <div className="flex gap-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab("ecosystem")}
                            className={`px-6 py-2 rounded-lg transition-colors ${activeTab === "ecosystem"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            Ecosystem Dash
                        </motion.button>
                        <Link to="/kpis">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2 rounded-lg transition-colors ${activeTab === "kpis"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                KPIs
                            </motion.button>
                        </Link>
                        <Link to="/trends">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveTab("trends")}
                                className={`px-6 py-2 rounded-lg transition-colors ${activeTab === "trends"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                Trends
                            </motion.button>
                        </Link>
                    </div>

                </motion.div>

                {/* Power Metrics & Graphs */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <div className="bg-white p-6 rounded-xl shadow-md">COMING SOON....</div>
                </motion.div>

                {/* Data Graphs */}

            </div>
        </div>
    );
};

export default TrendsDashboard;
