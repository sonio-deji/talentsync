
const About = () => {
  return (
    <>
     <div className=" max-w-[1472px] mx-auto flex py-24 flex-col md:flex-row justify-between">
        <div className=" max-w-[400px]">
        <div className=" flex items-center gap-1">
            <svg
              width="26"
              height="28"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
                fill="#1570EF"
              />
              <path
                d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
                fill="#53B1FD"
              />
            </svg>
            <div>
              <span className="text-gray-900 font-semibold text-2xl">
                ClearLink
              </span>
              <span className=" font-semibold text-[#528BFF] ">.</span>
            </div>
          </div>
          <p className=" text-gray-600 text-lg mt-3">ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
        </div>
        <div className=" flex justify-between gap-9">
        <ol className=" text-gray-600 flex flex-col gap-3 font-semibold text-lg">
               <p className=" text-base text-gray-500">Product</p> 
                <li>Overview</li>
                <li>Features</li>
                <li>Solutions</li>
                <li>Tutorials</li>
                <li>Pricings</li>
          

            </ol>
            <ol className=" text-gray-600 font-semibold flex flex-col gap-3 text-lg">
            <p className=" text-base text-gray-500">Company</p> 
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Contact</li>

            </ol>
            <ol className=" text-gray-600 font-semibold flex flex-col gap-3 text-lg">
            <p className=" text-base text-gray-500">Resources</p> 
                <li>Blog</li>
                <li>Events</li>
                <li>Help centre</li>
                <li>Tutorials</li>
                <li>Support</li>

            </ol>
            <ol className=" text-gray-600 font-semibold flex flex-col gap-3 text-lg">
            <p className=" text-base text-gray-500">Legal</p> 
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Contact</li>
      

            </ol>
        
        </div>
      
        <div>
            <p className=" text-blue-700 mb-4">Get the app</p>
            <img src="/apple.svg" className=" mb-4" alt="" />
            <img src="/google.svg" alt="" />

        </div>
    </div>
    <div className=" bg-gray-50 py-12">
        <div className=" max-w-[1400px] flex justify-between mx-auto">
            <p className=" text-gray-500">© 2023 ClearLink. All rights reserved.</p>
            <div className=" flex gap-5">
                <img src="/linkedin.svg" alt="" />
                <img src="/twitter.svg" alt="" />
                <img src="/facebook.svg" alt="" />
                <img src="/instagram.svg" alt="" />
                <img src="/github.svg" alt="" />
                <img src="/youtube.svg" alt="" />


            </div>

        </div>

    </div>
    </>
   
  )
}

export default About