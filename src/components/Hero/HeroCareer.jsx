
import yellowCar from "../../assets/website/career_img.jpg";

const HeroCareer = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px] "
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md "
            >
              <p className="text-white-500 text-sm ">Asscoiates</p>
              <h1 className="font-bold text-primary hover:text-lg text-center">
                500+ <span className="font-normal"></span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Join Our Growing Team{" "}
              <span className="text-primary">Shape the future of digital marketing with us.</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            Be a part of our dynamic team and help drive innovation in digital marketing. Join us to shape the future and make an impact.
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

export default HeroCareer;