// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const OrderComplete = () => {
//   return (
//     <div>
//       <div className="text-center mb-6 md:mb-8">
//         <FaCheckCircle className="mx-auto text-[#138695] text-4xl md:text-5xl mb-3 md:mb-4" />
//         <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
//           Thank you,
//         </h1>
//         <p className="text-gray-600 mb-2 text-sm md:text-base">
//           Your order has been received
//         </p>
//         <p className="text-gray-500 text-xs md:text-sm max-w-md mx-auto">
//           Your order has been fulfilled successfully. Will try to ship it to
//           your door steps as I learn the Gins Cheers
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OrderComplete;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderComplete = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#e0f7f6] to-[#f8ffff] px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 text-center max-w-md w-full transform transition-all duration-300 hover:scale-[1.02]">
        <div className="animate-bounce-slow mb-5">
          <FaCheckCircle className="mx-auto text-[#0FA899] text-6xl md:text-7xl drop-shadow-md" />
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
          Thank You!
        </h1>

        <p className="text-gray-600 mb-4 text-sm md:text-base">
          Your order has been{" "}
          <span className="text-[#0FA899] font-medium">
            successfully received
          </span>
          .
        </p>

        <p className="text-gray-500 text-xs md:text-sm max-w-sm mx-auto leading-relaxed">
          We're processing your order and will ship it to your doorstep as soon
          as possible. Meanwhile, feel free to explore more of our collections.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 bg-[#0FA899] hover:bg-[#0d8e81] text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
        >
          Back to Home
        </button>
      </div>

      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default OrderComplete;
