import useCursorState from "@/store/useCursorState";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaReddit,
  FaPinterest,
} from "react-icons/fa6";

const Footer = () => {
  const { setCursorState } = useCursorState();
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

  return (
    <footer className="relative flex flex-col md:flex-row justify-between items-center md:items-center h-[20vh] w-full bg-black px-4 md:px-20">
      <div
        onMouseEnter={() => {
          setCursorState("md-hovered");
        }}
        onMouseLeave={() => {
          setCursorState("regular");
        }}
        className="flex flex-col justify-between items-center md:items-start text-white text-xl mt-10 z-50"
      >
        <p>Meron.help@mail.co</p>
        <p>+91-8903-8080</p>
      </div>
      <div className="flex flex-col items-end gap-5">
        <p className="text-white text-xl mt-20">Made with  by @gouravkumar</p>
        <div className="flex justify-between gap-10 text-white text-xl z-50 mb-5">
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
      </div>
    </footer>
  );
};

export default Footer;
