import { useState } from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeCover from "./HomeCover";

const DashbordBanner = ({
  toggleSection,
  totalPrice,
  sortCartItems,
  clearCart,
  cartItems,
}) => {
  const [activeButton, setActiveButton] = useState("cart"); 
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTotalPrice, setModalTotalPrice] = useState(0);

  const handleButton = (section) => {
    setActiveSection(section);
    if (section === "sort") {
      sortCartItems();
    } else if (section === "purchase") {
      handlePurchase();
    }
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    toggleSection(button);
  };

  const handlePurchase = () => {
    if (cartItems.length > 0) {
      setModalTotalPrice(totalPrice);
      clearCart();
      setIsModalOpen(true);
    } else {
      toast("Your cart is empty!");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-2">
      <ToastContainer />
      <div className="hero min-h-screen bg-[#9538E2]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <button
                className={`btn w-[120px] rounded-3xl ${
                  activeButton === "cart"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleButtonClick("cart")}>
                Cart
              </button>
              <button
                className={`btn w-[120px] rounded-3xl ${
                  activeButton === "wishlist"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleButtonClick("wishlist")}>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
        

      <div className="flex items-center w-11/12 justify-between mx-auto mt-4">
        {activeButton === "cart" && (
          <>
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="flex items-center gap-3 justify-center mt-4">
              <h1>Total cost: ${totalPrice}</h1>
              <button
                onClick={() => handleButton("sort")}
                className={`flex gap-1 items-center btn ${
                  activeSection === "sort"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}>
                Sort by Price <CgArrowsExchangeAltV className="text-3xl" />
              </button>
              <button
                onClick={() => handleButton("purchase")}
                className={`btn ${
                  activeSection === "purchase"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}>
                Purchase
              </button>
            </div>
          </>
        )}

        {activeButton === "wishlist" && (
          <h1 className="text-2xl font-bold">Wishlist</h1>
        )}
      </div>

      {isModalOpen && (
        <dialog id="purchase_modal" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Thank You for Your Purchase!</h3>
            <p className="py-4">
              Your total cost was: ${ modalTotalPrice}
            </p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default DashbordBanner;
