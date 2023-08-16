import React, { useContext } from "react";
import "./CouponPage.css";
import Swal from "sweetalert2"; // Import the Swal library
import { LoginContext } from "../context/ContextProvider";
import axios from "axios";

const CouponPage = () => {
  const { account, setAccount } = React.useContext(LoginContext);
  const coupons = [
    { id: 1, imageUrl: "coupon1.webp", price: "10 FGM", iconUrl: "./gem.png" },
    { id: 2, imageUrl: "coupon2.webp", price: "20 FGM", iconUrl: "./gem.png" },
    // ... Add more coupons
  ];

  const handleCouponClick = async (couponId) => {
    try {
      const response = await fetch("http://localhost:8000/deductcoupen", {
        method: "POST",
        body: JSON.stringify({ coupen_id: couponId, userId: account._id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Coupon successfully fetched
        Swal.fire("Coupon Successfully Applied!", "", "success");
      } else {
        // Handle error response
        Swal.fire(
          "Coupon Error",
          "There was an issue applying the coupon.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="coupon-page">
      <h1 className="coupon-title">Exclusive Offers</h1>
      <div className="coupon-list">
        {coupons.map((coupon) => (
          <div key={coupon.id} className="coupon">
            <div className="coupon-details">
              <img
                src={coupon.imageUrl}
                alt={`Coupon ${coupon.id}`}
                className="coupon-image"
              />
            </div>
            <button
              className="coupon-button"
              onClick={() => handleCouponClick(coupon.id)}
            >
              <div className="coupon-content" style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'0.5rem', paddingTop:'0.2rem',paddingBottom:'0.2rem'}}>
                <img
                  src={coupon.iconUrl}
                  alt="Coupon Icon"
                  className="coupon-icon"
                //   style={{}}
                />
                <span >{coupon.price}</span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponPage;
