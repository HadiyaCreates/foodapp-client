// import React from "react";

// const LoadingSpinner = () => {
//   return (
//     <div className="loading-spinner">
//       <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
//         <div className="animate-pulse flex space-x-4">
//           <div className="rounded-full bg-slate-200 h-10 w-10"></div>
//           <div className="flex-1 space-y-6 py-1">
//             <div className="h-2 bg-slate-200 rounded"></div>
//             <div className="space-y-3">
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="h-2 bg-slate-200 rounded col-span-2"></div>
//                 <div className="h-2 bg-slate-200 rounded col-span-1"></div>
//               </div>
//               <div className="h-2 bg-slate-200 rounded"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoadingSpinner;
import React from 'react'

const LoadingSpinner = () => {
  return (
    // <div className='bg-[#fff2e6]'>

    <div className='text-center justify-center flex items-center justify-center h-screen'>
    <span className="loading loading-spinner loading-xs"></span>
<span className="loading loading-spinner loading-sm"></span>
<span className="loading loading-spinner loading-md"></span>
<span className="loading loading-spinner loading-lg"></span>
<span className="loading loading-spinner loading-xl"></span>
    </div>
    // </div>
  )
}

export default LoadingSpinner
