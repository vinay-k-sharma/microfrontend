import { Link } from "react-router-dom";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoPlayStore } from "react-icons/bi";
import 'tailwindcss/tailwind.css'
const Footer = () => {
  return (
    <div className="sticky top-full bg-[#F3F4F4] md:px-12 lg:px-12 px-4 flex flex-wrap border-t-[1px] border-solid  py-[60px] text-[14px]">
      <div className="flex flex-col md:w-1/2 lg:w-1/4">
        <h3 className="text-[15px] mb-[20px] font-[500] leading-[1.2] font-heading text-[#2d465e]">About Us</h3>
        <p className=" mb-6">
          There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
        <a className="w-max rounded-[30px] border-[2px] border-solid py-[8px] px-[30px] text-[14px]  bg-[#34BF49] text-white">Learn More</a>
      </div>
      <div className="flex flex-col md:w-1/2 lg:w-1/4 md:pl-12">
        <h2 className="text-[15px] font-heading text-[#2d465e] mb-[20px] mt-[20px] md:mt-0 font-[500] leading-[1.2]">Navigation</h2>
        <div className="flex md:flex-row">
        <ul className="mr-8 float-left mb-4">
          <li className="mb-[10px] leading-[1.5]"><Link to="/">Overview</Link></li>
          <li className="mb-[10px] leading-[1.5]"><Link to="/">About Us</Link></li>
          <li className="mb-[10px] leading-[1.5]"><Link to="/">Find Buyers</Link></li>
        </ul>
        <ul className="mr-12 float-start mb-4">
          <li className="mb-[10px] leading-[1.5]"><Link to="/">Overview</Link></li>
          <li  className="mb-[10px] leading-[1.5]"><Link to="/">About Us</Link></li>
          <li className="mb-[10px] leading-[1.5]"><Link to="/">Services</Link></li>
        </ul>
        </div>
       
      </div>
      <div className="flex flex-col md:w-1/2 md:mt-5 lg:mt-0 lg:w-1/4">
        <h2 className="text-[#2d465e] text-[15px] mb-[20px] font-heading">Recent Posts</h2>
        <div className="flex flex-col">
          <div className="mb-[10px] leading-[1.5] "><p className="text-[12px] ">May 3, 2020</p>
          <a href="#" className="hover:cursor-pointer ">There live the Blind Texts</a>
          </div>
          <div className="mb-[10px] leading-[1.5] "><p className="text-[12px] ">May 3, 2020</p>
          <a href="#" className="hover:cursor-pointer ">Separated they live in Bookmarksgrove right</a>
          </div>
         
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 md:pl-10 lg:pl-0 lg:w-1/4 ">
        <div>
          <h3 className="font-heading text-[#2d465e] text-[15px] mb-[20px] ">Connect</h3>
          <div className="flex mb-4 gap-1">
            <a href="#" className="mb-[10px] leding-[1.5] w-[40px] h-[40px] rounded-full text-lg flex items-center justify-center bg-[#DDDFDF] "><BiLogoFacebookCircle /></a>
            <a href="#" className="mb-[10px] leding-[1.5] w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#DDDFDF] "><FaXTwitter/></a>
            <a href="#" className="mb-[10px] leding-[1.5] w-[40px] text-lg h-[40px] flex items-center justify-center rounded-full bg-[#DDDFDF] "><BiLogoLinkedinSquare /></a>
            <a href="#" className="mb-[10px] leding-[1.5] w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#DDDFDF] text-lg"><BiLogoGoogle /></a>
            <a href="#" className="mb-[10px] leding-[1.5] w-[40px] text-lg h-[40px] flex items-center justify-center rounded-full bg-[#DDDFDF] "><BiLogoPlayStore /></a>
          </div>
        </div>

        <div>
          <h3 className="text[15px] font-heading text-[#2d465e] mb-[20px] " >Subscribe</h3>
          <form>
            <input type="text" placeholder="Enter your email" className="text-[14px] pl-2 h-[42px] border-[2px] border-solid pr-[40px] bg-[#F3F4F4]"/>
          </form>
        </div>
      </div>
      <div className="mt-[50px] relative pt-[20px] border-t-[1px] border-solid border-black w-full">
      <p className="my-[2px]">© Copyright Active. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
