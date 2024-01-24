import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  ChatBubbleBottomCenterIcon,
  Cog8ToothIcon,
  MicrophoneIcon,
  TvIcon,
  VideoCameraIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className=" min-h-[100dvh]  max-w-[1472px] mx-auto px-2">
      <section
        style={{ background: "url('/BackgroundPattern.svg')" }}
        className=" "
      >
        <div className=" mt-10 rounded-full w-full flex items-center justify-between bg-[#F2F4F7] border border-gray-300 py-4 px-8">
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
          <div className=" md:flex hidden items-center gap-3">
            <div className=" flex items-center gap-1 font-semibold text-lg text-gray-500">
              Products <ChevronDownIcon className=" w-5 h-5" />
            </div>
            <div className=" flex items-center gap-1 font-semibold text-lg text-gray-500">
              Solutions <ChevronDownIcon className=" w-5 h-5" />
            </div>
            <div className=" flex items-center gap-1 font-semibold text-lg text-gray-500">
              Resources <ChevronDownIcon className=" w-5 h-5" />
            </div>
            <div className=" flex items-center gap-1 font-semibold text-lg text-gray-500">
              Pricing{" "}
            </div>
          </div>
          <div className=" md:flex hidden gap-2">
            <button className=" overflow-hidden rounded-[100px] bg-white border border-gray-400 shadow-sm font-semibold text-gray-900 px-6 py-4">
              Talk to sales
            </button>
            <button className=" bg-blue-700 rounded-[100px] text-white font-semibold px-6 py-4">
              Sign up for free
            </button>
          </div>
        </div>
        <div className=" mt-[15vh] flex justify-between">
          <div className=" w-1/2">
            <h1 className=" md:text-[64px] text-[30px] font-semibold text-gray-800 md:leading-[72px]">
              Uniting the world, <br /> one video call at a time
            </h1>
            <p className=" md:text-lg text-[14px] text-gray-500  max-w-[662px] mt-6">
              Experience the future of communication with ClearLink where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
            <div className=" mt-12 ">
              <div className="flex items-center gap-4 ">
                <button className=" bg-blue-700 rounded-[100px] text-white font-semibold md:px-6 px-2 text-sm md:py-4">
                  Start your free trial
                </button>
                <div className=" flex items-center gap-3">
                  <img src="/droid.svg" alt="" />
                  <span className=" text-blue-700 font-semibold md:text-lg text-sm">
                    Discover AI assistant{" "}
                  </span>
                </div>
              </div>

              <div className=" mt-12 relative flex-col gap-32 md:gap-0 md:flex-row flex items-center justify-between max-w-[327px]">
                <div className=" flex items-center">
                  <img className=" absolute " src="/a.png" alt="" />
                  <img className=" absolute left-[30px]" src="/b.png" alt="" />
                  <img className=" absolute left-[60px]" src="/c.png" alt="" />
                  <img className=" absolute left-[90px]" src="/d.png" alt="" />
                </div>
                <div>
                  <div className=" flex">
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <span className=" text-gray-800 font-semibold ml-1">5.0</span>
                  </div>
                  <div>
                    <p className=" font-medium text-gray-600">
                      from 3,000+ reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:p-8 p-4 h-fit rounded-2xl bg-blue-50 border border-blue-200 max-w-[584px] w-full">
            <div className=" grid grid-cols-2 md:grid-cols-3 md:gap-3 gap-1">
              <div className=" max-w-[160px] max-h-[160px] bg-orange-300 rounded-lg">
                <img src="/avatar1.png" alt="" />
              </div>
              <div className=" max-w-[160px] max-h-[160px] bg-orange-300 rounded-lg">
                <img src="/avatar2.png" alt="" />
              </div>
              <div className=" max-w-[160px] max-h-[160px] bg-[#ACDC79] rounded-lg">
                <img src="/avatar3.png" alt="" />
              </div>
              <div className=" max-w-[160px] max-h-[160px] bg-orange-300 rounded-lg">
                <img src="/avatar4.png" alt="" />
              </div>
              <div className=" max-w-[160px] max-h-[160px] bg-[#B3B8DB] rounded-lg">
                <img src="/avatar5.png" alt="" />
              </div>
              <div className=" max-w-[160px] max-h-[160px] bg-orange-300 rounded-lg">
                <img src="/avatar1.png" alt="" />
              </div>
            </div>
            <div className=" flex items-center gap-4 mt-[40px] justify-center">
              <div className=" p-3 cursor-pointer bg-white border border-blue-100 rounded-full w-fit h-fit">
                <MicrophoneIcon className=" text-blue-700 w-[20px] h-[20px]" />
              </div>
              <div className=" p-3 cursor-pointer bg-white border border-blue-100 rounded-full w-fit h-fit">
                <VideoCameraIcon className=" text-blue-700 w-[20px] h-[20px]" />
              </div>
              <div className=" p-3 cursor-pointer bg-white border border-blue-100 rounded-full w-fit h-fit">
                <TvIcon className=" text-blue-700 w-[20px] h-[20px]" />
              </div>
              <div className=" p-3 cursor-pointer bg-white border border-blue-100 rounded-full w-fit h-fit">
                <FaceSmileIcon className=" text-blue-700 w-[20px] h-[20px]" />
              </div>
              <div className=" p-3 cursor-pointer bg-white border border-blue-100 rounded-full w-fit h-fit">
                <ChatBubbleBottomCenterIcon className=" text-blue-700 w-[20px] h-[20px]" />
              </div>
              <div className=" p-3 cursor-pointer bg-white border border-blue-100 rounded-full w-fit h-fit">
                <Cog8ToothIcon className=" text-blue-700 w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" mt-12 max-w-[1300px] mx-auto">
        <p className=" text-gray-600 text-[20px] text-center mb-6">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className=" md:flex grid grid-cols-2 gap-2 items-center justify-between">
          <img className=" block w-[120px]" src="/Shopify.svg" alt="" />
          <img className=" block w-[120px]" src="/Coinbase.svg" alt="" />
          <img className=" block w-[120px]" src="/Dropbox.svg" alt="" />
          <img className=" block w-[120px]" src="/Automattic.svg" alt="" />
          <img className=" block w-[120px]" src="/Marvel.svg" alt="" />

          <img src="/Intercom.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
