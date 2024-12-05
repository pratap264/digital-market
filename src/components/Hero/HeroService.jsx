import yellowCar from "../../assets/website/services_img.png";

const HeroService = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[380px] md:max-w-[530px] "
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-2xl bg-white dark:bg-gray-900 dark:text-white shadow-md "
            >
              <p className="text-white-500 text-base text-center ">Many Services</p>
              <h1 className="font-bold text-center">
                <span className="font-normal text-primary hover:text-lg">Available</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.3 }}
            >
              Comprehensive Digital Marketing Solutions{" "}
             
            </h1>
            <span data-aos="fade-up"className="text-2xl font-custom text-primary  font-semibold mt-36">From strategy to execution, we’ve <br /> got you covered."</span>
            <p data-aos="fade-up" data-aos-delay="300">
            We provide a complete range of digital marketing services, 
            guiding you through every step—from crafting a personalized 
            strategy to seamless execution—ensuring that every aspect 
            of your marketing campaign is optimized for success.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroService;
