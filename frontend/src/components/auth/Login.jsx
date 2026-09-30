// import React, { useState } from "react";
// import { useMutation } from "@tanstack/react-query"
// import { login } from "../../https/index"
// import { enqueueSnackbar } from "notistack";
// import { useDispatch } from "react-redux";
// import { setUser } from "../../redux/slices/userSlice";
// import { useNavigate } from "react-router-dom";
 
// const Login = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const[formData, setFormData] = useState({
//       email: "",
//       password: "",
//     });
  
//     const handleChange = (e) => {
//       setFormData({...formData, [e.target.name]: e.target.value});
//     }

  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       loginMutation.mutate(formData);
//     }

//     const loginMutation = useMutation({
//       mutationFn: (reqData) => login(reqData),
//       onSuccess: (res) => {
//           const { data } = res;
//           console.log(data);
//           const { _id, name, email, phone, role } = data.data;
//           dispatch(setUser({ _id, name, email, phone, role }));
//           navigate("/");
//       },
//       onError: (error) => {
//         const { response } = error;
//         enqueueSnackbar(response.data.message, { variant: "error" });
//       }
//     })

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
//             Employee Email
//           </label>
//           <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter employee email"
//               className="bg-transparent flex-1 text-white focus:outline-none"
//               required
//             />
//           </div>
//         </div>
//         <div>
//           <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
//             Password
//           </label>
//           <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter password"
//               className="bg-transparent flex-1 text-white focus:outline-none"
//               required
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
//         >
//           Sign in
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../https/index";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaSpinner } from "react-icons/fa"; // Assuming you have react-icons, if not, remove icons

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  const loginMutation = useMutation({
    mutationFn: (reqData) => login(reqData),
    onSuccess: (res) => {
      const { data } = res;
      const { _id, name, email, phone, role } = data.data;
      dispatch(setUser({ _id, name, email, phone, role }));
      navigate("/");
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, { variant: "error" });
    },
  });

  // Reusable input class for premium look
  const inputWrapperClass = "relative flex items-center bg-[#1f1f1f] border border-white/5 rounded-xl px-4 py-3.5 focus-within:border-yellow-400/50 focus-within:bg-[#222] transition-all duration-300 group";
  const inputClass = "bg-transparent flex-1 text-white placeholder-gray-500 focus:outline-none text-sm ml-3";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-gray-400 mb-2 text-xs font-medium uppercase tracking-wider">
          Employee Email
        </label>
        <div className={inputWrapperClass}>
          {/* <FaEnvelope className="text-gray-500 group-focus-within:text-yellow-400 transition-colors" /> */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@restro.com"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-gray-400 text-xs font-medium uppercase tracking-wider">
            Password
          </label>
          <a href="#" className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors">
            Forgot?
          </a>
        </div>
        <div className={inputWrapperClass}>
          {/* <FaLock className="text-gray-500 group-focus-within:text-yellow-400 transition-colors" /> */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className={inputClass}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="w-full flex justify-center items-center gap-2 rounded-xl mt-8 py-4 text-sm tracking-widest uppercase bg-yellow-400 hover:bg-yellow-300 text-black font-bold transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loginMutation.isPending ? (
          <>
            <FaSpinner className="animate-spin" /> Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </button>
    </form>
  );
};

export default Login;