// import React, { useState } from "react";
// import { menus } from "../../constants";
// import { GrRadialSelected } from "react-icons/gr";
// import { FaShoppingCart } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { addItems } from "../../redux/slices/cartSlice";


// const MenuContainer = () => {
//   const [selected, setSelected] = useState(menus[0]);
//   const [itemCount, setItemCount] = useState(0);
//   const [itemId, setItemId] = useState();
//   const dispatch = useDispatch();

//   const increment = (id) => {
//     setItemId(id);
//     if (itemCount >= 4) return;
//     setItemCount((prev) => prev + 1);
//   };

//   const decrement = (id) => {
//     setItemId(id);
//     if (itemCount <= 0) return;
//     setItemCount((prev) => prev - 1);
//   };

//   const handleAddToCart = (item) => {
//     if(itemCount === 0) return;

//     const {name, price} = item;
//     const newObj = { id: new Date(), name, pricePerQuantity: price, quantity: itemCount, price: price * itemCount };

//     dispatch(addItems(newObj));
//     setItemCount(0);
//   }


//   return (
//     <>
//       <div className="grid grid-cols-4 gap-4 px-10 py-1 w-[100%]">
//         {menus.map((menu) => {
//           return (
//             <div
//               key={menu.id}
//               className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
//               style={{ backgroundColor: menu.bgColor }}
//               onClick={() => {
//                 setSelected(menu);
//                 setItemId(0);
//                 setItemCount(0);
//               }}
//             >
//               <div className="flex items-center justify-between w-full">
//                 <h1 className="text-[#f5f5f5] text-lg font-semibold">
//                   {menu.icon} {menu.name}
//                 </h1>
//                 {selected.id === menu.id && (
//                   <GrRadialSelected className="text-white" size={20} />
//                 )}
//               </div>
//               <p className="text-[#ababab] text-sm font-semibold">
//                 {menu.items.length} Items
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       <hr className="border-[#2a2a2a] border-t-2 mt-2" />

//       <div className="grid grid-cols-4 gap-4 px-10 py-2 w-[100%] overflow-y-scroll h-[170px] scrollbar-hide ">
//         {selected?.items.map((item) => {
//           return (
//             <div
//               key={item.id}
//               className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]"
//             >
//               <div className="flex items-start justify-between w-full">
//                 <h1 className="text-[#f5f5f5] text-sm font-semibold">
//                   {item.name}
//                 </h1>
//                 <button onClick={() => handleAddToCart(item)} className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg"><FaShoppingCart size={15} /></button>
//               </div>
//               <div className="flex items-center justify-between mt-2 w-full">
//                 <p className="text-[#f5f5f5] text-xl font-bold">
//                   ₹{item.price}
//                 </p>
//                 <div className="flex items-center justify-between bg-[#1f1f1f] px-1 py-1 rounded-lg gap-1 w-[30%]">
//                   <button
//                     onClick={() => decrement(item.id)}
//                     className="text-yellow-500 text-2xl"
//                   >
//                     &minus;
//                   </button>
//                   <span className="text-white">
//                     {itemId == item.id ? itemCount : "0"}
//                   </span>
//                   <button
//                     onClick={() => increment(item.id)}
//                     className="text-yellow-500 text-2xl"
//                   >
//                     &#43;
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default MenuContainer;



import React, { useState } from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCounts, setItemCounts] = useState({});
  const dispatch = useDispatch();

  const increment = (id) => {
    setItemCounts((prev) => ({
      ...prev,
      [id]: Math.min((prev[id] || 0) + 1, 4),
    }));
  };

  const decrement = (id) => {
    setItemCounts((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = (item) => {
    const count = itemCounts[item.id] || 0;
    if (count === 0) return;

    const { name, price } = item;
    const newObj = {
      id: new Date().getTime(),
      name,
      pricePerQuantity: price,
      quantity: count,
      price: price * count,
    };

    dispatch(addItems(newObj));

    // reset count for this item
    setItemCounts((prev) => ({ ...prev, [item.id]: 0 }));

    // animate cart button
    const btn = document.getElementById(`cart-btn-${item.id}`);
    if (btn) {
      btn.classList.add("animate-pulse-cart");
      setTimeout(() => btn.classList.remove("animate-pulse-cart"), 600);
    }
  };

  return (
    <>
      {/* Categories */}
      <div className="grid grid-cols-4 gap-4 px-10 py-2 w-full">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className={`flex flex-col items-start justify-between p-4 rounded-xl h-[100px] cursor-pointer 
            transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              selected.id === menu.id
                ? "ring-2 ring-green-500 shadow-green-500/30"
                : ""
            }`}
            style={{ backgroundColor: menu.bgColor }}
            onClick={() => setSelected(menu)}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-lg font-bold tracking-wide">
                {menu.icon} {menu.name}
              </h1>
              {selected.id === menu.id && (
                <GrRadialSelected className="text-white" size={20} />
              )}
            </div>
            <p className="text-gray-200 text-sm font-medium opacity-90">
              {menu.items.length} Items
            </p>
          </div>
        ))}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-3" />

      {/* Items */}
      <div className="grid grid-cols-4 gap-4 px-10 py-3 w-full overflow-y-scroll h-[190px] scrollbar-hide">
        {selected?.items.map((item) => {
          const count = itemCounts[item.id] || 0;

          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-4 rounded-xl h-[130px] 
              bg-gradient-to-br from-[#1a1a1a] to-[#242424] 
              hover:from-[#222] hover:to-[#2a2a2a] 
              transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-white text-sm font-semibold truncate max-w-[70%]">
                  {item.name}
                </h1>
                <button
                  id={`cart-btn-${item.id}`}
                  onClick={() => handleAddToCart(item)}
                  className="bg-gradient-to-r from-green-600 to-green-400 text-white p-2 rounded-lg 
                  shadow-md hover:scale-110 active:scale-95 transition-transform"
                >
                  <FaShoppingCart size={15} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-3 w-full">
                <p className="text-white text-lg font-bold">₹{item.price}</p>
                <div className="flex items-center justify-between bg-[#2b2b2b] px-2 py-1 rounded-lg gap-2 w-[40%]">
                  <button
                    onClick={() => decrement(item.id)}
                    className="text-yellow-400 text-xl hover:scale-125 transition-transform"
                  >
                    &minus;
                  </button>
                  <span className="text-white font-semibold">{count}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="text-yellow-400 text-xl hover:scale-125 transition-transform"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom CSS animation */}
      <style>{`
        .animate-pulse-cart {
          animation: pulseCart 0.6s ease-in-out;
        }
        @keyframes pulseCart {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0px #22c55e; }
          50% { transform: scale(1.2); box-shadow: 0 0 18px #22c55e; }
        }
      `}</style>
    </>
  );
};

export default MenuContainer;

