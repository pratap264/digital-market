import { FaDigitalOcean } from "react-icons/fa";
import { TbDeviceImacSearch } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { VscCallOutgoing } from "react-icons/vsc";


const skillsData = [
  {
    name: "Digital Marketing Specialist:",
    icon: <FaDigitalOcean className="text-4xl text-primary" />,
    link: "#",
    description:
      "Responsible for planning and executing multi-channel marketing campaigns.",
    aosDelay: "0",
  },
  {
    name: "SEO Analyst",
    icon: <TbDeviceImacSearch  className="text-4xl text-primary" />,
    link: "#",
    description:
      "Optimize websites to improve visibility and search engine rankings.",
    aosDelay: "300",
  },
  {
    name: "Social Media Manager",
    icon: <RiAdminFill className="text-4xl text-primary" />,
    link: "#",
    description:
      "Create and manage content to drive engagement across social platforms.  ",
    aosDelay: "500",
  },
  {
    name: "CTA Section",
    icon: <VscCallOutgoing className="text-4xl text-primary" />,
    link: "#",
    description:
      "Don’t see a position that fits? Send us your resume at careers@garageadvertisements.com.",
    aosDelay: "700",
  },
];
const CareerService = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Why Work with Us
            </h1>
            {/* <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm pb-6px"
            >
              From the inception of a project to its completion, we employ a comprehensive and holistic approach that ensures all aspects and stages are thoughtfully and thoroughly addressed.
            </p> */}
            <br />
            <div className="space-y-2">
              <p
                data-aos="fade-up"
                className="text-base pb-6px text-center hover:text-primary hover:text-lg"
              >
                Collaborative and innovative environment
              </p>
              <p
                data-aos="fade-up"
                className="text-base pb-6px text-center hover:text-primary hover:text-lg"
              >
                Opportunities for growth and learning
              </p>
              <p
                data-aos="fade-up"
                className="text-base pb-6px text-center hover:text-primary hover:text-lg"
              >
                Competitive compensation and benefits
              </p>
            </div>
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
    </>
  );
};

export default CareerService;
