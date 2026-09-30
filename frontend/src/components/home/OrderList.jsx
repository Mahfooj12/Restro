
// import React from "react";
// import { FaCheckDouble, FaLongArrowAltRight, FaCircle } from "react-icons/fa";
// import { getAvatarName } from "../../utils/index";

// const OrderList = ({ order }) => {
//   return (
//     <div className="flex items-center justify-between bg-[#1f1f1f] rounded-xl p-3 mb-2 shadow-md hover:bg-[#252525] transition-all duration-200">
//       {/* Left: Avatar + Info */}
//       <div className="flex items-center gap-3">
//         {/* Avatar */}
//         <div className="bg-[#f6b100] w-12 h-12 flex items-center justify-center text-lg font-bold rounded-full shadow-sm">
//           {getAvatarName(order.customerDetails.name)}
//         </div>

//         {/* Customer Info */}
//         <div className="flex flex-col">
//           <h1 className="text-[#f5f5f5] text-sm font-semibold tracking-wide">
//             {order.customerDetails.name}
//           </h1>
//           <p className="text-[#ababab] text-xs">{order.items.length} Items</p>
//         </div>
//       </div>

//       {/* Middle: Table Badge */}
//       <div>
//         <span className="text-[#f6b100] border border-[#f6b100] px-3 py-1 rounded-full text-xs font-semibold">
//           Table <FaLongArrowAltRight className="inline ml-1 text-xs" />{" "}
//           {order.table.tableNo}
//         </span>
//       </div>

//       {/* Right: Status Badge */}
//       <div>
//         {order.orderStatus === "Ready" ? (
//           <span className="flex items-center gap-1 text-green-500 bg-[#2e4a40] px-3 py-1 rounded-full text-xs font-medium">
//             <FaCheckDouble /> {order.orderStatus}
//           </span>
//         ) : (
//           <span className="flex items-center gap-1 text-yellow-500 bg-[#4a452e] px-3 py-1 rounded-full text-xs font-medium">
//             <FaCircle /> {order.orderStatus}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderList;

import React from "react";
import { FaCheckDouble, FaLongArrowAltRight, FaCircle } from "react-icons/fa";
import { getAvatarName } from "../../utils/index";

const OrderList = ({ order }) => {
  const statusStyles = {
    Ready: {
      bg: "bg-green-900/40 border border-green-500/40",
      text: "text-green-400",
      icon: <FaCheckDouble />,
    },
    "In Progress": {
      bg: "bg-yellow-900/40 border border-yellow-500/40",
      text: "text-yellow-400",
      icon: <FaCircle className="animate-pulse" />,
    },
    default: {
      bg: "bg-gray-800/50 border border-gray-600/40",
      text: "text-gray-400",
      icon: <FaCircle />,
    },
  };

  const currentStatus = statusStyles[order.orderStatus] || statusStyles.default;

  return (
    <div className="flex items-center justify-between 
                    bg-gradient-to-r from-[#1c1c1c] to-[#252525] 
                    rounded-xl p-3 mb-3 shadow-md 
                    hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
      
      {/* Left: Avatar + Info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 
                        w-12 h-12 flex items-center justify-center 
                        text-lg font-bold rounded-full shadow-md text-black">
          {getAvatarName(order.customerDetails.name)}
        </div>

        {/* Customer Info */}
        <div className="flex flex-col">
          <h1 className="text-[#f5f5f5] text-sm font-semibold tracking-wide">
            {order.customerDetails.name}
          </h1>
          <p className="text-[#9ca3af] text-xs">{order.items.length} Items</p>
        </div>
      </div>

      {/* Middle: Table Badge */}
      <div>
        <span className="flex items-center gap-1 text-xs font-semibold 
                        text-yellow-400 bg-yellow-900/30 
                        px-3 py-1 rounded-full border border-yellow-500/40">
          Table <FaLongArrowAltRight className="text-yellow-400 text-xs" />{" "}
          {order.table.tableNo}
        </span>
      </div>

      {/* Right: Status Badge */}
      <div>
        <span
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${currentStatus.bg} ${currentStatus.text}`}
        >
          {currentStatus.icon} {order.orderStatus}
        </span>
      </div>
    </div>
  );
};

export default OrderList;
