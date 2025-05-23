import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import axios from "axios";

const Cards = ({ item }) => {
  const { name, image, price, recipe, _id } = item;

  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(item)
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  // add to cart handler
  const handleAddToCart = (item) => {
    // console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };

      axios
        .post("https://foodapp-server-myfu.onrender.com/carts", cartItem)
        .then((response) => {
          console.log(response);
          if (response) {
            refetch(); // refetch cart
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
          const errorMessage = error.response.data.message;
          Swal.fire({
            position: "center",
            icon: "warning",
            title: `${errorMessage}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    // <div
    //   to={`/menu/${item._id}`}
    //   className="card bg-base-100  w-[18rem] h-[22rem] mr-[1rem]  shadow-xl relative hover:scale-105 transition-all duration-200"
    // >
    //       <div
    //       className={`rating gap-1 opacity-100 absolute right-2 top-2 p-4 heartStar`}
    //       onClick={handleHeartClick}
    //     >
    //       <FaHeart
    //         className={`h-5 w-5 cursor-pointer bg-white opacity-100  
    //     ${isHeartFilled ? "text-[#ff3300] " : "text-[#a3a3c2]"}`}
    //         onClick={handleHeartClick}
    //       />
    //     </div>

    //     <Link to={`/menu/${item._id}`}>
    //       <figure>
    //         <img
    //           src={item.image}
    //           className="md:h-29 w-[8rem] mt-[1.25rem]"
    //           alt="img"
    //         />
    //       </figure>
    //     </Link>
    //   <div className="card-body h-38 hover:scale-105 transition-all duration-200">
    //     <Link to={`/menu/${item._id}`}>
    //       <h2 className="card-title">{item.name}!</h2>
    //     </Link>
    //     <p>{item.des}</p>
    //     <div className="card-actions justify-between items-center mt-2">
    //       <h5 className="font-semibold">
    //         <span className="text-sm text-[#ffcc00]">$ </span> {item.price}
    //       </h5>
    //       <button
    //         onClick={() => handleAddToCart(item)}
    //         className="btn bg-green text-white"
    //       >
    //         Add to Cart{" "}
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <Link to={`/menu/${item._id}`}>
  <div className="card bg-base-100 w-[18rem] h-[22rem] mr-[1rem] shadow-xl relative hover:scale-105 transition-all duration-200">
    {/* Heart icon */}
    <div
      className={`rating gap-1 opacity-100 absolute right-2 top-2 p-4 heartStar`}
      onClick={(e) => {
        e.preventDefault(); // Prevent navigating when clicking heart
        handleHeartClick();
      }}
    >
      <FaHeart
        className={`h-5 w-5 cursor-pointer bg-white opacity-100  
        ${isHeartFilled ? "text-[#ff3300]" : "text-[#a3a3c2]"}`}
      />
    </div>

    <figure>
      <img
        src={item.image}
        className="md:h-29 w-[8rem] mt-[1.25rem]"
        alt="img"
      />
    </figure>

    <div className="card-body h-38 hover:scale-105 transition-all duration-200">
      <h2 className="card-title">{item.name}!</h2>
      <p>{item.des}</p>
      <div className="card-actions justify-between items-center mt-2">
        <h5 className="font-semibold">
          <span className="text-sm text-[#ffcc00]">$ </span> {item.price}
        </h5>
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent navigating when clicking "Add to Cart"
            handleAddToCart(item);
          }}
          className="btn bg-green text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</Link>

  );
};

export default Cards;
