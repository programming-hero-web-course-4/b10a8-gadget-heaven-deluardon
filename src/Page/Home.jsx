import HomeCover from "./HomeCover";

const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-[#9538E2] pt-5 pb-28 mx-3 rounded-b-lg  ">
          <div className="hero ">
            <div className="hero-content text-center">
              <div className="">
                <h1 className="text-5xl font-bold text-white leading-[72px]">
                  Upgrade Your Tech Accessorize with <br /> Gadget Heaven
                  Accessories
                </h1>
                <p className="py-6 text-[#FFFFFF] opacity-85">
                  Explore the latest gadgets that will take your experience to
                  the next level. From smart devices to <br /> the coolest
                  accessories, we have it all!
                </p>
                <button className="btn ">Shop Now</button>
              </div>
            </div>
          </div>
        </div >
        <div className="relative bottom-24">
            <HomeCover></HomeCover>
        </div>
      </div>
    </>
  );
};

export default Home;
