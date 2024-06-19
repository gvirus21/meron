import useCursorState from "@/store/useCursorState";
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
  const { setCursorState } = useCursorState();

  return (
    <>
      <div
        onMouseEnter={() => {
          setCursorState("md-hovered");
        }}
        onMouseLeave={() => {
          setCursorState("regular");
        }}
        className="fixed top-1/2 -translate-y-[20%] left-5 text-black text-xl z-50 -rotate-90"
      >
        <p>Meron.help@mail.co</p>
        <p>+91-8903-8080</p>
      </div>
      <div className="fixed top-1/2 -translate-y-[50%] right-20 flex flex-col justify-between h-[20rem] text-black text-xl z-50">
        {SOCIAL_LINKS.map((social) => (
          <div
            key={social.id}
            onMouseEnter={() => {
              setCursorState("sm-hovered");
            }}
            onMouseLeave={() => {
              setCursorState("regular");
            }}
          >
            {social.icon}
          </div>
        ))}
      </div>
    </>
  );
};

export default MainOVerlay;
