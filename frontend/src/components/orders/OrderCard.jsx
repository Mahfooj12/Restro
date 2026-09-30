// import React from "react";
// import { FaCheckDouble, FaLongArrowAltRight } from "react-icons/fa";
// import { FaCircle } from "react-icons/fa";
// import { formatDateAndTime, getAvatarName } from "../../utils/index";

// const OrderCard = ({ key, order }) => {
//   console.log(order);
//   return (
//     <div key={key} className="w-[400px] bg-[#262626] p-1 rounded-lg">
//       <div className="flex items-center gap-1">
//         <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
//           {getAvatarName(order.customerDetails.name)}
//         </button>
//         <div className="flex items-center justify-between w-[100%]">
//           <div className="flex flex-col items-start gap-1">
//             <h1 className="text-[#f5f5f5] text-sm font-semibold tracking-wide">
//               {order.customerDetails.name}
//             </h1>
//             <p className="text-[#ababab] text-sm">#{Math.floor(new Date(order.orderDate).getTime())} / Dine in 
//               Table <FaLongArrowAltRight className="text-[#ababab] inline" /> {order.table.tableNo}

//             </p>
//             {/* <p className="text-[#ababab] text-sm">Table <FaLongArrowAltRight className="text-[#ababab] inline" /> {order.table.tableNo}</p> */}
//           </div>
//           <div className="flex flex-col items-end gap-2">
//             {order.orderStatus === "Ready" ? (
//               <>
//                 <p className="text-green-600 bg-[#2e4a40] px-2 py-2 rounded-lg">
//                   <FaCheckDouble className="inline mr-2" /> {order.orderStatus}
//                 </p>
//                 <p className="text-[#ababab] text-sm">
//                   <FaCircle className="inline mr-2 text-green-600" /> Ready to
//                   serve
//                 </p>
//               </>
//             ) : (
//               <>
                
//                 <p className="text-yellow-600 bg-[#4a452e] px-4 py-2 rounded-lg">
//                   <FaCircle className="inline mr-2" />{order.orderStatus}
//                 </p>
//                 <p className="text-[#ababab] text-sm">
//                   <FaCircle className="inline mr-2 text-yellow-600" />Preparing order
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between items-center mt-2 text-[#ababab]">
//         <p>{formatDateAndTime(order.orderDate)}</p>
//         <p>{order.items.length} Items</p>
//       </div>
//       <hr className="w-full mt-4 border-t-1 border-gray-500" />
//       <div className="flex items-center justify-between mt-4">
//         <h1 className="text-[#f5f5f5] text-lg font-semibold">Total</h1>
//         <p className="text-[#f5f5f5] text-lg font-semibold">₹{order.bills.totalWithTax.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default OrderCard;




// import React from "react";
// import { FaCheckDouble, FaLongArrowAltRight, FaCircle } from "react-icons/fa";
// import { formatDateAndTime, getAvatarName } from "../../utils/index";

// const OrderCard = ({ order }) => {
//   return (
//     <div className="w-[380px] bg-[#2e2e2e] p-4 rounded-2xl shadow-md shadow-black/40 hover:shadow-lg hover:shadow-black/60 transition-all duration-300 ">
//       {/* Top Section */}
//       <div className="flex justify-between items-start">
//         {/* Avatar + Customer Info */}
//         <div className="flex items-center gap-3">
//           <div className="bg-[#f6b100] w-12 h-12 flex items-center justify-center text-lg font-bold rounded-full shadow-md">
//             {getAvatarName(order.customerDetails.name)}
//           </div>
//           <div>
//             <h1 className="text-[#f5f5f5] text-sm font-semibold tracking-wide">
//               {order.customerDetails.name}
//             </h1>
//             <p className="text-[#ababab] text-sm">#{Math.floor(new Date(order.orderDate).getTime())} / Dine in</p>
//             <p className="text-[#ababab] text-sm">Table <FaLongArrowAltRight className="text-[#ababab] inline" /> {order.table.tableNo}</p>
//           </div>
//         </div>

//         {/* Status Badge */}
//         <div className="flex flex-col items-end gap-1">
//           {order.orderStatus === "Ready" ? (
//             <>
//               <p className="text-green-500 bg-[#2e4a40] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                 <FaCheckDouble /> {order.orderStatus}
//               </p>
//               <p className="text-[#ababab] text-xs flex items-center gap-1">
//                 <FaCircle className="text-green-500 text-[8px]" /> Ready to serve
//               </p>
//             </>
//           ) : (
//             <>
//               <p className="text-yellow-500 bg-[#4a452e] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                 <FaCircle /> {order.orderStatus}
//               </p>
//               <p className="text-[#ababab] text-xs flex items-center gap-1">
//                 <FaCircle className="text-yellow-500 text-[8px]" /> Preparing order
//               </p>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Middle Info */}
//       <div className="flex justify-between items-center mt-4 text-[#ababab] text-sm">
//         <p>{formatDateAndTime(order.orderDate)}</p>
//         <p>{order.items.length} Items</p>
//       </div>

//       {/* Divider */}
//       <hr className="w-full mt-3 border-gray-600" />

//       {/* Footer */}
//       <div className="flex items-center justify-between mt-3">
//         <h1 className="text-[#f5f5f5] text-base font-semibold">Total</h1>
//         <p className="text-[#f6b100] text-lg font-bold">
//           ₹{order.bills.totalWithTax.toFixed(2)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OrderCard;

import React from "react";
import {
  FaCheckDouble,
  FaLongArrowAltRight,
  FaCircle,
  FaCheck,
} from "react-icons/fa";
import { formatDateAndTime, getAvatarName } from "../../utils/index";

const OrderCard = ({ order }) => {
  // 🔹 Status styles map
  const statusStyles = {
    "In Progress": {
      bg: "bg-[#4a452e]",
      text: "text-yellow-500",
      icon: <FaCircle />,
      subtext: "Preparing order",
      dotColor: "text-yellow-500",
    },
    Ready: {
      bg: "bg-[#2e4a40]",
      text: "text-green-500",
      icon: <FaCheckDouble />,
      subtext: "Ready to serve",
      dotColor: "text-green-500",
    },
    Completed: {
      bg: "bg-[#2e3f4a]",
      text: "text-blue-500",
      icon: <FaCheck />,
      subtext: "Order completed",
      dotColor: "text-blue-500",
    },
    Cancelled: {
      bg: "bg-[#4a2e2e]",
      text: "text-red-500",
      icon: <FaCircle />,
      subtext: "Order cancelled",
      dotColor: "text-red-500",
    },
  };

  const currentStatus = statusStyles[order.orderStatus] || statusStyles["In Progress"];

  return (
    <div className="w-[380px] bg-[#2e2e2e] p-4 rounded-2xl shadow-md shadow-black/40 hover:shadow-lg hover:shadow-black/60 transition-all duration-300">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        {/* Avatar + Customer Info */}
        <div className="flex items-center gap-3">
          <div className="bg-[#f6b100] w-12 h-12 flex items-center justify-center text-lg font-bold rounded-full shadow-md">
            {getAvatarName(order.customerDetails.name)}
          </div>
          <div>
            <h1 className="text-[#f5f5f5] text-sm font-semibold tracking-wide capitalize">
              {order.customerDetails.name}
            </h1>
            <p className="text-[#ababab] text-sm">
              #{Math.floor(new Date(order.orderDate).getTime())} / Dine in
            </p>
            <p className="text-[#ababab] text-sm">
              Table <FaLongArrowAltRight className="text-[#ababab] inline" />{" "}
              {order.table.tableNo}
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex flex-col items-end gap-1">
          <p
            className={`${currentStatus.text} ${currentStatus.bg} px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1`}
          >
            {currentStatus.icon} {order.orderStatus}
          </p>
          <p className="text-[#ababab] text-xs flex items-center gap-1">
            <FaCircle className={`${currentStatus.dotColor} text-[8px]`} />{" "}
            {currentStatus.subtext}
          </p>
        </div>
      </div>

      {/* Middle Info */}
      <div className="flex justify-between items-center mt-4 text-[#ababab] text-sm">
        <p>{formatDateAndTime(order.orderDate)}</p>
        <p>{order.items.length} Items</p>
      </div>

      {/* Divider */}
      <hr className="w-full mt-3 border-gray-600" />

      {/* Footer */}
      <div className="flex items-center justify-between mt-3">
        <h1 className="text-[#f5f5f5] text-base font-semibold">Total</h1>
        <p className="text-[#f6b100] text-lg font-bold">
          ₹{order.bills.totalWithTax.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
