// import React from "react";
// import { orders } from "../../constants";
// import { GrUpdate } from "react-icons/gr";
// import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { enqueueSnackbar } from "notistack";
// import { getOrders, updateOrderStatus } from "../../https/index";
// import { formatDateAndTime } from "../../utils";

// const RecentOrders = () => {
//   const queryClient = useQueryClient();
//   const handleStatusChange = ({orderId, orderStatus}) => {
//     console.log(orderId)
//     orderStatusUpdateMutation.mutate({orderId, orderStatus});
//   };

//   const orderStatusUpdateMutation = useMutation({
//     mutationFn: ({orderId, orderStatus}) => updateOrderStatus({orderId, orderStatus}),
//     onSuccess: (data) => {
//       enqueueSnackbar("Order status updated successfully!", { variant: "success" });
//       queryClient.invalidateQueries(["orders"]); // Refresh order list
//     },
//     onError: () => {
//       enqueueSnackbar("Failed to update order status!", { variant: "error" });
//     }
//   })

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

//   console.log(resData.data.data);

//   return (
//     <div className="container mx-auto bg-[#262626] p-4 rounded-lg">
//       <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
//         Recent Orders
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="w-full text-left text-[#f5f5f5]">
//           <thead className="bg-[#333] text-[#ababab]">
//             <tr>
//               <th className="p-3">Order ID</th>
//               <th className="p-3">Customer</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Date & Time</th>
//               <th className="p-3">Items</th>
//               <th className="p-3">Table No</th>
//               <th className="p-3">Total</th>
//               <th className="p-3 text-center">Payment Method</th>
//             </tr>
//           </thead>
//           <tbody>
//             {resData?.data.data.map((order, index) => (
//               <tr
//                 key={index}
//                 className="border-b border-gray-600 hover:bg-[#333]"
//               >
//                 <td className="p-4">#{Math.floor(new Date(order.orderDate).getTime())}</td>
//                 <td className="p-4">{order.customerDetails.name}</td>
//                 <td className="p-4">
//                   <select
//                     className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
//                       order.orderStatus === "Ready"
//                         ? "text-green-500"
//                         : "text-yellow-500"
//                     }`}
//                     value={order.orderStatus}
//                     onChange={(e) => handleStatusChange({orderId: order._id, orderStatus: e.target.value})}
//                   >
//                     <option className="text-yellow-500" value="In Progress">
//                       In Progress
//                     </option>
//                     <option className="text-green-500" value="Ready">
//                       Ready
//                     </option>
//                   </select>
//                 </td>
//                 <td className="p-4">{formatDateAndTime(order.orderDate)}</td>
//                 <td className="p-4">{order.items.length} Items</td>
//                 <td className="p-4">Table - {order.table.tableNo}</td>
//                 <td className="p-4">₹{order.bills.totalWithTax}</td>
//                 <td className="p-4">
//                   {order.paymentMethod}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;

// import React from "react";
// import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { enqueueSnackbar } from "notistack";
// import { getOrders, updateOrderStatus } from "../../https/index";
// import { formatDateAndTime } from "../../utils";

// const RecentOrders = () => {
//   const queryClient = useQueryClient();

//   const handleStatusChange = ({ orderId, orderStatus }) => {
//     orderStatusUpdateMutation.mutate({ orderId, orderStatus });
//   };

//   const orderStatusUpdateMutation = useMutation({
//     mutationFn: ({ orderId, orderStatus }) =>
//       updateOrderStatus({ orderId, orderStatus }),
//     onSuccess: () => {
//       enqueueSnackbar("Order status updated successfully!", {
//         variant: "success",
//       });
//       queryClient.invalidateQueries(["orders"]);
//     },
//     onError: () => {
//       enqueueSnackbar("Failed to update order status!", { variant: "error" });
//     },
//   });

//   const { data: resData, isError } = useQuery({
//     queryKey: ["orders"],
//     queryFn: async () => await getOrders(),
//     placeholderData: keepPreviousData,
//   });

//   if (isError) {
//     enqueueSnackbar("Something went wrong!", { variant: "error" });
//   }

//   return (
//     <div className="container mx-auto bg-[#1f1f1f] p-6 rounded-2xl shadow-lg border border-gray-700">
//       <h2 className="text-[#f5f5f5] text-2xl font-bold mb-6 flex items-center gap-2">
//         Recent Orders
//       </h2>

//       <div className="overflow-x-auto rounded-xl">
//         <table className="w-full text-left text-[#f5f5f5] border-collapse">
//           <thead>
//             <tr className="bg-[#2a2a2a] text-[#ababab] text-sm uppercase tracking-wide">
//               <th className="p-4">Order ID</th>
//               <th className="p-4">Customer</th>
//               <th className="p-4">Status</th>
//               <th className="p-4">Date & Time</th>
//               <th className="p-4">Items</th>
//               <th className="p-4">Table No</th>
//               <th className="p-4">Total</th>
//               <th className="p-4">Payment</th>
//             </tr>
//           </thead>

//           <tbody>
//             {resData?.data.data.map((order, index) => (
//               <tr
//                 key={index}
//                 className="border-b border-gray-700 hover:bg-[#2f2f2f] transition-colors duration-200"
//               >
//                 <td className="p-4 font-mono text-sm text-[#bdbdbd]">
//                   #{Math.floor(new Date(order.orderDate).getTime())}
//                 </td>
//                 <td className="p-4 font-semibold">{order.customerDetails.name}</td>
//                 <td className="p-4">
//                   <select
//                     className={`p-2 rounded-lg text-sm font-semibold focus:outline-none transition-all duration-200
//                       ${
//                         order.orderStatus === "In Progress"
//                           ? "bg-yellow-900 text-yellow-300 border border-yellow-600"
//                           : order.orderStatus === "Ready"
//                           ? "bg-green-900 text-green-300 border border-green-600"
//                           : "bg-blue-900 text-blue-300 border border-blue-600"
//                       }`}
//                     value={order.orderStatus}
//                     onChange={(e) =>
//                       handleStatusChange({
//                         orderId: order._id,
//                         orderStatus: e.target.value,
//                       })
//                     }
//                   >
//                     <option value="In Progress">In Progress</option>
//                     <option value="Ready">Ready</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
//                 <td className="p-4 text-sm text-[#d1d1d1]">
//                   {formatDateAndTime(order.orderDate)}
//                 </td>
//                 <td className="p-4">{order.items.length} Items</td>
//                 <td className="p-4">Table - {order.table.tableNo}</td>
//                 <td className="p-4 font-bold text-green-400">
//                   ₹{order.bills.totalWithTax}
//                 </td>
//                 <td className="p-4">
//                   <span className="px-3 py-1 text-xs rounded-full bg-[#3a3a3a] text-[#e0e0e0]">
//                     {order.paymentMethod}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;



// import React from "react";
// import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { enqueueSnackbar } from "notistack";
// import { getOrders, updateOrderStatus } from "../../https/index";
// import { formatDateAndTime } from "../../utils";

// const RecentOrders = () => {
//   const queryClient = useQueryClient();

//   const handleStatusChange = ({ orderId, orderStatus }) => {
//     orderStatusUpdateMutation.mutate({ orderId, orderStatus });
//   };

//   const orderStatusUpdateMutation = useMutation({
//     mutationFn: ({ orderId, orderStatus }) => updateOrderStatus({ orderId, orderStatus }),
//     onSuccess: () => {
//       enqueueSnackbar("Order status updated successfully!", { variant: "success" });
//       queryClient.invalidateQueries(["orders"]);
//     },
//     onError: () => {
//       enqueueSnackbar("Failed to update order status!", { variant: "error" });
//     },
//   });

//   const { data: resData, isError } = useQuery({
//     queryKey: ["orders"],
//     queryFn: async () => await getOrders(),
//     placeholderData: keepPreviousData,
//   });

//   if (isError) {
//     enqueueSnackbar("Something went wrong!", { variant: "error" });
//   }

//   return (
//     <div className="container mx-auto bg-[#262626] p-3 rounded-lg">
//       <h2 className="text-[#f5f5f5] text-xl font-semibold mb-3">Recent Orders</h2>

//       <div className="overflow-hidden border border-gray-600 rounded-lg">
//         {/* Table Header */}
//         <table className="w-full text-left text-[#f5f5f5]">
//           <thead className="bg-[#333] text-[#ababab]">
//             <tr>
//               <th className="p-3">Order ID</th>
//               <th className="p-3">Customer</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Date & Time</th>
//               <th className="p-3">Items</th>
//               <th className="p-3">Table No</th>
//               <th className="p-3">Table status</th>
//               <th className="p-3">Total</th>
//               <th className="p-3 text-center">Payment Method</th>
//             </tr>
//           </thead>
//         </table>

//         {/* Scrollable tbody */}
//         <div className="overflow-y-scroll h-[280px] scrollbar-hide custom-scrollbar">
//           <table className="w-full text-left text-[#f5f5f5]">
//             <tbody>
//               {resData?.data.data.map((order, index) => (
//                 <tr
//                   key={index}
//                   className="border-b border-gray-600 hover:bg-[#333]"
//                 >
//                   <td className="p-4">#{Math.floor(new Date(order.orderDate).getTime())}</td>
//                   <td className="p-4">{order.customerDetails.name}</td>
//                   <td className="p-4">
//                     <select
//                       className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
//                         order.orderStatus === "Ready"
//                           ? "text-green-500"
//                           : order.orderStatus === "Completed"
//                           ? "text-blue-500"
//                           : "text-yellow-500"
//                       }`}
//                       value={order.orderStatus}
//                       onChange={(e) =>
//                         handleStatusChange({
//                           orderId: order._id,
//                           orderStatus: e.target.value,
//                         })
//                       }
//                     >
//                       <option className="text-yellow-500" value="In Progress">
//                         In Progress
//                       </option>
//                       <option className="text-green-500" value="Ready">
//                         Ready
//                       </option>
//                       <option className="text-blue-500" value="Completed">
//                         Completed
//                       </option>
//                     </select>
//                   </td>
//                   <td className="p-4">{formatDateAndTime(order.orderDate)}</td>
//                   <td className="p-4">{order.items.length} Items</td>
//                   <td className="p-4">Table - {order.table.tableNo}</td>
//                   <td className="p-4">₹{order.bills.totalWithTax}</td>
//                   <td className="p-4 text-center">{order.paymentMethod}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;




import React from "react";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { getOrders, updateOrderStatus, updateTable } from "../../https/index";
import { formatDateAndTime } from "../../utils";

const RecentOrders = () => {
  const queryClient = useQueryClient();

  const orderStatusUpdateMutation = useMutation({
    mutationFn: async ({ orderId, orderStatus, tableId }) => {
      // Order update
      await updateOrderStatus({ orderId, orderStatus });

      // Agar order complete ho gaya to table ko available karna hai
      if (orderStatus === "Completed" && tableId) {
        await updateTable({ tableId, status: "Available" });
      }
    },
    onSuccess: () => {
      enqueueSnackbar("Order status updated successfully!", { variant: "success" });
      queryClient.invalidateQueries(["orders"]);
      queryClient.invalidateQueries(["tables"]);
    },
    onError: () => {
      enqueueSnackbar("Failed to update order status!", { variant: "error" });
    },
  });

  const handleStatusChange = ({ orderId, orderStatus, tableId }) => {
    orderStatusUpdateMutation.mutate({ orderId, orderStatus, tableId });
  };

  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => await getOrders(),
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  return (
    <div className="container mx-auto bg-[#262626] p-3 rounded-lg">
      <h2 className="text-[#f5f5f5] text-xl font-semibold mb-3">Recent Orders</h2>

      <div className="overflow-hidden border border-gray-600 rounded-lg">
        <table className="w-full text-left text-[#f5f5f5]">
          <thead className="bg-[#333] text-[#ababab]">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Items</th>
              <th className="p-3">Table No</th>
              <th className="p-3">Total</th>
              <th className="p-3 text-center">Payment Method</th>
            </tr>
          </thead>
        </table>

        <div className="overflow-y-scroll h-[280px] scrollbar-hide custom-scrollbar">
          <table className="w-full text-left text-[#f5f5f5]">
            <tbody>
              {resData?.data.data.map((order, index) => (
                <tr key={index} className="border-b border-gray-600 hover:bg-[#333]">
                  <td className="p-4">#{Math.floor(new Date(order.orderDate).getTime())}</td>
                  <td className="p-4">{order.customerDetails.name}</td>
                  <td className="p-4">
                    <select
                      className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
                        order.orderStatus === "Ready"
                          ? "text-green-500"
                          : order.orderStatus === "Completed"
                          ? "text-blue-500"
                          : "text-yellow-500"
                      }`}
                      value={order.orderStatus}
                      onChange={(e) =>
                        handleStatusChange({
                          orderId: order._id,
                          orderStatus: e.target.value,
                          tableId: order.table._id,
                        })
                      }
                    >
                      <option className="text-yellow-500" value="In Progress">In Progress</option>
                      <option className="text-green-500" value="Ready">Ready</option>
                      <option className="text-blue-500" value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="p-4">{formatDateAndTime(order.orderDate)}</td>
                  <td className="p-4">{order.items.length} Items</td>
                  <td className="p-4">Table - {order.table.tableNo}</td>
                  <td className="p-4">₹{order.bills.totalWithTax}</td>
                  <td className="p-4 text-center">{order.paymentMethod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
