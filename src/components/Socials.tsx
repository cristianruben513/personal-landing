import clsx from "clsx";
import { SOCIAL_MEDIA } from "@/socials";

const Socials = () => {
  const socialMedia = SOCIAL_MEDIA ?? [];

  return (
    <section className="flex justify-center gap-x-3">
      {socialMedia.map((item, index) => {
        return (
          <a
            key={index}
            href={item?.href}
            target={item?.isExternal ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={clsx(
              "bg-white p-3 border rounded-full transition-all hover:shadow hover:scale-105 hover:text-white duration-300 shadow-sm",
              item?.className,
            )}
            aria-label={item?.title}
            data-event-category="Social"
            data-event-action={item?.eventName}
            data-event-label={item?.title}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay={index * 100}
            title={item?.title}
            data-umami-event={`Click Socials: ${item?.title}`}
          >
            {item?.icon}
          </a>
        );
      })}
    </section>
  );
};

export default Socials;
