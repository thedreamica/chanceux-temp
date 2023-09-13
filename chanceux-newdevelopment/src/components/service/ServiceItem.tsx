import Image from "next/image";

export default function ServiceItem({ imageUrl, title }: any) {
  return (
    <article className="bg-[#1D233D] p-10 w-fit rounded-xl">
      <div className="relative h-200px w-auto">
        <Image
          src={imageUrl}
          alt=""
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
      <h4 className="text-2xl font-medium mb-3 text-white">{title}</h4>
      <p className="text-light-grey leading-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
        esse! Commodi minus inventore tempora aut officia ab quia
        exercitationem? Modi!
      </p>
      <button className="border-2 border-white rounded-2xl py-2 px-5 text-base md:text-xl">
        Read More
      </button>
    </article>
  );
}
