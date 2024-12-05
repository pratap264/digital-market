import { FaCameraRetro } from "react-icons/fa";
import { GiBowenKnot } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { SiAltiumdesigner } from "react-icons/si";
import { SiAffinitydesigner } from "react-icons/si";
import { SiGooglesearchconsole } from "react-icons/si";
import { GiClick } from "react-icons/gi";
import { SiMediamarkt } from "react-icons/si";
import { SiContentful } from "react-icons/si";

const skillsData = [
  {
    name: "Search Engine Optimization (SEO)",
    icon: <SiGooglesearchconsole className="text-4xl text-primary" />,
    link: "#",
    description:
      "Rank higher on search engines and drive organic traffic to your website with our expert SEO services.",
    aosDelay: "0",
  },
  {
    name: "Pay-Per-Click Advertising (PPC)",
    icon: <GiClick  className="text-4xl text-primary" />,
    link: "#",
    description:
      "Maximize your ROI with precision-targeted ad campaigns on platforms like Google, Facebook, and more.  ",
    aosDelay: "300",
  },
  {
    name: "Social Media Marketing",
    icon: <SiMediamarkt className="text-4xl text-primary" />,
    link: "#",
    description:
      "Boost engagement, build community, and increase brand awareness on all major social platforms",
    aosDelay: "500",
  },
  {
    name: "Content Marketing",
    icon: <SiContentful className="text-4xl text-primary" />,
    link: "#",
    description:
      "Craft compelling stories that resonate with your audience and keep them coming back.",
    aosDelay: "700",
  },
];
const skillsData2 = [
    {
      name: "Web Development",
      icon: <FaCameraRetro className="text-4xl text-primary" />,
      link: "#",
      description:
        "Create user-friendly, responsive websites designed to convert visitors into customers.",
      aosDelay: "0",
    },
    {
      name: "Email Marketing",
      icon: <GiBowenKnot  className="text-4xl text-primary" />,
      link: "#",
      description:
        "Nurture leads and drive sales with personalized email campaigns.",
      aosDelay: "300",
    },
    {
      name: "Branding Design",
      icon: <SiAltiumdesigner className="text-4xl text-primary" />,
      link: "#",
      description:
        "Crafting iconic brands that resonate with your audience and drive success.",
      aosDelay: "500",
    },
    {
      name: "UI/UX Web Design",
      icon: <SiAffinitydesigner className="text-4xl text-primary" />,
      link: "#",
      description:
        "Designing intuitive, user-centered interfaces for exceptional web experiences.",
      aosDelay: "700",
    },
  ];
const MultiServices = () => {
  return (
    <div id="middle-content">
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-4xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm pb-6px mt-10px"
            >
              From the inception of a project to its completion, we employ a comprehensive and holistic approach that ensures all aspects and stages are thoughtfully and thoroughly addressed.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData2.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
          {/* button */}
        </div>
      </div>
    </div>
  );
};

export default MultiServices;