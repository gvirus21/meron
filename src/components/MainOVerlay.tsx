import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaReddit,
  FaPinterest,
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    id: "instagram",
    icon: <FaInstagram />,
    link: "#",
  },
  {
    id: "youtube",
    icon: <FaYoutube />,
    link: "#",
  },
  {
    id: "twitter",
    icon: <FaTwitter />,
    link: "#",
  },
  {
    id: "reddit",
    icon: <FaReddit />,
    link: "#",
  },
  {
    id: "pintrest",
    icon: <FaPinterest />,
    link: "#",
  },
];

const MainOVerlay = () => {
  return (
    <div className="fixed top-0 h-screen w-screen max-w-full z-50 pointer-events-none">
      <div className="absolute top-1/2 -translate-y-[20%] left-20 text-black text-xl">
        <p>Meron.help@mail.co</p>
        <p>+91-8903-8080</p>
      </div>
      <div className="absolute top-1/2 -translate-y-[50%] right-20 flex flex-col justify-between h-[20rem] text-black text-xl">
        {SOCIAL_LINKS.map((social) => (
          <div key={social.id}>{social.icon}</div>
        ))}
      </div>
    </div>
  );
};

export default MainOVerlay;
