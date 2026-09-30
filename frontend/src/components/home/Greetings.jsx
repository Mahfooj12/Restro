// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// const Greetings = () => {
//   const userData = useSelector(state => state.user);
//   const [dateTime, setDateTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setDateTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatDate = (date) => {
//     const months = [
//       'January', 'February', 'March', 'April', 'May', 'June',
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ];
//     return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
//   };

//   const formatTime = (date) =>
//     `${String(date.getHours()).padStart(2, "0")}:${String(
//       date.getMinutes()
//     ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

//   return (
//     <div className="flex justify-between items-center px-8 mt-1">
//       <div>
//         <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">
//           Good Morning, {userData.name || "TEST USER"}
//         </h1>
//         <p className="text-[#ababab] text-sm">
//           Give your best services for customers 😀
//         </p>
//       </div>
//       <div>
//         <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]">{formatTime(dateTime)}</h1>
//         <p className="text-[#ababab] text-sm">{formatDate(dateTime)}</p>
//       </div>
//     </div>
//   );
// };

// export default Greetings;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaRegSmile } from "react-icons/fa";

const Greetings = () => {
  const userData = useSelector((state) => state.user);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December",
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
      2,
      "0"
    )}, ${date.getFullYear()}`;
  };

  const formatTime = (date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex justify-between items-center px-8 py-4 
                 bg-gradient-to-r from-[#1f1f1f] to-[#2a2a2a] 
                 rounded-2xl shadow-lg border border-[#2e2e2e]"
    >
      {/* Left side - Greeting */}
      <div>
        <h1 className="text-3xl font-bold tracking-wide flex items-center gap-2">
          <span className="text-[#f5f5f5]">Good Morning,</span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {userData.name || "TEST USER"}
          </span>
          <FaRegSmile className="text-yellow-400 ml-1 animate-pulse" />
        </h1>
        <p className="text-[#9ca3af] text-sm mt-1 italic">
          Give your best services for customers ✨
        </p>
      </div>

      {/* Right side - Time & Date */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-right"
      >
        <h1 className="text-4xl font-extrabold tracking-widest 
                       bg-gradient-to-r from-yellow-400 to-orange-500 
                       bg-clip-text text-transparent drop-shadow-lg">
          {formatTime(dateTime)}
        </h1>
        <p className="text-[#9ca3af] text-sm mt-1">{formatDate(dateTime)}</p>
      </motion.div>
    </motion.div>
  );
};

export default Greetings;


