// import React, { useState } from "react";
// import { register } from "../../https";
// import { useMutation } from "@tanstack/react-query";
// import { enqueueSnackbar } from "notistack";

// const Register = ({setIsRegister}) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRoleSelection = (selectedRole) => {
//     setFormData({ ...formData, role: selectedRole });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     registerMutation.mutate(formData);
//   };

//   const registerMutation = useMutation({
//     mutationFn: (reqData) => register(reqData),
//     onSuccess: (res) => {
//       const { data } = res;
//       enqueueSnackbar(data.message, { variant: "success" });
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//         role: "",
//       });
      
//       setTimeout(() => {
//         setIsRegister(false);
//       }, 1500);
//     },
//     onError: (error) => {
//       const { response } = error;
//       const message = response.data.message;
//       enqueueSnackbar(message, { variant: "error" });
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label className="block text-[#ababab] mb-2 text-sm font-medium">
//             Employee Name
//           </label>
//           <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter employee name"
//               className="bg-transparent flex-1 text-white focus:outline-none"
//               required
//             />
//           </div>
//         </div>
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
//             Employee Phone
//           </label>
//           <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
//             <input
//               type="number"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Enter employee phone"
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
//         <div>
//           <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
//             Choose your role
//           </label>

//           <div className="flex item-center gap-3 mt-4">
//             {["Customer","Waiter", "Cashier", "Admin"].map((role) => {
//               return (
//                 <button
//                   key={role}
//                   type="button"
//                   onClick={() => handleRoleSelection(role)}
//                   className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] ${
//                     formData.role === role ? "bg-indigo-700" : ""
//                   }`}
//                 >
//                   {role}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
//         >
//           Sign up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { register } from "../../https";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

const Register = ({ setIsRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelection = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation.mutate(formData);
  };

  const registerMutation = useMutation({
    mutationFn: (reqData) => register(reqData),
    onSuccess: (res) => {
      const { data } = res;
      enqueueSnackbar(data.message, { variant: "success" });
      setFormData({ name: "", email: "", phone: "", password: "", role: "" });
      setTimeout(() => setIsRegister(false), 1500);
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, { variant: "error" });
    },
  });

  const inputWrapperClass = "relative flex items-center bg-[#1f1f1f] border border-white/5 rounded-xl px-4 py-3 focus-within:border-yellow-400/50 focus-within:bg-[#222] transition-all duration-300 group";
  const inputClass = "bg-transparent flex-1 text-white placeholder-gray-500 focus:outline-none text-sm ml-3";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-400 mb-1.5 text-xs font-medium uppercase tracking-wider">Employee Name</label>
        <div className={inputWrapperClass}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClass} required />
        </div>
      </div>

      <div>
        <label className="block text-gray-400 mb-1.5 text-xs font-medium uppercase tracking-wider">Employee Email</label>
        <div className={inputWrapperClass}>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@restro.com" className={inputClass} required />
        </div>
      </div>

      <div>
        <label className="block text-gray-400 mb-1.5 text-xs font-medium uppercase tracking-wider">Employee Phone</label>
        <div className={inputWrapperClass}>
          <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" className={inputClass} required />
        </div>
      </div>

      <div>
        <label className="block text-gray-400 mb-1.5 text-xs font-medium uppercase tracking-wider">Password</label>
        <div className={inputWrapperClass}>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className={inputClass} required />
        </div>
      </div>

      <div className="pt-2">
        <label className="block text-gray-400 mb-2 text-xs font-medium uppercase tracking-wider">Choose your role</label>
        <div className="grid grid-cols-2 gap-2">
          {["Customer", "Waiter", "Cashier", "Admin"].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => handleRoleSelection(role)}
              className={`py-2.5 px-4 rounded-xl text-xs font-medium transition-all duration-300 border ${
                formData.role === role
                  ? "bg-yellow-400/10 border-yellow-400 text-yellow-400"
                  : "bg-[#1f1f1f] border-white/5 text-gray-400 hover:bg-[#252525]"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={registerMutation.isPending}
        className="w-full rounded-xl mt-6 py-4 text-sm tracking-widest uppercase bg-yellow-400 hover:bg-yellow-300 text-black font-bold transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] disabled:opacity-70"
      >
        {registerMutation.isPending ? "Creating Account..." : "Sign up"}
      </button>
    </form>
  );
};

export default Register;