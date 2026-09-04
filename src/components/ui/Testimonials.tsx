import { testimonial_data } from "@/data/testimonials_data";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    return (
        <section className="bg-[#F4F4F4] py-40 flex items-center justify-center relative flex-col">



            <div className="h-screen sticky top-0 flex items-center justify-center ">
                <h1 className="text-[3em]! lg:text-[9.75em]! font-bold">
                    EthEnugu{" "}
                    <span className="text-amber-850">
                        ‘25
                    </span>
                </h1>
            </div>

            {testimonial_data.map((t, index) => (
                <div
                    key={index}
                    className="w-full h-screen flex items-center justify-center sticky top-0 px-[4%] "
                >
                    <TestimonialCard testimonial={t} />
                </div>
            ))}

        </section>
    );
}