import { footerLinks } from "../../utils";
import { SiFacebook, SiTwitter, SiInstagram, } from "react-icons/si";
import { TbBrandFiverr, TbChevronRight } from "react-icons/tb";

const SocialMedia = ({ icon, name, link }) => {
  return (
    <a href={link} className="relative">
      <span className="mt-8 p-3 text-black block rounded-full z-2 top-1/2 left-0 -translate-y-1/2">
        {icon}
      </span>
      <span className="hidden ss:block social-name text-base font-[500] capitalize bg-white text-black rounded-full transition-all py-[0.9rem] px-[1.6rem] hover:px-16 cursor-pointer z-1 overflow-hidden">
        {name}
      </span>
    </a>
  );
};

const FooterSection = () => {
  const date = new Date().getFullYear();
  return (
    <section className="relative  bg-[#f6f7fb] py-5">
     <div className="mx-[8vw]">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-black">
        <h2 className="text-xl lg:text-2xl">Connect with us</h2>
        <div>
          <div className="flex items-center gap-4 xs:gap-5 ">
            <SocialMedia
              icon={<SiFacebook />}
              name="github"
              link="/"
            />
            <SocialMedia
              icon={<SiTwitter />}
              name="linkedin"
              link="/"
            />
            <SocialMedia
              icon={<TbBrandFiverr />}
              name="fiverr"
              link="/"
            />
            <SocialMedia
              icon={<SiInstagram />}
              name="upWork"
              link="/"
            />
            <SocialMedia
              icon={<SiFacebook />}
              name="freelancer"
              link="/"
            />
          </div>
        </div>
        </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-10">
  {footerLinks.map((item, index) => (
    <div key={index}>
      <h3 className="font-matter-b">{item.title}</h3>
      <ul className="flex flex-col gap-3 text-[#1a2231] mt-5">
        {item.links.map((link, index) => (
          <div className="flex items-center gap-3" key={index}>
            <span className="bg-[#ff7900] rounded-full">
              <TbChevronRight />
            </span>
            <a href={link.link} target="_blank">
              <li className="text-[.9rem] font-[500] hover:text-[#ff7900]">
                {link.name}
              </li>
            </a>
          </div>
        ))}
      </ul>
     </div>
    ))}
   </div>
   <div className="md:flex py-4 md:items-center md:justify-between">
      <span className="text-sm text-black sm:text-center">© 2023 <a href="" className="hover:underline"> Zinda Shah Madar ™</a> All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black0 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Refund Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Terms and Condition</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Licensing</a>
        </li>
    </ul>
    </div>
</div>
      


    </section>
  );
};

export default FooterSection;