import { CheckCircleIcon } from "@heroicons/react/24/outline"

const Ready = () => {
  return (
    <section className=" py-24 flex flex-col md:flex-row max-w-[1400px] mx-auto gap-2 md:gap-0">
        <div className=" md:w-1/2 flex flex-col gap-8">
            <p className=" text-gray-900 text-3xl md:text-5xl font-semibold">Ready to clear the path to perfect communication?</p>
            <div className=" flex flex-col gap-2">
                <div className=" flex items-center gap-2 text-blue-700">
                <CheckCircleIcon className=" w-5 h-5" /> <span>30 days free trial</span>

                </div>
                <div className=" flex items-center gap-2 text-blue-700">
                <CheckCircleIcon className=" w-5 h-5" /> <span>Cancel at any time</span>

                </div>
                <div className=" flex items-center gap-2 text-blue-700">
                <CheckCircleIcon className=" w-5 h-5" /> <span>Access to all features</span>

                </div>
                <div className=" flex items-center gap-2 text-blue-700">
                <CheckCircleIcon className=" w-5 h-5" /> <span>Personalized onboarding</span>

                </div>
              
            </div>
            <div className=" flex gap-2">
            <button className=" overflow-hidden rounded-[100px] bg-white border border-gray-400 shadow-sm font-semibold text-gray-900 px-6 py-4">
              Talk to sales
            </button>
            <button className=" bg-blue-700 rounded-[100px] text-white font-semibold px-6 py-4">
              Start your free trial
            </button>
          </div>
        </div>
        <div className=" md:w-1/2">
            <img src="/mock.png" alt="" />
        </div>
    </section>
  )
}

export default Ready