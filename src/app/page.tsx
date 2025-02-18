
import { FaInstagram, FaGithub } from "react-icons/fa6";

import LandingSlide from "@/app/components/LandingSlide";
import EducationSlide from "@/app/components/EducationSlide";
import InterestsSlide from "./components/InterestsSlide";

const socialLinks = [
  { key: "insta", icon: <FaInstagram style={{width: '32px', height: '32px'}} className="transition text-gray-700 hover:text-white"/>, link: "https://www.instagram.com/samyolig/" },
  { key: "gh", icon: <FaGithub style={{width: '32px', height: '32px'}} className="transition text-gray-700 hover:text-white"/>, link: "https://github.com/SamyolGH" },
]

export default function Home() {

  return (
    <div >
      <LandingSlide/>
      <EducationSlide/>
      <InterestsSlide/>

      <span className="fixed bottom-3 left-3">
        <div className="flex gap-2">
          {socialLinks.map((soc) => (
            <a
              href={soc.link}
              target="_blank"
              key={soc.key}
            >
              {soc.icon}
            </a>
          ))}
        </div>
      </span>
    </div>
  );
};