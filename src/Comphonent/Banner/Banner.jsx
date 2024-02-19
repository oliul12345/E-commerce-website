const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse w-full  md:h-[500px]">
          <img
            src="/public/resource/hero4.png"
            className=" rounded-lg shadow-2xl md:w-1/2 h-full w-full"
          />
          <div className="md:w-1/2">
            <p>Trade in offer</p>
            <h1 className="text-5xl font-bold my-6">Supper value deals <span className="text-lime-600">On all Product</span></h1>
            <p className="my-6">Save more with coupons and upto 70% off</p>
           
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
