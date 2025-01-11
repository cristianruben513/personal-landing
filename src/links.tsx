import {
  BiFile as PDFIcon,
  BiPin as WebsiteIcon,
} from "react-icons/bi";

export const LINKS = [
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
    href: "https://cv.cristianruben.com",
    className: "bg-sky-700",
    target: "_blank",
  },
];
