import {
  BiFile as PDFIcon,
  BiPin as WebsiteIcon,
} from "react-icons/bi";

import { LinkProps } from "../types/link";

export const LINKS: LinkProps[] = [
  {
    label: "Personal Website & Portfolio",
    icon: <WebsiteIcon size={21} className="text-neutral-600" />,
    href: "https://cristian.digital",
    className: "bg-emerald-700",
    target: "_blank",
  },
  {
    label: "Resume & Curriculum Vitae",
    icon: <PDFIcon size={21} className="text-neutral-600" />,
    href: "https://cristian-cv.vercel.app/",
    className: "bg-sky-700",
    target: "_blank",
  },
];
