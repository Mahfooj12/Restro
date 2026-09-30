// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import OrderList from "./OrderList";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { enqueueSnackbar } from "notistack";
// import { getOrders } from "../../https/index";

// const RecentOrders = () => {
//   const { data: resData, isError } = useQuery({
//     queryKey: ["orders"],
//     queryFn: async () => {
//       return await getOrders();
//     },
//     placeholderData: keepPreviousData,
//   });

//   if (isError) {
//     enqueueSnackbar("Something went wrong!", { variant: "error" });
//   }

//   return (
//     <div className="px-8 mt-2">
//       <div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">
//         <div className="flex justify-between items-center px-6 py-2">
//           <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
//             Recent Orders
//           </h1>
//           <a href="" className="text-[#025cca] text-sm font-semibold">
//             View all
//           </a>
//         </div>

//         <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-2 mx-6">
//           <FaSearch className="text-[#f5f5f5]" />
//           <input
//             type="text"
//             placeholder="Search recent orders"
//             className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
//           />
//         </div>

//         {/* Order list */}
//         <div className="mt-4 px-6 overflow-y-scroll h-[150px] scrollbar-hide">
//           {resData?.data.data.length > 0 ? (
//             resData.data.data.map((order) => {
//               return <OrderList key={order._id} order={order} />;
//             })
//           ) : (
//             <p className="col-span-3 text-gray-500">No orders available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;

import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { getOrders } from "../../https/index";
import { motion } from "framer-motion";

const RecentOrders = () => {
  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-8 mt-1"
    >
      <div className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] w-full h-[450px] rounded-2xl shadow-md border border-[#2e2e2e] flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#2e2e2e]">
          <h1 className="text-[#f5f5f5] text-lg font-bold tracking-wide">
            Recent Orders
          </h1>
          <a
            href="#"
            className="text-blue-400 text-sm font-semibold hover:underline"
          >
            View all
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-[#252525] rounded-xl px-5 py-2 mx-6 mt-3 shadow-inner focus-within:ring-2 focus-within:ring-blue-500">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search recent orders..."
            className="bg-transparent outline-none text-[#f5f5f5] text-sm w-full"
          />
        </div>

        {/* Order List */}
        <div className="mt-4 px-6 overflow-y-scroll h-[100px] scrollbar-hide  scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">
          {resData?.data.data.length > 0 ? (
            resData.data.data.map((order) => {
              return <OrderList key={order._id} order={order} />;
            })
          ) : (
            <p className="text-gray-500 italic">No orders available</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RecentOrders;

