// /* eslint-disable react/no-unescaped-entities */
// import React from "react";
// import { FaStar } from "react-icons/fa";

// const Testimonials = () => {
//   return (
//     <div className="section-container">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//         <div className=" md:w-1/2">
//           <img
//             className="rounded-full"
//             src="/images/home/testimonials/testimonials.avif"
//             alt=""
//           />
//         </div>
//         <div className="md:w-1/2">
//           <div className="text-left md:w-4/5">
//             <p className="subtitle">Testimonials</p>
//             <h2 className="title">What Our Customers Say About Us</h2>
//             <blockquote className="my-5 text-secondary leading-[30px]">
//               “I had the pleasure of dining at Foodi last night, and I'm still
//               raving about the experience! The attention to detail in
//               presentation and service was impeccable”
//             </blockquote>

//             {/* avater */}

//             <div className="flex items-center gap-4 flex-wrap">
//               <div className="avatar-group -space-x-6 rtl:space-x-reverse">
//                 <div className="avatar">
//                   <div className="w-12 cursor-pointer">
//                     <img src="/images/home/testimonials/testimonial1.png" />
//                   </div>
//                 </div>
//                 <div className="avatar">
//                   <div className="w-12 cursor-pointer">
//                     <img src="/images/home/testimonials/testimonial2.png" />
//                   </div>
//                 </div>
//                 <div className="avatar">
//                   <div className="w-12 cursor-pointer">
//                     <img src="/images/home/testimonials/testimonial3.png" />
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <h5 className="text-lg font-semibold">Customer Feedback</h5>
//                 <div className="flex items-center gap-2">
//                   <FaStar className="text-yellow-400" />{" "}
//                   <span className="font-medium">4.9</span>{" "}
//                   <span className="text-[#807E7E]">(18.6k Reviews)</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import React from 'react'
import { FaStar } from 'react-icons/fa'
const Testimonials = () => {
  return (
    <div className='section-container'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            {/* <div className='sm:h-48 md:w-1/2 h-30 w-20'>
             */}
             <div className="w-45 h-40 ml-16 mt-5 sm:w-48 sm:h-48 md:w-1/2 md:h-60">
            <img src="/images/home/testimonials/one.png" alt="" className='w-[48%]'/>
            </div>
            <div className='md:w-1/2'>
        
        <div className='text-left'>
          <p className='subtitle'> Testimonials</p>
          <h3 className='title'> Know What Our Customers Say About Us</h3>
          <p className='my-5 text-secondary leading-[30px]'>"Amazing experience ordering food from your app! Fast, easy, and the food arrived fresh and on time—highly recommend!"</p>
          {/* Avatar */}
           
           <div className='flex items-center gap-4 flex-wrap'>
          <div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="w-12">
      <img src="images/home/testimonials/profile1.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="images/home/testimonials/profile4.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="images/home/testimonials/profile5.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="images/home/testimonials/profile3.png" />
    </div>
  </div>
          </div>
           <div className="space-y-1">
    <h5 className="text-lg font-semibold">Customer Feedback</h5>
     <div className="flex items-center gap-2">
       <FaStar className="text-yellow-400" />{" "}
       <span className="font-medium">4.9</span>{" "}
       <span className="text-[#807E7E]">(18.6k Reviews)</span>
     </div>
   </div>
         </div>
        </div>
            
            </div>
        </div>
    </div>
      )
    }
    
    export default Testimonials
    