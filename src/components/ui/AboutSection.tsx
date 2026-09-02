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
          About EthEnugu &lsquo;26
        </h2>
        <p className="text-dark text-center md:text-left text-lg mb-6 max-md:text-justify   ">
          In 2025, our community gathered in Enugu.
          <br />
          <br />
          Builders, developers, creators, and dreamers came together around
          Ethereum and proved something important: the Southeast has the talent,
          energy, and appetite to build something bigger. ETH Enugu &lsquo;25
          wasn&lsquo;t just a conference. It was the beginning of a movement.
          The conversations started there haven&lsquo;t stopped.
        </p>

        <p className="text-dark text-center md:text-left text-lg mx-auto max-md:text-justify mb-6">
          In 2026, ETH Enugu returns bigger and more connected.
        </p>

        <p className="text-dark text-center md:text-left text-lg mx-auto max-md:text-justify mb-6">
          ETH Enugu ’26 is bringing together builders, developers, creators,
          gamers, researchers, and innovators from across the Southeast for a
          week of building, learning, competing, and connecting.
        </p>

        <p className="text-dark text-center md:text-left text-lg mx-auto max-md:text-justify mb-6">
          From Build Stations across six states to gaming and esports
          tournaments, hackathons, creator challenges, exhibitions, and the main
          gathering in Enugu, this year&lsquo;s edition expands beyond a single
          conference into a regional movement.
        </p>

        <p className="text-dark text-center md:text-left text-lg mx-auto max-md:text-justify mb-6">
          The goal is simple: bring the Southeast together, put the region
          onchain, and create an environment where people can build,
          collaborate, compete, and win.
        </p>

        <p className="text-dark text-center md:text-left text-lg mx-auto max-md:text-justify mb-6">
          We brought the Southeast Onchain. Now, we&lsquo;re bringing the region
          together to build the future.
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
