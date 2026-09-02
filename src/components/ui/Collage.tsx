import Image from "next/image";



export default function Collage() {
    return (
        <section className="w-full flex flex-col items-center justify-center my-10 gap-20 "  >


            <div className=" w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-25  "  >

                <div className="basis-1/2 flex flex-col items-start gap-1 md:gap-3  max-w-[500px] pt-10 " >
                    <h2 className=" text-xl! md:text-[32px]! font-bold text-start text-dark mb-4">
                        EthEnugu &lsquo;25: A First for Nigeria. <br /> A First for the South East.
                    </h2>

                    <h4 className="text-dark font-medium text-sm! md:text-base! text-left font-sans opacity-[75%] "  >
                        Where History Was Written Onchain</h4>

                    <p className="text-dark text-left text-[15px]! font-medium!  max-md:text-justify mt-3 ">
                        In August 2025, Enugu State, Nigeria became more than a city. For two unforgettable weeks, it became a living experiment. A pop-up city of builders, dreamers, and innovators.
                        <br />
                        <br />
                        And then, history was sealed: the first-ever Ethereum conference in Nigeria, right here in the heart of 042, bringing the South East officially Onchain.
                    </p>
                </div>


                <div className="
                basis-1/2
max-w-[300px]
                md:max-w-[590px]
                h-[559px]
                 w-full
                 flex
                 flex-col
                      items-center
       justify-center
        gap-5
        p-4
        bg-[var(--background)]
                shadow-[0_4px_10px_#0000003D]
                 " >


                    <div className="relative w-full h-[100%]  ">
                        <Image
                            src="/banner/panel_image_1.png"
                            alt="panel image"
                            width={1000}
                            height={1000}
                            className="object-cover w-full h-full  "
                            priority
                        />
                    </div>

                    <h4 className="text-dark text-center text-xs! md:text-[16px]! flex-1 font-medium!">
                        Panel
                    </h4>
                </div>

            </div>



            <div className=" w-full flex flex-col  items-center md:items-start justify-center gap-10 md:gap-25 md:flex-row-reverse  "  >

                <div className="basis-1/2 flex flex-col items-start gap-3 max-w-[420px] " >
                    <h2 className="  text-xl! md:text-[32px]! font-bold text-start text-dark mb-4">
                        The Residency That Sparked It All
                    </h2>

                    <h4 className="text-dark font-medium text-sm! md:text-base! text-left font-sans opacity-[75%]  "  >
                        Before the lights, before the stage, there was a city within a city.</h4>

                    <p className="text-dark text-left text-[15px]! font-medium!  max-md:text-justify mt-3 ">
                        For two weeks, we hosted a builder residency where ideas collided, mentorship flourished, and friendships were forged.
                        <br />
                        <br />
                        By the time conference day arrived, the energy had already been set ablaze.
                    </p>
                </div>


                <div className="
                basis-1/2
                max-w-[680px]
                h-[481px]
                 w-full
                 flex
                 flex-col
                      items-center
       justify-center
        gap-5
        p-4
        bg-[var(--background)]
          shadow-[0_4px_10px_#0000003D]
          rotate-[-3deg]
         md:mt-[-200px]
                 " >


                    <div className="relative w-full h-[100%]  ">
                        <Image
                            src="/banner/panel_image_2.png"
                            alt="panel image"
                            width={1000}
                            height={1000}
                            className="object-cover w-full h-full  "
                            priority
                        />
                    </div>

                    <h4 className="text-dark text-center text-xs! md:text-[16px]! flex-1 font-medium!">
                        Panel
                    </h4>
                </div>

            </div>


        </section>
    )
}