// import React, { useEffect, useState } from "react";
// import restaurant from "../assets/images/restaurant-img.jpg"
// import logo from "../assets/images/logo.png"
// import Register from "../components/auth/Register";
// import Login from "../components/auth/Login";

// const Auth = () => {

//   useEffect(() => {
//     document.title = "POS | Auth"
//   }, [])

//   const [isRegister, setIsRegister] = useState(false);

//   return (
//     <div className="flex min-h-screen w-full">
//       {/* Left Section */}
//       <div className="w-1/2 relative flex items-center justify-center bg-cover">
//         {/* BG Image */}
//         <img className="w-full h-full object-cover" src={restaurant} alt="Restaurant Image" />

//         {/* Black Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-80"></div>

//         {/* Quote at bottom */}
//         <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
//           "Serve customers the best food with prompt and friendly service in a
//           welcoming atmosphere, and they’ll keep coming back."
//           <br />
//           <span className="block mt-4 text-yellow-400">- Founder of Restro</span>
//         </blockquote>
//       </div>

//       {/* Right Section */}
//       <div className="w-1/2 min-h-screen bg-[#1a1a1a] p-10">
//         <div className="flex flex-col items-center gap-2">
//           <img src={logo} alt="Restro Logo" className="h-14 w-14 border-2 rounded-full p-1" />
//           <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">Restro</h1>
//         </div>

//         <h2 className="text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10">
//           {isRegister ? "Employee Registration" : "Employee Login"}
//         </h2>

//         {/* Components */}  
//         {isRegister ? <Register setIsRegister={setIsRegister} /> : <Login />}


//         <div className="flex justify-center mt-6">
//           <p className="text-sm text-[#ababab]">
//             {isRegister ? "Already have an account?" : "Don't have an account?"}
//             <a onClick={() => setIsRegister(!isRegister)} className="text-yellow-400 font-semibold hover:underline" href="#">
//               {isRegister ? "Sign in" : "Sign up"}
//             </a>
//           </p>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Auth;


import React, { useEffect, useState } from "react";
import restaurant from "../assets/images/restaurant-img.jpg";
import logo from "../assets/images/logo.png";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

const Auth = () => {
  useEffect(() => {
    document.title = "RESTRO";
  }, []);

  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-[#0a0a0a] font-sans">
      {/* Left Section - Hero Image */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-out"
          src={restaurant}
          alt="Restaurant Image"
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        {/* Quote */}
        <blockquote className="absolute bottom-16 px-12 z-10 max-w-2xl">
          <p className="text-3xl font-light leading-snug text-gray-200">
            "Serve customers the best food with prompt and friendly service in a
            welcoming atmosphere, and they’ll keep coming back."
          </p>
          <footer className="mt-6 flex items-center gap-4">
            <div className="h-[2px] w-12 bg-yellow-400"></div>
            <span className="text-yellow-400 font-medium tracking-widest uppercase text-sm">
              Founder of Restro
            </span>
          </footer>
        </blockquote>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-md bg-[#151515]/80 backdrop-blur-xl border border-white/5 p-10 rounded-3xl shadow-2xl z-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-md opacity-20 rounded-full"></div>
              <img
                src={logo}
                alt="Restro Logo"
                className="relative h-16 w-16 border border-white/10 rounded-full p-2 bg-black/50"
              />
            </div>
            <h1 className="text-xl font-semibold text-white tracking-widest uppercase mt-2">
              Restro
            </h1>
          </div>

          <h2 className="text-3xl text-center font-semibold text-white mb-2">
            {isRegister ? "Create an account" : "Welcome back"}
          </h2>
          <p className="text-center text-gray-400 text-sm mb-8">
            {isRegister ? "Enter your details to register." : "Enter your details to access your account."}
          </p>

          {/* Components */}
          {isRegister ? <Register setIsRegister={setIsRegister} /> : <Login />}

          <div className="flex justify-center mt-8 pt-6 border-t border-white/5">
            <p className="text-sm text-gray-400">
              {isRegister ? "Already have an account?" : "Don't have an account?"}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="ml-2 text-yellow-400 font-medium hover:text-yellow-300 transition-colors focus:outline-none"
              >
                {isRegister ? "Sign in" : "Sign up"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;