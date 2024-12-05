const HeroContact = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white bg-gray-100 duration-300">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Address section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
            {/* Added "Contact" text */}
            <h2
              data-aos="fade-up"
              className="text-2xl sm:text-3xl font-semibold text-primary"
              style={{ lineHeight: 1.3 }}
            >
              Contact -
            </h2>

            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-4xl font-semibold"
              style={{ lineHeight: 1.3 }}
            >
              621/4A W2 Juhi Kalan, Barra, Kanpur - 208027.{" "}
              <span className="text-primary text-36px">
                <br />
                Phone: +91 76519 78884
              </span>
            </h1>
            <div className="text-2xl mt-6px underline cursor-pointer">
              <a
                data-aos="fade-up"
                className="font-custom font-semibold"
                data-aos-delay="300"
              >
                business@garageadvertisements.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;

