import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { HiHeart } from "react-icons/hi";

const CART_KEY = "cart";
const FAVORITES_KEY = "favorites";

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useLoaderData();

  const product = products.find(
    (item) => item.product_id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  const notify = (message) => toast(message);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const productExists = existingCart.find(item => item.product_id === product.product_id);
    
    if (!productExists) {
      existingCart.push(product);
      localStorage.setItem(CART_KEY, JSON.stringify(existingCart));
      notify ("Product added to cart!");
    } else {
      notify("Product is already in the cart!");
    }
  };

  const addHeart = () => {
    const existingFavorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    const productExists = existingFavorites.find(item => item.product_id === product.product_id);

    if (!productExists) {
      existingFavorites.push(product);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(existingFavorites));
      notify("Product added to favorites!");
    } else {
      notify("Product is already in favorites!");
    }
  };

  return (
    <div className="mx-auto p-4 relative">
      <ToastContainer /> {/* Ensure the ToastContainer is included */}
      <div className="hero bg-[#9538E2] pb-48 pt-14">
        <div className="hero-content text-center w-full">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Product Details</h1>
            <p className="py-6">
              Explore the details of this fantastic product!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="hero bg-base-100 shrink-0 shadow-2xl w-9/12 mx-auto rounded-xl relative bottom-48">
          <div className="hero-content flex-col lg:flex-row-reverse gap-12">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">{product.product_title}</h1>
              <p className="mt-4">
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </p>
              <p className="mt-2">
                <strong>Description:</strong> {product.description}
              </p>
              <p className="mt-2">
                <strong>Specifications:</strong>
              </p>
              <ul className="list-disc list-inside mt-2">
                {product.specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
              <p className="mt-2">
                <strong>Availability:</strong> {product.availability ? "In Stock" : "Out of Stock"}
              </p>
              <p className="mt-2">
                <strong>Rating:</strong> {product.rating} ⭐
              </p>
              <div className="flex gap-3 items-center py-5">
                <button onClick={addToCart} className="btn btn-primary" aria-label="Add to cart">
                  Add to Cart
                </button>
                <button onClick={addHeart} className="btn btn-secondary" aria-label="Add to favorites">
                  <HiHeart />
                </button>
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0">
              <form className="card-body">
                <div className="form-control">
                  <img
                    src={product.product_image}
                    alt={product.product_title}
                    className="h-64 w-64 object-cover rounded-lg"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
