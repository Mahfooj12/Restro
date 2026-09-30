// import React from "react";
// import { popularDishes } from "../../constants";

// const PopularDishes = () => {
//   return (
//     <div className="mt-6 pr-6">
//       <div className="bg-[#1a1a1a] w-full rounded-lg">
//         <div className="flex justify-between items-center px-6 py-4">
//           <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
//             Popular Dishes
//           </h1>
//           <a href="" className="text-[#025cca] text-sm font-semibold">
//             View all
//           </a>
//         </div>

//         <div className="overflow-y-scroll h-[380px] scrollbar-hide">
//           {popularDishes.map((dish) => {
//             return (
//               <div
//                 key={dish.id}
//                 className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mt-4 mx-6"
//               >
//                 <h1 className="text-[#f5f5f5] font-bold text-xl mr-4">{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
//                 <img
//                   src={dish.image}
//                   alt={dish.name}
//                   className="w-[50px] h-[50px] rounded-full"
//                 />
//                 <div>
//                   <h1 className="text-[#f5f5f5] font-semibold tracking-wide">{dish.name}</h1>
//                   <p className="text-[#f5f5f5] text-sm font-semibold mt-1">
//                     <span className="text-[#ababab]">Orders: </span>
//                     {dish.numberOfOrders}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularDishes;

import React from "react";
import { popularDishes } from "../../constants";

const PopularDishes = () => {
  return (
    <div className="mt-1 pr-6">
      <div className="bg-[#1a1a1a] w-full rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#2a2a2a]">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a
            href="#"
            className="text-[#3b82f6] hover:text-[#60a5fa] text-sm font-semibold transition-colors"
          >
            View all
          </a>
        </div>

        {/* Scroll List */}
        <div className="overflow-y-scroll h-[420px] scrollbar-hide p-4 space-y-4">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="flex items-center gap-4 
                        bg-gradient-to-r from-[#1c1c1c] to-[#252525] 
                        rounded-2xl px-6 py-4 shadow-md 
                        hover:shadow-xl hover:scale-[1.01] transition-all duration-200"
            >
              {/* Dish ID */}
              <h1 className="bg-gradient-to-r from-yellow-400 to-orange-500 
                           bg-clip-text text-transparent 
                           font-bold text-xl w-8 text-center">
                {dish.id < 10 ? `0${dish.id}` : dish.id}
              </h1>

              {/* Dish Image */}
              <div className="relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[55px] h-[55px] rounded-full border-2 border-yellow-500/50 shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-black"></span>
              </div>

              {/* Dish Info */}
              <div>
                <h1 className="text-[#f5f5f5] font-semibold tracking-wide">
                  {dish.name}
                </h1>
                <p className="text-[#9ca3af] text-sm font-medium mt-1">
                  Orders:{" "}
                  <span className="text-[#f5f5f5] font-semibold">
                    {dish.numberOfOrders}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
