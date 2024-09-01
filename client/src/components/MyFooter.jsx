import {  Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub,  BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MyFooter() {
  return (
    <div>
        <Footer container className='border border-t-8 border-teal-400'>
       
      <div className="w-full">
      {/* <Footer.Divider /> */}
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-5">
            {/* <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            /> */}
    
              <Link to="/" className="self-center whitespace-nowrap  text-xl  font-semibold dark:text-white ">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Mark&apos;s</span>
                Blog
            </Link>
            
            
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/">Mark&apos;s Blog</Footer.Link>
                <Footer.Link href="https://aussienest.vercel.app/">AUSSIENEST</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/mingxiangzhangmark">Github</Footer.Link>
                <Footer.Link href="https://linkedin.com/in/mark-zhang-04b3722b7">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="MINGXIANGZHANG™" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon href="https://github.com/mingxiangzhangmark" icon={BsGithub} className="hover:text-gray-700 transition ease-in-out"/>
            <Footer.Icon href="https://linkedin.com/in/mark-zhang-04b3722b7" icon={BsLinkedin} className="hover:text-gray-700 transition ease-in-out"/>
            <Footer.Icon href="#" icon={BsFacebook} className="hover:text-gray-700 transition ease-in-out"/>
            <Footer.Icon href="#" icon={BsDribbble} className="hover:text-gray-700 transition ease-in-out"/>
            <Footer.Icon href="#" icon={BsTwitter} className="hover:text-gray-700 transition ease-in-out"/>
            
          </div>
        </div>
      </div>
    </Footer>
    </div>
  )
}
