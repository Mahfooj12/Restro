// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { getAvatarName, getBgColor } from "../../utils"
// import { useDispatch } from "react-redux";
// import { updateTable } from "../../redux/slices/customerSlice";
// import { FaLongArrowAltRight } from "react-icons/fa";

// const TableCard = ({id, name, status, initials, seats}) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleClick = (name) => {
//     if(status === "Booked") return;

//     const table = { tableId: id, tableNo: name }
//     dispatch(updateTable({table}))
//     navigate(`/menu`);
//   };

//   return (
//     <div onClick={() => handleClick(name)} key={id}  className=" w-[300px] bg-[#2e2e2e] p-4 rounded-2xl shadow-md shadow-black/40 hover:shadow-lg hover:shadow-black/60 transition-all duration-300">
//       <div className="flex items-center justify-between px-1">
//         <h1 className="text-[#f5f5f5] text-xl font-semibold">Table <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" /> {name}</h1>
//         <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "bg-[#664a04] text-white"} px-2 py-1 rounded-lg`}>
//           {status}
//         </p>
//       </div>
//       <div className="flex items-center justify-center mt-5 mb-8">
//         <h1 className={`text-white rounded-full p-5 text-xl`} style={{backgroundColor : initials ? getBgColor() : "#1f1f1f"}} >{getAvatarName(initials) || "N/A"}</h1>
//       </div>
//       <p className="text-[#ababab] text-xs">Seats: <span className="text-[#f5f5f5]">{seats}</span></p>
//     </div>
//   );
// };

// export default TableCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import { getAvatarName, getBgColor } from "../../utils";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";
import { FaLongArrowAltRight } from "react-icons/fa";

const TableCard = ({ id, name, status, initials, seats }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (name) => {
    if (status === "Booked") return;

    const table = { tableId: id, tableNo: name };
    dispatch(updateTable({ table }));
    navigate(`/menu`);
  };

  return (
    // <div
    //   onClick={() => handleClick(name)}
    //   key={id}
    //   className="w-full max-w-[220px] bg-[#2e2e2e] p-3 rounded-xl shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    // >
    //   {/* Header */}
    //   <div className="flex items-center justify-between">
    //     <h1 className="text-[#f5f5f5] text-sm font-semibold flex items-center gap-1">
    //       Table <FaLongArrowAltRight className="text-[#ababab]" /> {name}
    //     </h1>
    //     <p
    //       className={`text-xs px-2 py-0.5 rounded-md font-medium ${
    //         status === "Booked"
    //           ? "bg-green-900 text-green-400"
    //           : "bg-yellow-900 text-yellow-400"
    //       }`}
    //     >
    //       {status}
    //     </p>
    //   </div>

    //   {/* Avatar */}
    //   <div className="flex items-center justify-center mt-4 mb-6">
    //     <h1
    //       className="text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm"
    //       style={{ backgroundColor: initials ? getBgColor() : "#1f1f1f" }}
    //     >
    //       {getAvatarName(initials) || "N/A"}
    //     </h1>
    //   </div>

    //   {/* Seats */}
    //   <p className="text-[#ababab] text-xs">
    //     Seats: <span className="text-[#f5f5f5] font-medium">{seats}</span>
    //   </p>
    // </div>
    <div
      onClick={() => handleClick(name)}
      key={id}
      className="w-full max-w-[240px] min-h-[160px] bg-[#2e2e2e] p-4 rounded-xl shadow-md shadow-black/30 
                hover:shadow-lg hover:shadow-black/50 hover:scale-[1.03] 
                transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[#f5f5f5] text-sm font-semibold flex items-center gap-1">
          Table <FaLongArrowAltRight className="text-[#ababab]" /> {name}
        </h1>
        <p
          className={`text-xs px-2 py-0.5 rounded-md font-medium ${
            status === "Booked"
              ? "bg-green-600/20 text-green-400"
              : "bg-yellow-600/20 text-yellow-400"
          }`}
        >
          {status}
        </p>
      </div>

      {/* Avatar */}
      <div className="flex items-center justify-center flex-1">
        <h1
          className="text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-base"
          style={{ backgroundColor: initials ? getBgColor() : "#1f1f1f" }}
        >
          {getAvatarName(initials) || "N/A"}
        </h1>
      </div>

      {/* Seats */}
      <p className="text-[#ababab] text-xs text-center">
        Seats: <span className="text-[#f5f5f5] font-medium">{seats}</span>
      </p>
    </div>


  );
};

export default TableCard;
