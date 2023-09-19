import Image from "next/image";

export default function ServiceItem({ imageUrl, title }: any) {
  return (
    <article className="bg-[#1D233D] py-5 md:py-10 px-6 w-fit rounded-xl">
      <div className="relative h-[180px] md:h-[250px] w-full mb-3">
        <Image
          src={imageUrl}
          alt=""
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
      <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white text-center">
        {title}
      </h4>
      <p className="text-light-grey text-sm md:text-base leading-normal mb-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
        esse! Commodi minus inventore tempora aut officia ab quia
        exercitationem? Modi!
      </p>
      <button className="border-2 border-white rounded-2xl py-2 px-5 text-base md:text-xl flex mx-auto text-white">
        Read More
      </button>
    </article>
  );
}
