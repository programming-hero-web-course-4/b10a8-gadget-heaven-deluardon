const Card = ({ data }) => {
  // console.log(data);
  console.log(Object.keys(data));
  const {product_id, product_title, product_image, category, price, description, specification, availability, rating}=data;

  return (
    <div className="card card-compact shadow-xl p-3 bg-[#FFF] ">
      <figure className=" ">
        <img className="h-[300px] w-[300px] p-3 rounded-lg bg-[#D9D9D9]
        "
          src={product_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price:{price}k</p>
        <div className="card-actions mt-3">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
