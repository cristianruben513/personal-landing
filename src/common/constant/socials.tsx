import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";
import { RiTwitterXFill as TwitterXIcon } from "react-icons/ri";

import { SocialItemProps } from "../types/socials";

const iconSize = 20;

export const SOCIAL_MEDIA: SocialItemProps[] = [
  {
    title: "Github",
    href: "https://github.com/cristianruben513",
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Github",
    className: "text-slate-800 hover:bg-slate-800",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/cristianruben/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
    className: "text-[#0b66c2] hover:bg-[#0b66c2]",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/rubenfigue513/",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
    className: "text-pink-600 hover:bg-pink-600",
  },
  {
    title: "X",
    href: "https://x.com/RubenFigue513a",
    icon: <TwitterXIcon size={19} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: X",
    className: "hover:bg-black",
  },
];
