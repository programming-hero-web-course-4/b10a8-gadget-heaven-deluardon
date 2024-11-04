import { Outlet, useLoaderData } from "react-router-dom";
import HomeCover from "./HomeCover";
import Category from "./Category";

const Home = () => {
  const category = useLoaderData();

  return (
    <>
      <div>
        <div className="relative">
          <div className="bg-[#9538E2] pt-5 pb-28 mx-3 rounded-b-lg">
            <div className="hero">
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
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bottom-24">
            <HomeCover />
          </div>
        </div>
        <div>
          <h1 className="text-center text-5xl font-medium pb-7">
            Explore Cutting-Edge Gadgets
          </h1>
          <div className="py-5 w-11/12 mx-auto flex flex-col md:flex-row gap-12">
            <div className="">
              <Category key={category.index} category={category}></Category>
            </div>
            <div className="">
              <Outlet></Outlet>
            </div>
            <div className="relative bottom-32">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
