import WorkCard from "./WorkCard";
import Img1 from "../../assets/work_imgs/designI.jpg";
import Img2 from "../../assets/work_imgs/nyc.jpg";
import Img3 from "../../assets/work_imgs/web.jpg";

const WorkData = [
  {
    id: 1,
    image: Img1,
    title: "Modern Minimalist Design",
    description:"An elegant design showcasing modern aesthetics with vibrant colors and minimalistic illustrations. This creative work emphasizes sophistication and style, perfect for contemporary branding and marketing solutions.",
  },
  {
    id: 2,
    image: Img2,
    title: "Urban Boldness in Design",
    description:"A striking visual blend of modern typography and dynamic imagery, inspired by the vibrant essence of New York City. This design captures urban energy with a contemporary edge, ideal for branding, editorial layouts, and creative campaigns.",
  },
  {
    id: 3,
    image: Img3,
    title: "Modern Web Development Showcase",
    description:"A sleek and professional design highlighting innovation in website development. Featuring a bold color scheme and clean typography, this visual emphasizes functionality and creativity, ideal for tech-focused branding and promotional materials.",
  },
];

const WorkComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold font-custom text-36px">
            SELECTED WORKS
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WorkData.map((item) => (
              <WorkCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">View All Works</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkComp;
