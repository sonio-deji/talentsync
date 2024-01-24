import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const disp = [
    {
        'header': 'How many participants can join a ClearLink video conference?',
        'paragraph': 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
        'header': 'Can I use ClearLink on multiple devices?',
        'paragraph': 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
        'header': 'Is ClearLink compatible with other video conferencing platforms?',
        'paragraph': 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
        'header': 'How does ClearLink ensure the security of my video conferences?',
        'paragraph': 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
        'header': 'Do I need to download any software to use ClearLink?',
        'paragraph': 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
        'header': 'What kind of customer support does ClearLink provide?',
        'paragraph': 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },

]
const Faqs = () => {
    const [open, setOpen] = useState<number| null>(null)
    const handleOpen = (id: number) => {
        if(open === id) {
            setOpen(null)
        } else {
            setOpen(id)

        }
    }
  return (
    <section className=" py-24 px-2 flex flex-col md:flex-row  max-w-[1472px] mx-auto ">
        <div className=" md:w-1/2 flex flex-col gap-4">
        <p className=" text-blue-700 font-semibold">Support</p>
        <p className=" text-5xl font-semibold text-gray-900">FAQS</p>
        <p className=" text-2xl text-gray-500">Everything you need to know about the product and billing. Can’t find the answer you’re looking for? <a href="" className=" underline">Please chat to our friendly team.</a> </p>
        </div>
        <div className=" md:w-1/2">
           {disp.map((d, i) => {
            return <div key={i} onClick={() => handleOpen(i)} className={` ${open === i ? ' rounded-2xl bg-gray-50 border border-gray-200 p-8' : 'border-b py-8 border-b-gray-200'} `}>
                <p className=" text-gray-900 flex items-center w-full justify-between font-semibold">{d.header} <span className=" cursor-pointer">{open !== i ? <PlusCircleIcon className=" w-5 h-5" /> : <MinusCircleIcon className=" w5 h-5" />}</span> </p>
                <p className={` text-lg text-gray-600 ${open === i ? ' h-fit ' : 'h-0 overflow-hidden'} transition-all `}>{d.paragraph} </p>
            </div>
           })}
        </div>
        
    </section>
  )
}

export default Faqs