import React from "react";

const serviceLists = [
    {id:1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: "/images/home/services/icon1.png"},
    {id:2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: "/images/home/services/icon2.png"},
    {id:3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering n", img: "/images/home/services/icon3.png"},
    {id:4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: "/images/home/services/icon4.png"},
]

const OurServices = () => {
  return (
    // <div className="section-container my-16">
    //   <div className="flex flex-col md:flex-row items-center justify-between gap-12">
    //     <div className="md:w-1/2">
    //       <div className="text-left md:w-4/5">
    //         <p className="subtitle">Our Story & Services</p>
    //         <h2 className="title">Our Culinary Journey And Services</h2>
    //         <p className="my-5 text-secondary leading-[30px]">
    //         Loved the experience! Ordering was super easy, and the food arrived fresh and on time!
    //         </p>

    //         <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
    //           Explore
    //         </button>
    //       </div>
    //     </div>
    //     <div className="md:w-1/2">
    //         <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
    //             {
    //                 serviceLists.map((service) => (
    //                     <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200">
    //                         <img src={service.img} alt="" className=" mx-auto"/>
    //                         <h5 className="pt-3 font-semibold"> {service.title}</h5>
    //                         <p className="text-[#90BD95]">{service.des}</p>
    //                     </div>
    //                 ))
    //             }
    //         </div>
    //     </div>
    //   </div>
    // </div>
    <div className="section-container my-16 mt-13">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      {/* <div className='sm:h-48 md:w-1/2 h-30 w-20'>
       */}
     
      <div className="md:w-1/2 mt-5">
        <div className="text-left">
          <p className="subtitle"> Our Services</p>
          <h3 className="title"> Check Out Our Services</h3>
          <p className="my-5 text-secondary leading-[30px]">
          "Loved the experience! Ordering was super easy, and the food arrived fresh and on time!"
          </p>
         <button className="btn bg-[#ff8000] text-white px-8 py-3 rounded-full">Explore</button>
        </div>
      </div>
      <div className="w-45 h-40 ml-16 sm:w-48 sm:h-48 md:w-1/2 md:h-60">
        <img
          src="/images/home/testimonials/two.png"
          alt="img"
          className="w-[45%] mt-5 ml-20"
        />
      </div>
    </div>
  </div>
  );
};

export default OurServices;
