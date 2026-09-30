// import React, { useState, useEffect } from "react";
// import { MdTableBar, MdCategory } from "react-icons/md";
// import { BiSolidDish } from "react-icons/bi";
// import Metrics from "../components/dashboard/Metrics";
// import RecentOrders from "../components/dashboard/RecentOrders";
// import Modal from "../components/dashboard/Modal";

// const buttons = [
//   { label: "Add Table", icon: <MdTableBar />, action: "table" },
//   { label: "Add Category", icon: <MdCategory />, action: "category" },
//   { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
// ];

// const tabs = ["Metrics", "Orders", "Payments"];

// const Dashboard = () => {

//   useEffect(() => {
//     document.title = "POS | Admin Dashboard"
//   }, [])

//   const [isTableModalOpen, setIsTableModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("Metrics");

//   const handleOpenModal = (action) => {
//     if (action === "table") setIsTableModalOpen(true);
//   };

//   return (
//     <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)]">
//       <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
//         <div className="flex items-center gap-3">
//           {buttons.map(({ label, icon, action }) => {
//             return (
//               <button
//                 onClick={() => handleOpenModal(action)}
//                 className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2"
//               >
//                 {label} {icon}
//               </button>
//             );
//           })}
//         </div>

//         <div className="flex items-center gap-3">
//           {tabs.map((tab) => {
//             return (
//               <button
//                 className={`
//                 px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 ${
//                   activeTab === tab
//                     ? "bg-[#262626]"
//                     : "bg-[#1a1a1a] hover:bg-[#262626]"
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {activeTab === "Metrics" && <Metrics />}
//       {activeTab === "Orders" && <RecentOrders />}
//       {activeTab === "Payments" && 
//         <div className="text-white p-6 container mx-auto">
//           Payment Component Coming Soon
//         </div>
//       }

//       {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen} />}
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { MdTableBar, MdCategory } from "react-icons/md";
// import { BiSolidDish } from "react-icons/bi";
// import Metrics from "../components/dashboard/Metrics";
// import RecentOrders from "../components/dashboard/RecentOrders";
// import Modal from "../components/dashboard/Modal";

// const buttons = [
//   { label: "Add Table", icon: <MdTableBar />, action: "table" },
//   { label: "Add Category", icon: <MdCategory />, action: "category" },
//   { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
// ];

// const tabs = ["Metrics", "Orders", "Payments"];

// const Dashboard = () => {
//   useEffect(() => {
//     document.title = "POS | Admin Dashboard";
//   }, []);

//   const [isTableModalOpen, setIsTableModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("Metrics");
//   const [showReceipt, setShowReceipt] = useState(false);

//   const handleOpenModal = (action) => {
//     if (action === "table") setIsTableModalOpen(true);
//   };

//   return (
//     <div className="bg-[#1f1f1f] min-h-screen">
//       {/* Top Buttons + Tabs */}
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-4 gap-4">
//         {/* Action Buttons */}
//         <div className="flex flex-wrap items-center gap-3">
//           {buttons.map(({ label, icon, action }, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleOpenModal(action)}
//               className="bg-[#1a1a1a] hover:bg-[#262626] px-6 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 transition-all duration-200"
//             >
//               {label} {icon}
//             </button>
//           ))}
//         </div>

//         {/* Tabs */}
//         <div className="flex items-center gap-3">
//           {tabs.map((tab, idx) => (
//             <button
//               key={idx}
//               className={`px-6 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 transition-all duration-200 ${
//                 activeTab === tab
//                   ? "bg-[#262626]"
//                   : "bg-[#1a1a1a] hover:bg-[#262626]"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Tab Content */}
//       {activeTab === "Metrics" && <Metrics />}
//       {activeTab === "Orders" && <RecentOrders setShowReceipt={setShowReceipt} />}
//       {activeTab === "Payments" && (
//         <div className="text-white p-6 container mx-auto">
//           Payment Component Coming Soon
//         </div>
//       )}

//       {/* Add Table Modal */}
//       {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen} />}

//       {/* Receipt Overlay (centered) */}
//       {showReceipt && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-white text-black p-6 rounded-xl w-[500px] max-h-[80vh] overflow-y-auto shadow-xl">
//             <h3 className="text-lg font-bold mb-4">Receipt</h3>
//             {/* Receipt Content goes here */}
//             <button
//               onClick={() => setShowReceipt(false)}
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from "react";
import { MdTableBar, MdCategory } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import Metrics from "../components/dashboard/Metrics";
import RecentOrders from "../components/dashboard/RecentOrders";
import Modal from "../components/dashboard/Modal";

const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
];

const tabs = ["Metrics", "Orders", "Payments"];

const Dashboard = () => {
  useEffect(() => {
    document.title = "POS | Admin Dashboard";
  }, []);

  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Metrics");
  const [showReceipt, setShowReceipt] = useState(false);

  // Lock body scroll when receipt is open
  useEffect(() => {
    if (showReceipt) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showReceipt]);

  const handleOpenModal = (action) => {
    if (action === "table") setIsTableModalOpen(true);
  };

  return (
    <div className="bg-[#1f1f1f] overflow-hidden">
      {/* Top Buttons + Tabs */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-4 gap-2">
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {buttons.map(({ label, icon, action }, idx) => (
            <button
              key={idx}
              onClick={() => handleOpenModal(action)}
              className="bg-[#1a1a1a] hover:bg-[#262626] px-6 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 transition-all duration-200"
            >
              {label} {icon}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-3">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`px-6 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#262626]"
                  : "bg-[#1a1a1a] hover:bg-[#262626]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-6 md:px-4">
        {activeTab === "Metrics" && <Metrics />}
        {activeTab === "Orders" && <RecentOrders setShowReceipt={setShowReceipt} />}
        {activeTab === "Payments" && (
          <div className="text-white p-6">Payment Component Coming Soon</div>
        )}
      </div>

      {/* Add Table Modal */}
      {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen} />}

      {/* Receipt Overlay (centered, non-scrollable) */}
      {showReceipt && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl w-[500px] shadow-xl">
            <h3 className="text-lg font-bold mb-4">Receipt</h3>
            {/* Receipt Content goes here */}
            <p className="text-sm text-gray-700">
              This is a sample receipt. You can add your invoice/receipt component here.
            </p>
            <button
              onClick={() => setShowReceipt(false)}
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


