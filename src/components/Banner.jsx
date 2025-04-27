// import React from "react";
// import bannerImg from "/images/home/banner.png";

// const Banner = () => {
//   return (
//     <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
//       <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
//         {/* img */}
//         <div className="md:w-1/2">
//           <img className="rounded-full" src={bannerImg} alt="" />
//           <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
//             <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64">
//               <img
//                 src="/images/home/b-food1.png"
//                 alt=""
//                 className="rounded-2xl"
//               />
//               <div className="space-y-1">
//                 <h5>Spicy noodles</h5>
//                 <div className="rating rating-sm">
//                   <input
//                     type="radio"
//                     name="rating-6"
//                     className="mask mask-star-2 bg-orange-500"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-6"
//                     className="mask mask-star-2 bg-orange-500"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-6"
//                     className="mask mask-star-2 bg-orange-500"
//                     checked
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-6"
//                     className="mask mask-star-2 bg-orange-400"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-6"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                 </div>
//                 <p className="text-red">$18.00</p>
//               </div>
//             </div>
//             <div className="bg-white px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden">
//               <img
//                 src="/images/home/b-food1.png"
//                 alt=""
//                 className="rounded-2xl"
//               />
//               <div className="space-y-1">
//                 <h5>Spicy noodles</h5>
//                 <div className="rating rating-sm">
//                   <input
//                     type="radio"
//                     name="rating-6"
//                     className="mask mask-star-2 bg-orange-500"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-6"
//                     className="mask mask-star-2 bg-orange-500"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-6"
//                     className="mask mask-star-2 bg-orange-500"
//                     checked
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-6"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-6"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                 </div>
//                 <p className="text-red">$18.00</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* texts */}
//         <div className="md:w-1/2 px-4 space-y-7">
//           <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
//             Dive into Delights Of Delectable{" "}
//             <span className="text-green">Food</span>
//           </h2>
//           <p className="text-[#4A4A4A] text-xl">
//             Where Each Plate Weaves a Story of Culinary Mastery and Passionate
//             Craftsmanship
//           </p>
//           <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React from "react";

const Banner = () => {
  return (
    // <div className="section-container bg-gradient-to-r from-indigo-500 from-0% to-100%">
    <div className="section-container bg-gradient-to-r">
      <div
        className="py-24 flex flex-col md:flex-row
   justify-between items-center gap-[15rem]"
      >
        {/* left -text*/}
        <div className="md:w-1/2 space-y-8 px-4">
          <h2
            className="md:text-5xl text-4xl font-bold md:leading-snug
    leading-snug"
          >
            Delicious <span className="text-orange-600">Food</span> is waiting
            for you
          </h2>
          <p className="text-xl text-[#8585ad]">
            Where each bite gives the taste of indian spices
          </p>
          <button className="btn bg-[#ff8000] px-8 py-4 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>

        {/* right -img*/}
        <div className="md:w-1/2">
     
          <img src="/images/home/imp.png" alt="" className="h-[380px] w-[380px]"/>
        
          <div>
            <div className="rating ml-[9rem] rating-sm">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

