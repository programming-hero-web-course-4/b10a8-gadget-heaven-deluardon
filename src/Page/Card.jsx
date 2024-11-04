import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate(); 
  const { product_id, product_title, product_image, price } = data;
  
  const notify = () => toast("Wow so easy!");

  const handleProduct = () => {
    notify();
    navigate(`/product/${product_id}`);
  };

  return (
    <div className="card card-compact shadow-xl p-3 bg-[#FFF]">
      <figure>
        <img
          className="h-[300px] w-[300px] p-3 rounded-lg bg-[#D9D9D9]"
          src={product_image}
          alt={product_title} 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}k</p>
        <div className="card-actions mt-3">
          <button onClick={handleProduct} className="btn btn-primary">
            View Details
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
