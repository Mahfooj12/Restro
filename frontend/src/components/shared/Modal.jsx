// import React from 'react';
// import { motion } from 'framer-motion';


// const Modal = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <motion.div 
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       transition={{ duration: 0.3, ease: 'easeInOut' }}
//       className="bg-[#1a1a1a] rounded-lg shadow-lg w-full max-w-lg mx-4">
//         <div className="flex justify-between items-center px-6 py-4 border-b border-b-[#333]">
//           <h2 className="text-xl text-[#f5f5f5] font-semibold">{title}</h2>
//           <button
//             className="text-gray-500 text-2xl hover:text-gray-800"
//             onClick={onClose}
//           >
//             &times;
//           </button>
//         </div>
//         <div className="p-6">
//           {children}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Modal;

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-[#1a1a1a] rounded-2xl shadow-xl w-full max-w-lg mx-4"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-b-[#333]">
              <h2 className="text-xl text-[#f5f5f5] font-semibold">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white hover:bg-[#333] rounded-full p-1 transition"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
