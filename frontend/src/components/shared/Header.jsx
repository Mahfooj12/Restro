// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";
// import { FaBell } from "react-icons/fa";
// import logo from "../../assets/images/logo.png";
// import { useDispatch, useSelector } from "react-redux";
// import { IoLogOut } from "react-icons/io5";
// import { useMutation } from "@tanstack/react-query";
// import { logout } from "../../https";
// import { removeUser } from "../../redux/slices/userSlice";
// import { useNavigate } from "react-router-dom";
// import { MdDashboard } from "react-icons/md";

// const Header = () => {
//   const userData = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutMutation = useMutation({
//     mutationFn: () => logout(),
//     onSuccess: (data) => {
//       console.log(data);
//       dispatch(removeUser());
//       navigate("/auth");
//     },
//     onError: (error) => {
//       console.log(error);
//     },
//   });

//   const handleLogout = () => {
//     logoutMutation.mutate();
//   };

//   return (
//     <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
//       {/* LOGO */}
//       <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
//         <img src={logo} className="h-8 w-8" alt="restro logo" />
//         <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">
//           Restro
//         </h1>
//       </div>

//       {/* SEARCH */}
//       <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
//         <FaSearch className="text-[#f5f5f5]" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
//         />
//       </div>

//       {/* LOGGED USER DETAILS */}
//       <div className="flex items-center gap-4">
//         {userData.role === "Admin" && (
//           <div onClick={() => navigate("/dashboard")} className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
//             <MdDashboard className="text-[#f5f5f5] text-2xl" />
//           </div>
//         )}
//         <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
//           <FaBell className="text-[#f5f5f5] text-2xl" />
//         </div>
//         <div className="flex items-center gap-3 cursor-pointer">
//           <FaUserCircle className="text-[#f5f5f5] text-4xl" />
//           <div className="flex flex-col items-start">
//             <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
//               {userData.name || "TEST USER"}
//             </h1>
//             <p className="text-xs text-[#ababab] font-medium">
//               {userData.role || "Role"}
//             </p>
//           </div>
//           <IoLogOut
//             onClick={handleLogout}
//             className="text-[#f5f5f5] ml-2"
//             size={40}
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from "react";
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { removeUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Header = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate("/auth");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1E1E1E] sticky top-0 z-50 shadow-md">
      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src={logo} className="h-8 w-8" alt="restro logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">
          Restro
        </h1>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px] shadow-inner">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-[#f5f5f5] placeholder-[#777] w-full focus:ring-2 focus:ring-[#f6b100] rounded-md px-2"
        />
      </div>

      {/* USER SECTION */}
      <div className="flex items-center gap-4">
        {userData.role === "Admin" && (
          <div
            onClick={() => navigate("/dashboard")}
            className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer hover:bg-[#2a2a2a] transition-all"
          >
            <MdDashboard className="text-[#f5f5f5] text-2xl" />
          </div>
        )}

        {/* Notification */}
        <div className="relative bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer hover:bg-[#2a2a2a] transition-all">
          <FaBell className="text-[#f5f5f5] text-2xl" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
              {userData.name || "TEST USER"}
            </h1>
            <p className="text-xs text-[#ababab] font-medium">
              {userData.role || "Role"}
            </p>
          </div>

          {/* Logout */}
          <IoLogOut
            onClick={handleLogout}
            className="text-red-500 ml-2 hover:text-red-400 transition-colors"
            size={28}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
