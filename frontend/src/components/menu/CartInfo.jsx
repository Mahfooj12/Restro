// import React, { useEffect, useRef } from "react";
// import { RiDeleteBin2Fill } from "react-icons/ri";
// import { FaNotesMedical } from "react-icons/fa6";
// import { useDispatch, useSelector } from "react-redux";
// import { removeItem } from "../../redux/slices/cartSlice";

// const CartInfo = () => {
//   const cartData = useSelector((state) => state.cart);
//   const scrolLRef = useRef();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if(scrolLRef.current){
//       scrolLRef.current.scrollTo({
//         top: scrolLRef.current.scrollHeight,
//         behavior: "smooth"
//       })
//     }
//   },[cartData]);

//   const handleRemove = (itemId) => {
//     dispatch(removeItem(itemId));
//   }

//   return (
//     <div className="px-4 py-1">
//       <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
//         Order Details
//       </h1>
//       <div className="mt-2 overflow-y-scroll scrollbar-hide h-[100px]" ref={scrolLRef} >
//         {cartData.length === 0 ? (
//           <p className="text-[#ababab] text-sm flex justify-center items-center h-[380px]">Your cart is empty. Start adding items!</p>
//         ) : cartData.map((item) => {
//           return (
//             <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2 ">
//               <div className="flex items-center justify-between">
//                 <h1 className="text-[#ababab] font-semibold tracling-wide text-md">
//                   {item.name}
//                 </h1>
//                 <p className="text-[#ababab] font-semibold">x{item.quantity}</p>
//               </div>
//               <div className="flex items-center justify-between mt-3">
//                 <div className="flex items-center gap-3">
//                   <RiDeleteBin2Fill
//                     onClick={() => handleRemove(item.id)}
//                     className="text-[#ababab] cursor-pointer"
//                     size={20}
//                   />
//                   <FaNotesMedical
//                     className="text-[#ababab] cursor-pointer"
//                     size={20}
//                   />
//                 </div>
//                 <p className="text-[#f5f5f5] text-md font-bold">₹{item.price}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CartInfo;

import React, { useEffect, useRef } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";

const CartInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="px-4 py-2">
      <h1 className="text-lg text-[#f5f5f5] font-semibold tracking-wide mb-2">
        🛒 Order Details
      </h1>

      <div
        className="overflow-y-auto scrollbar-hide max-h-[220px] pr-1"
        ref={scrollRef}
      >
        {cartData.length === 0 ? (
          <div className="flex items-center justify-center h-[120px] bg-[#1f1f1f] rounded-lg">
            <p className="text-gray-400 text-sm italic">
              Your cart is empty. Start adding items!
            </p>
          </div>
        ) : (
          cartData.map((item) => (
            <div
              key={item.id}
              className="bg-[#242424] rounded-xl px-4 py-3 mb-3 shadow-md hover:shadow-lg transition-all duration-200"
            >
              {/* Item Header */}
              <div className="flex items-center justify-between">
                <h1 className="text-[#f5f5f5] font-medium truncate max-w-[70%]">
                  {item.name}
                </h1>
                <p className="text-gray-300 font-semibold">x{item.quantity}</p>
              </div>

              {/* Actions + Price */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-400 hover:text-red-500 transition-transform hover:scale-110"
                  >
                    <RiDeleteBin2Fill size={20} />
                  </button>
                  <button className="text-yellow-400 hover:text-yellow-500 transition-transform hover:scale-110">
                    <FaNotesMedical size={20} />
                  </button>
                </div>
                <p className="text-[#f6b100] text-md font-bold">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartInfo;
