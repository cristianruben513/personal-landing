"use client"

import { PiLinkBreakDuotone as LinkIcon } from "react-icons/pi"
import SectionHeader from "@/common/components/SectionHeader"
import { LINKS } from "@/links"

import LinkItem from "./LinkItem"

const Links = () => {
  const handleClick = (url: string, target: string) => {
    if (url !== "#") {
      window.open(url, target)
    }
  }

  return (
    <section className='space-y-4'>
      <SectionHeader icon={<LinkIcon size={24} />} title='Links' />

      <div className='flex flex-col w-full gap-y-3'>
        {LINKS?.map((item, index) => (
          <LinkItem key={index} index={index} onClick={handleClick} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Links
