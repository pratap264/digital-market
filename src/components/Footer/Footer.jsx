import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const FooterLinks = [
  { title: "About", link: "/#about" },
  { title: "Services", link: "/#services" },
  { title: "Contact", link: "/#contact" },
  { title: "Career", link: "/#career" },
];
const HelpLinks = [
  { title: "Customer Support", link: "/#support" },
  { title: "Terms & Conditions", link: "/#terms" },
  { title: "Privacy Policy", link: "/#policy" },
];
const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "/#ebooks",
  },
  {
    title: "How To Design",
    link: "/#design",
  },
  {
    title: "Follow Us",
    link: "",
  },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact'); // Replace with your desired route
  };

  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className="py-8 px-4">
            {/* <h3 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-custom hover:text-primary duration-300">
            Call-to-Action: 
            "Ready to Grow? Contact Us Today!"  
            </h3> */}
            {/* <p className="text-sm">
            -  " Crafting impactful designs that define your digital presence. "
            </p> */}
            
            <div className="order-2 sm:order-1xl">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-4xl font-semibold"
              style={{ lineHeight: 1.2 }}>
             Call-To-Action {" "}
            </h1>
            <div className="flex items-center space-x-1 mt-4">
              <h1 data-aos="fade-up" className="text-1xl font-custom text-primary font-semibold">Ready to Grow?</h1>
              <a data-aos="fade-up" className="text-1xl font-custom font-semibold underline cursor-pointer" onClick={handleButtonClick}>Contact Us</a>
              <h1 data-aos="fade-up" className="text-1xl font-custom text-primary font-semibold">Today!</h1>
              </div>
          </div>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

