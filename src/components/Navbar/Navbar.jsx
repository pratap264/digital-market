import React from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkLogo from "../../assets/logo/logo_for_dark.png"; // Add your dark mode logo
import LightLogo from "../../assets/logo/logo_for_light.png"; // Add your light mode logo
import DarkMode from "./DarkMode"; // Import the DarkMode component
import { Link, useNavigate, useLocation } from "react-router-dom"; // Add useLocation

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Our Services",
    link: "/services",
  },
  {
    id: 3,
    name: "Career",
    link: "/career",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page (root path)
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="logo" onClick={handleLogoClick}>
            <img src={theme === "dark" ? DarkLogo : LightLogo} alt="Logo" />
          </div>

          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className={`text-lg font-medium py-2 transition-colors duration-500 ${
                      location.pathname === link
                        ? "text-primary border-b-2 border-primary"
                        : "hover:text-primary hover:border-b-2 hover:border-primary"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <Link to="/contact">
                <button className="primary-btn">Get in Touch</button>
              </Link>
              <DarkMode theme={theme} setTheme={setTheme} /> {/* DarkMode toggle */}
            </ul>
          </nav>

          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode theme={theme} setTheme={setTheme} /> {/* DarkMode toggle for mobile */}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile view Menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
