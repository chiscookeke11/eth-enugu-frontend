import Image from "next/image";
import { times2025 } from "./eth-enugu/_data";
import Panel3 from "./Panel3";
import Collage from "./Collage";




export default function SpotLight() {
    return (
        <div className="bg-[#FFF4DE] py-5  md:py-8 px-[5%] flex items-center justify-center flex-col gap-7 " >


            <Collage />
            <Panel3 />



            <div className=" mx-auto   w-full max-w-[800px] flex flex-col items-center justify-center gap-3 ">
                <h2 className="text-2xl font-bold text-center text-[#1E1E1E]">
                    A Day to Remember: The Conference
                </h2>

                <h4 className="text-dark font-medium text-sm md:text-base text-center font-sans opacity-[75%] "  >1,000+ Attendees. 1 Movement.</h4>

                <p className="text-dark text-center text-[15px] font-medium  max-md:text-justify mt-3 ">
                    On conference day, over 1,000 people filled the venue: builders, dreamers, and leaders from across Nigeria and beyond.
                    From Lagos to Abuja, from Ghana to France, ETH Enugu ‘25 became a truly global moment.
                </p>
            </div>


            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 space-y-4 md:space-y-0 mt-20 items-center justify-center text-dark text-center">
                {times2025.map((item, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4">
                        <h3 className="text-2xl leading-full md:text-4xl font-semibold">
                            {item.title}
                        </h3>
                        <div className="flex gap-2 items-center whitespace-nowrap">
                            <Image
                                src={`/icons/${item.icon}.svg`}
                                width={16}
                                height={16}
                                className="object-cover"
                                alt={item.icon}
                            />
                            <p className="md:text-base text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}