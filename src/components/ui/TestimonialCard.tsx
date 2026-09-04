import { testimonial_data_type } from "@/types";
import Image from "next/image";


type TestimonialCardProps = {
    testimonial: testimonial_data_type;
};


export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div
            style={{
                rotate: `${testimonial.tilt}deg`
            }}
            className=" w-full max-w-[581px] min-h-[230px] md:min-h-[280px] bg-white rounded-[44.62px]
         p-[18px] md:p-[26.77px] gap-[13px] md:gap-[26.77px] border-[1.12px] border-[#000000]
         flex flex-col items-start  justify-start
         " >

            <div className="w-full flex items-center justify-start gap-[16.73px] " >

                <Image
                    src={testimonial.image}
                    alt="user-image"
                    height={500} width={500}
                    className=" size-[45px] md:size-[66.93px] rounded-full "
                />

                <div className="space-y-[5.58px] " >
                    <h3 className="text-[#000000] text-lg! md:text-[27px]! font-extrabold "  > {testimonial.name} </h3>
                    <h4 className="text-[#666666] text-base! md:text-lg! " >{testimonial.handle}</h4>
                </div>

            </div>


            <p className="text-[#000000] font-normal! text-sm! md:text-lg! " >
                {testimonial.content}
            </p>


            <div className="w-full flex items-center justify-start gap-[8.92px] text-xs! md:text-[17.85px] text-[#666666] " >
                <h6>2:30PM</h6>

                <h6>17 AUG 2025</h6>

                <h6>ETHENUGU ‘ 25</h6>
            </div>

        </div>
    )
}