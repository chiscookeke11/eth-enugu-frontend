import Image from "next/image";

const AboutSection = () => {


  const times = [
    {
      title: "4 Days",
      description: "Regional Blockchain & Games Week",
      icon: "icon1",
    },
    {
      title: "6 States",
      description: "Build Stations",
      icon: "icon2",
    },
    {
      title: "4+ Tournaments",
      description: "Gaming & Esports",
      icon: "icon3",
    },
    {
      title: "Enugu",
      description: "Main Event",
      icon: "icon4",
    },
  ];

  return (
    <>
      <div className=" m-auto md:px-8 md:py-10 py-9 w-11/12">
        <h2 className="text-2xl font-bold text-center text-green-550 mb-4">
          EthEnugu &lsquo;25: A First for Nigeria. <br /> A First for the South East.
        </h2>
        <p className="text-dark text-center md:text-left text-lg mb-6 max-md:text-justify">
          In August 2025, Enugu State, Nigeria became more than a city. For two unforgettable weeks,
          it became a living experiment; a pop-up city of builders, dreamers, creators, and innovators.

          And then, history was sealed: the first-ever Ethereum conference in Nigeria,
          right here in the heart of 042, bringing the Southeast officially Onchain.
        </p>
        <p className="text-dark text-center md:text-left text-lg mb-6 max-md:text-justify">
          In 2026, the story continues.
        </p>
        <p className="text-dark text-center md:text-left text-lg mx-auto max-md:text-justify mb-6">
          This year, Enugu becomes the beating heart of Southeast Blockchain & Games Week, connecting blockchain, gaming, builders, creators, and the wider digital economy.
          From Build Stations across the region to esports, hackathons, creator challenges, exhibitions, and a major gathering in Enugu, the movement is evolving into a regional network of participation.
        </p>

        <p className="text-dark text-center md:text-left text-lg  max-md:text-justify">
          We brought the Southeast Onchain. Now, we bring the region together to build, compete, create, connect, and win.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 space-y-4 md:space-y-0 mt-20 items-center justify-center text-dark text-center">
          {times.map((item, index) => (
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
    </>
  );
};

export default AboutSection;
