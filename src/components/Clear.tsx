import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

const Clear = () => {
  return (
    <section className=" min-h-[748px] py-24  bg-gray-50 px-2">
        <div className=" max-w-[1472px] mx-auto px-2  flex md:items-center flex-col md:flex-row justify-between">
        <div className=" flex flex-col gap-12 w-1/2">
        <img className=" w-[112px]" src="/Shopify.svg" alt="" />

        <div className=" flex">
          <img src="/Star.svg" alt="" />
          <img src="/Star.svg" alt="" />
          <img src="/Star.svg" alt="" />
          <img src="/Star.svg" alt="" />
          <img src="/Star.svg" alt="" />
        </div>
        <p className=" text-gray-900 text-[22px] md:text-[44px] md:leading-[60px] font-medium">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>
        <div className=" flex items-center justify-between gap-2">
            <div className=" flex">
            <img className=" object-contain " src="/a.png" alt="" />
            <div>
                <p className=" text-gray-900 font-semibold tect-[20px]">Sarah Thompson</p>
                <p className=" text-lg text-gray-600">Project manager, shopify</p>
            </div>
            

            </div>
            <div className=" flex items-center gap-8">
            <div className=" p-3 rounded-full border border-blue-100"><ArrowLeftIcon className=" w-4 h-4 text-blue-700" /></div>
                <div className=" p-3 rounded-full border border-blue-100"><ArrowRightIcon className=" w-4 h-4 text-blue-700" /></div>
            </div>
        </div>
      </div>

      <div>
        <div className=" flex mb-2 gap-2 justify-center w-full">
            <img className=" max-w-[160px]  max-h-[160px] self-end block" src="/Image.png" alt="" />
            <img src="/Image(1).png" alt="" />

        </div>
        <div className=" flex gap-2">
        <img src="/Image(2).png" className=" w-[192px] h-[128px]" alt="" />
        <img src="/Image(3).png" alt="" />
        <img src="/Image(4).png" className=" w-[192px] h-[128px]" alt="" />

        </div>
      </div>
        </div>
    
    </section>
  );
};

export default Clear;
