import lightTitan from "../../assets/ourBands/light_Titan.png";
import lightJohn from "../../assets/ourBands/light_john.png";
import lightLmdTowers from "../../assets/ourBands/light_tmd.png";
import lightT from "../../assets/ourBands/light_t.png";
import lightRhl from "../../assets/ourBands/light_rhl.png";
import darkTitan from "../../assets/ourBands/dark_Titan.png";
import darkJohn from "../../assets/ourBands/dark_john.png";
import darkLmdTowers from "../../assets/ourBands/dark_tmd.png";
import darkT from "../../assets/ourBands/dark_t.png";
import darkRhl from "../../assets/ourBands/dark_rhl.png";

const BrandsLogo = ({ theme }) => {  // Receive theme as a prop
  return (
    <div className="container mb-12 mt-12 sm:mt-0">
      <h1 className="text-36px font-custom text-center">Powering next-gen companies</h1>
      <div className="py-2 md:px-16 flex flex-wrap items-center justify-evenly gap-1">
        <img src={theme === "light" ? darkTitan : lightTitan} alt="logo" />
        <img src={theme === "light" ? darkJohn : lightJohn} alt="logo" />
        <img src={theme === "light" ? darkLmdTowers : lightLmdTowers} alt="logo" />
        <img src={theme === "light" ? darkT : lightT} alt="logo" />
        <img src={theme === "light" ? darkRhl : lightRhl} alt="logo" />
      </div>
    </div>
  );
};

export default BrandsLogo;
