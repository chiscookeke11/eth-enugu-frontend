import Carousel from "./Carousel";

export default function GallerySection() {
  return (
    <section className=" py-20  flex flex-col text-center gap-5 items-center bg-[#F4F4F4]  ">
      <div className=" p-2 ">
        <h1 className=" text-[var(--color-amber-750)] ">
          Moments That Defined ETH Enugu ‘25
        </h1>
        <h5 className="text-[var(--color-dark)] max-w-[600px] ">
          Every smile, every spark, every handshake was captured.
        </h5>
      </div>
      <Carousel />
    </section>
  );
}
