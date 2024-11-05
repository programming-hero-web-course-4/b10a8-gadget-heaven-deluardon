import { HiOutlineX } from "react-icons/hi";
import { useEffect, useState } from "react";
import DashbordBanner from "./DashbordBanner";

const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [activeSection, setActiveSection] = useState("cart");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const storedWishlist = JSON.parse(localStorage.getItem("favorites")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  const sortCartItems = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedItems);
    localStorage.setItem("cart", JSON.stringify(sortedItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const clearFavorites = () => {
    setWishlistItems([]);
    localStorage.removeItem("favorites");
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(
      (item) => item.product_id !== productId
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = wishlistItems.filter(
      (item) => item.product_id !== productId
    );
    setWishlistItems(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const addToCart = (item) => {
    const updatedWishlist = wishlistItems.filter(
      (wishlistItem) => wishlistItem.product_id !== item.product_id
    );
    setWishlistItems(updatedWishlist);
    localStorage.setItem("favorites", JSON.stringify(updatedWishlist));

    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <DashbordBanner
        toggleSection={toggleSection}
        totalPrice={totalPrice}
        sortCartItems={sortCartItems}
        clearCart={clearCart}
        clearFavorites={clearFavorites}
        cartItems={cartItems}
      />
      <div className="w-9/12 mx-auto">
        {activeSection === "cart" ? (
          <div className="mt-4">
            {cartItems.length === 0 ? (
              <p className="mt-4 text-center"></p>
            ) : (
              <div className="mt-4">
                {cartItems.map((item) => (
                  <div
                    key={item.product_id}
                    className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-2 shadow">
                    <div className="flex gap-8 items-center">
                      <div>
                        <img className="w-32 h-32" src={item.product_image} alt="" />
                      </div>
                    <div>
                    <h2 className="text-2xl font-bold">
                        {item.product_title}
                      </h2>
                      <p className="my-2">{item.description}</p>
                      <p className="font-bold mt-4">
                        Price: ${item.price.toFixed(2)}
                      </p>
                    </div>
                     
                    </div>
                    <button onClick={() => removeFromCart(item.product_id)}>
                      <HiOutlineX className="text-3xl text-red-600" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-4">
            {wishlistItems.length === 0 ? (
              <p className="mt-4 text-center"></p>
            ) : (
              <div className="mt-4">
                {wishlistItems.map((item) => (
                  <div
                    key={item.product_id}
                    className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-2 shadow">
                    <div className="flex gap-8 items-center">
                      <div>
                        <img
                          src={item.product_image}
                          alt={item.product_title}
                          className="w-32 h-32"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">
                          {item.product_title}
                        </h2>
                        <h1 className="my-3 flex gap-1 items-center"><span className="font-bold">description:</span><p>{item.description}</p></h1>
                        <p className="font-bold">
                          Price: ${item.price.toFixed(2)}
                        </p>
                       <div className="my-3">
                       <button
                        onClick={() => addToCart(item)}
                        className="btn btn-primary">
                        Add to Cart
                      </button>
                       </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                     
                      <button className="btn"
                        onClick={() => removeFromFavorites(item.product_id)}>
                        <HiOutlineX className="text-3xl text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
