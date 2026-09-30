// import React from 'react'

// const MiniCard = ({title, icon, number, footerNum}) => {
//   return (
//     <div className='bg-[#1a1a1a] py-2 px-5 rounded-lg w-[50%]'>
//         <div className='flex items-start justify-between'>
//             <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>{title}</h1>
//             <button className={`${title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#f6b100]"} p-2 rounded-lg text-[#f5f5f5] text-lg`}>{icon}</button>
//         </div>
//         <div>
//             <h1 className='text-[#f5f5f5] text-3xl font-bold '>{
//               title === "Total Earnings" ? `₹${number}` : number}</h1>
//             <h1 className='text-[#f5f5f5] text-lg mt-1'><span className='text-[#02ca3a]'>{footerNum}%</span> than yesterday</h1>
//         </div>
//     </div>
//   )
// }

// export default MiniCard

import React from "react";
import { motion } from "framer-motion";

const MiniCard = ({ title, icon, number, footerNum }) => {
  const isEarnings = title === "Total Earnings";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] 
                 rounded-2xl p-5 w-full shadow-md border border-[#2e2e2e]"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
          {title}
        </h1>
        <div
          className={`p-3 rounded-xl shadow-md ${
            isEarnings
              ? "bg-gradient-to-r from-green-400 to-green-600"
              : "bg-gradient-to-r from-yellow-400 to-orange-500"
          }`}
        >
          <span className="text-white text-xl">{icon}</span>
        </div>
      </div>

      {/* Numbers */}
      <div>
        <h1 className="text-3xl font-extrabold text-white drop-shadow-sm">
          {isEarnings ? `₹${number}` : number}
        </h1>
        <p className="text-sm mt-2 text-[#9ca3af]">
          <span className="text-green-400 font-semibold">
            {footerNum}%{" "}
          </span>
          than yesterday
        </p>
      </div>
    </motion.div>
  );
};

export default MiniCard;
