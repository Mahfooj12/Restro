// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { formatDate, getAvatarName } from "../../utils";

// const CustomerInfo = () => {
//   const [dateTime, setDateTime] = useState(new Date());
//   const customerData = useSelector((state) => state.customer);

//   return (
//     <div className="flex items-center justify-between px-4 mb-1">
//       <div className="flex flex-col items-start">
//         <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
//           {customerData.customerName || "Customer Name"}
//         </h1>
//         <p className="text-xs text-[#ababab] font-medium mt-1">
//           #{customerData.orderId || "N/A"} / Dine in
//         </p>
//         <p className="text-xs text-[#ababab] font-medium mt-2">
//           {formatDate(dateTime)}
//         </p>
//       </div>
//       <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
//         {getAvatarName(customerData.customerName) || "CN"}
//       </button>
//     </div>
//   );
// };

// export default CustomerInfo;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatDate, getAvatarName } from "../../utils";

const CustomerInfo = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const customerData = useSelector((state) => state.customer);

  // Auto update time every second
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-between bg-[#242424] rounded-xl px-5 py-3 shadow-md mb-3">
      {/* Left Side */}
      <div className="flex flex-col">
        <h1 className="text-lg text-[#f5f5f5] font-bold">
          {customerData.customerName || "Customer Name"}
        </h1>
        <p className="text-xs text-gray-400 font-medium mt-1">
          Order #{customerData.orderId || "N/A"} • Dine In
        </p>
        <p className="text-xs text-gray-500 font-medium mt-1">
          {formatDate(dateTime)}
        </p>
      </div>

      {/* Avatar */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full 
        bg-gradient-to-r from-yellow-400 to-yellow-600 
        text-black font-bold text-lg shadow-lg">
        {getAvatarName(customerData.customerName) || "CN"}
      </div>
    </div>
  );
};

export default CustomerInfo;
