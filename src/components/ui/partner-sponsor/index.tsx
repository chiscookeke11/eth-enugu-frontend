"use client";
import { sponsors } from "../eth-enugu/_data";
import { Button } from "@/components/common/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function PartnerSponsor() {
  return (
    <div className="w-full max-w-6xl max-md:px-4 mx-auto flex flex-col gap-24 py-18">
      <section className="w-full flex flex-col gap-14">
        <div className="w-full flex items-center justify-center flex-col gap-3">
          <h1 className="text-green-550 font-bold text-xl text-center mb-4">
            EthEnugu ‘25 Sponsors:
          </h1>
          <div className="w-max flex flex-wrap items-center gap-3 mx-auto">
            {sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="w-36 h-16 sm:w-48 sm:h-20 border border-dark rounded-xl overflow-hidden mx-3 "
                style={{
                  backgroundImage: `url(${sponsor.logo})`,
                  backgroundPosition: "center",
                  backgroundSize: "58%",
                  backgroundRepeat: "no-repeat",
                }}
                title={sponsor.name}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-dark rounded-3xl md:rounded-[60px] p-20 flex flex-col items-center justify-center gap-12">
        <span className="w-full mx-auto text-center text-white text-4xl md:text-6xl">
          We believe that innovation{" "}
          <span className="text-amber-500">isn’t siloed but shared</span>,
          support & join us on this Journey!
        </span>

        <Link
          href="https://drive.google.com/file/d/1LNhWImoCfSiMEQ-L5upG0WYqHTnzq7Rt/view?usp=sharing"
          target="_blank"
        >
          <Button variant="default" design="rounded" className="gap-4 button">
            Become a Sponsor
            <Icon icon={"mdi:arrow-right"} width={18} height={18} />
          </Button>
        </Link>
      </section>
    </div>
  );
}
