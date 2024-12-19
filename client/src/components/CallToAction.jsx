import { Button } from "flowbite-react";


export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to know more about Project made by React + Firebase?
            </h2>
            <p className='text-gray-500 my-2'>
                Check out this awesome project! Aussienest is a real estate sales and rental website where people can browse properties for sale or rent through the website. Tech stack: React, Firebase, Tailwind CSS, and more.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://aussienest.vercel.app/" target='_blank' rel='noopener noreferrer'>
                    Aussienest Projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="/image_aussienest1.png" />
        </div>
    </div>
  )
}
