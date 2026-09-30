// import React, { useState, useEffect } from "react";
// import BottomNav from "../components/shared/BottomNav";
// import OrderCard from "../components/orders/OrderCard";
// import BackButton from "../components/shared/BackButton";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { getOrders } from "../https/index";
// import { enqueueSnackbar } from "notistack"

// const Orders = () => {

//   const [status, setStatus] = useState("all");

//     useEffect(() => {
//       document.title = "POS | Orders"
//     }, [])

//   const { data: resData, isError } = useQuery({
//     queryKey: ["orders"],
//     queryFn: async () => {
//       return await getOrders();
//     },
//     placeholderData: keepPreviousData
//   })

//   if(isError) {
//     enqueueSnackbar("Something went wrong!", {variant: "error"})
//   }

//   return (
//     <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden ">
//       <div className="flex items-center justify-between px-10 py-4 ">
//         <div className="flex items-center gap-4">
//           <BackButton />
//           <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
//             Orders
//           </h1>
//         </div>
//         <div className="flex items-center justify-around gap-4">
//           <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg ${status === "all" && "bg-[#383838] rounded-lg px-5 py-2"}  rounded-lg px-5 py-2 font-semibold`}>
//             All
//           </button>
//           <button onClick={() => setStatus("progress")} className={`text-[#ababab] text-lg ${status === "progress" && "bg-[#383838] rounded-lg px-5 py-2"}  rounded-lg px-5 py-2 font-semibold`}>
//             In Progress
//           </button>
//           <button onClick={() => setStatus("ready")} className={`text-[#ababab] text-lg ${status === "ready" && "bg-[#383838] rounded-lg px-5 py-2"}  rounded-lg px-5 py-2 font-semibold`}>
//             Ready
//           </button>
//           <button onClick={() => setStatus("completed")} className={`text-[#ababab] text-lg ${status === "completed" && "bg-[#383838] rounded-lg px-5 py-2"}  rounded-lg px-5 py-2 font-semibold`}>
//             Completed
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-3 px-16 py-4 overflow-y-scroll h-[380px] scrollbar-hide">
//         {
//           resData?.data.data.length > 0 ? (
//             resData.data.data.map((order) => {
//               return <OrderCard key={order._id} order={order} />
//             })
//           ) : <p className="col-span-3 text-gray-500">No orders available</p>
//         }
//       </div>

//       <BottomNav />
//     </section>
//   );
// };

// export default Orders;

// import React, { useState, useEffect } from "react";
// import BottomNav from "../components/shared/BottomNav";
// import OrderCard from "../components/orders/OrderCard";
// import BackButton from "../components/shared/BackButton";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { getOrders } from "../https/index";
// import { enqueueSnackbar } from "notistack";

// const Orders = () => {
//   const [status, setStatus] = useState("all");

//   useEffect(() => {
//     document.title = "POS | Orders";
//   }, []);

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

//   // ✅ Filter orders by status
//   const filteredOrders = resData?.data.data.filter((order) => {
//     if (status === "all") return true;
//     if (status === "progress") return order.orderStatus === "In Progress";
//     if (status === "ready") return order.orderStatus === "Ready";
//     if (status === "completed") return order.orderStatus === "Completed";
//     return true;
//   });

//   return (
//     <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
//       {/* Top bar */}
//       <div className="flex items-center justify-between px-6 md:px-10 py-4">
//         <div className="flex items-center gap-4">
//           <BackButton />
//           <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
//             Orders
//           </h1>
//         </div>

//         {/* Status filter buttons */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => setStatus("all")}
//             className={`px-5 py-2 rounded-lg text-lg font-semibold transition ${
//               status === "all"
//                 ? "bg-gray-600 text-white"
//                 : "text-[#ababab] hover:bg-[#2a2a2a]"
//             }`}
//           >
//             All
//           </button>
//           <button
//             onClick={() => setStatus("progress")}
//             className={`px-5 py-2 rounded-lg text-lg font-semibold transition ${
//               status === "progress"
//                 ? "bg-yellow-600 text-white"
//                 : "text-[#ababab] hover:bg-[#2a2a2a]"
//             }`}
//           >
//             In Progress
//           </button>
//           <button
//             onClick={() => setStatus("ready")}
//             className={`px-5 py-2 rounded-lg text-lg font-semibold transition ${
//               status === "ready"
//                 ? "bg-green-600 text-white"
//                 : "text-[#ababab] hover:bg-[#2a2a2a]"
//             }`}
//           >
//             Ready
//           </button>
//           <button
//             onClick={() => setStatus("completed")}
//             className={`px-5 py-2 rounded-lg text-lg font-semibold transition ${
//               status === "completed"
//                 ? "bg-blue-600 text-white"
//                 : "text-[#ababab] hover:bg-[#2a2a2a]"
//             }`}
//           >
//             Completed
//           </button>
//         </div>
//       </div>

//       {/* Orders grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-6 md:px-16 py-4 overflow-y-scroll h-[380px] scrollbar-hide">
//         {filteredOrders?.length > 0 ? (
//           filteredOrders.map((order) => (
//             <OrderCard key={order._id} order={order} />
//           ))
//         ) : (
//           <div className="col-span-3 flex flex-col items-center justify-center text-gray-400 py-10">
//             <span className="text-4xl mb-2">🍽️</span>
//             <p className="text-lg">No orders available</p>
//           </div>
//         )}
//       </div>

//       <BottomNav />
//     </section>
//   );
// };

// export default Orders;



import React, { useState, useEffect } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import { keepPreviousData, useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getOrders, updateOrderStatus, updateTable } from "../https/index";
import { enqueueSnackbar } from "notistack";

const Orders = () => {
  const [status, setStatus] = useState("all");
  const queryClient = useQueryClient();

  useEffect(() => {
    document.title = "POS | Orders";
  }, []);

  const orderStatusUpdateMutation = useMutation({
    mutationFn: async ({ orderId, orderStatus, tableId }) => {
      await updateOrderStatus({ orderId, orderStatus });
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

  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => await getOrders(),
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  // ✅ Filter orders by status
  const filteredOrders = resData?.data.data.filter((order) => {
    if (status === "all") return true;
    if (status === "progress") return order.orderStatus === "In Progress";
    if (status === "ready") return order.orderStatus === "Ready";
    if (status === "completed") return order.orderStatus === "Completed";
    return true;
  });

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">Orders</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setStatus("all")}
            className={`px-5 py-2 rounded-lg text-lg font-semibold transition ${
              status === "all" ? "bg-gray-600 text-white" : "text-[#ababab] hover:bg-[#2a2a2a]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("progress")}
            className={`px-5 py-2 rounded-lg text-lg font-semibold transition ${
              status === "progress" ? "bg-yellow-600 text-white" : "text-[#ababab] hover:bg-[#2a2a2a]"
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`px-5 py-2 rounded-lg text-lg font-semibold transition ${
              status === "ready" ? "bg-green-600 text-white" : "text-[#ababab] hover:bg-[#2a2a2a]"
            }`}
          >
            Ready
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`px-5 py-2 rounded-lg text-lg font-semibold transition ${
              status === "completed" ? "bg-blue-600 text-white" : "text-[#ababab] hover:bg-[#2a2a2a]"
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-6 md:px-16 py-4 overflow-y-scroll h-[380px] scrollbar-hide">
        {filteredOrders?.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderCard
              key={order._id}
              order={order}
              onStatusChange={(newStatus) =>
                orderStatusUpdateMutation.mutate({
                  orderId: order._id,
                  orderStatus: newStatus,
                  tableId: order.table._id,
                })
              }
            />
          ))
        ) : (
          <div className="col-span-3 flex flex-col items-center justify-center text-gray-400 py-10">
            <span className="text-4xl mb-2">🍽️</span>
            <p className="text-lg">No orders available</p>
          </div>
        )}
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
