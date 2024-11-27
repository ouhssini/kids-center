import {  Facebook, Instagram, Linkedin, SendHorizonal, Twitter, Youtube } from "lucide-react";


type links = {
  name: string;
  href: string;
}

const informations: links[] = [
  { name: 'Teaching', href: '#' },
  { name: "Terms & Conditions", href: '#' },
  { name: "Policy for Parents", href: '#' },
  { name: "Contact Us", href: '#' }
]
const quickLinks: links[] = [
  { name: 'Search', href: '#' },
  { name: "Center informations", href: '#' },
  { name: "About Us", href: '#' },
  { name: "Courses", href: '#' }
]

const Footer = () => {
  const year: number = new Date().getFullYear()
  return (
    <footer className="bg-primary px-8 pt-10 pb-3 mt-8 text-background">
      <div className="flex  flex-row gap-8 items-center justify-center flex-wrap md:items-start md:justify-between">
        <div className="logo flex-1 md:basis-56 basis-auto text-center ">
          <img src="./logo.png" alt="logo" className="w-36 mx-auto" />
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius vehicula odio,Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <div className="informations flex flex-col gap-4 flex-1 basis-28">
          <h1 className="font-bold text-xl capitalize"> Informations</h1>
          {
            informations.map((info, index) => {
              return <a href={info.href} key={index} className="">{info.name}</a>
            })
          }
        </div>
        <div className="quick-links flex flex-col gap-4  flex-1 basis-28">
          <h1 className="font-bold text-xl capitalize"> Quick Links</h1>
          {
            quickLinks.map((link, index) => {
              return <a href={link.href} key={index} className="">{link.name}</a>
            })
          }
        </div>
        <div className="subscribe flex flex-col gap-4  flex-1 basis-72">
          <h1 className="font-bold text-xl capitalize"> Newsletter </h1>
          <p className="font-semibold capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia tortor eros</p>
          <div className="input flex items-center border border-background py-2 px-4 rounded-lg bg-background">
            <input type="text" placeholder="Enter your email" className="bg-transparent border-none w-full text-foreground  py-1 px-2 leading-tight focus:outline-none" />
            <SendHorizonal size={24}  className="text-primary"/>
          </div>
          <div className="socials flex gap-4 items-center ">
            <Twitter size={24} className="cursor-pointer hover:scale-105 transition-all duration-200" />
            <Facebook size={24} className="cursor-pointer hover:scale-105 transition-all duration-200" />
            <Linkedin size={24} className="cursor-pointer hover:scale-105 transition-all duration-200" />
            <Instagram size={24} className="cursor-pointer hover:scale-105 transition-all duration-200" />
            <Youtube size={24} className="cursor-pointer hover:scale-105 transition-all duration-200" />
          </div>
        </div>
      </div>
      <div className="  text-center text-sm pt-8 font-semibold capitalize"> &copy; {year}  KIDSCENTER -  all rights reserved</div>
    </footer>
  )
}

export default Footer