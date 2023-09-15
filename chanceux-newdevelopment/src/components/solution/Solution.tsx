import Image from "next/image";
import Title from "../title/Title";

type SolColor = {
  [key: string]: string;
};

const SingleItem = ({ text, para, imageUrl, bgProp }: any) => {
  const solColor: SolColor = {
    solOne: "bg-solColor_1",
    solTwo: "bg-solColor_2",
    solThree: "bg-solColor_3",
    solFour: "bg-solColor_4",
    solFive: "bg-solColor_5",
    solLast: "bg-solColor_6",
  };
  const bgColor = solColor[bgProp];

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="600"
      className={`${bgColor} rounded-2xl pt-5 md:pt-8 px-5 md:px-7 max-h-fit flex flex-col justify-between`}
    >
      <h4 className="text-white text-2xl md:text-3xl font-semibold mb-3">
        {text}
      </h4>
      <p className="text-light-grey text-sm md:text-base font-medium">{para}</p>
      <div className="relative h-[200px] md:h-[250px] w-full">
        <Image
          src={imageUrl}
          alt={text}
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

const Solution = () => {
  return (
    <section className="px-6 md:px-80 py-10 md:py-20">
      <div className="text-center">
        <Title children="SOLUTIONS" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 my-8">
        <SingleItem
          bgProp="solOne"
          imageUrl="https://i.postimg.cc/QtxgMdbz/Group-2.png"
          text="Application Development"
          para="Lorem ipsum dolor sit amet. Ea sint odio ad perspiciatis dolorum qui autem facilis."
        />
        <SingleItem
          bgProp="solTwo"
          imageUrl="https://i.postimg.cc/nrjt26nY/Group-1-1.png"
          text="Digital commerce"
          para="Lorem ipsum dolor sit amet. Ea sint odio ad perspiciatis dolorum qui autem facilis."
        />
        <SingleItem
          bgProp="solThree"
          imageUrl="https://i.postimg.cc/FRzQ99XF/0000.png"
          text="Accelerated Quality And
Test Engineering"
          para="Lorem ipsum dolor sit amet. Ea sint odio ad perspiciatis dolorum qui autem facilis."
        />
        <SingleItem
          bgProp="solFour"
          imageUrl="https://i.postimg.cc/525Jg7mJ/Image.png"
          text="Application Managed Services"
          para="Lorem ipsum dolor sit amet. Ea sint odio ad perspiciatis dolorum qui autem facilis."
        />
        <SingleItem
          bgProp="solFive"
          imageUrl="https://i.postimg.cc/KY3gzgS4/Business-0003.png"
          text="Development And
Operations"
          para="Lorem ipsum dolor sit amet. Ea sint odio ad perspiciatis dolorum qui autem facilis."
        />
        <SingleItem
          bgProp="solLast"
          imageUrl="https://i.postimg.cc/qgVfXyhg/0005.png"
          text="Search engine optimization"
          para="Lorem ipsum dolor sit amet. Ea sint odio ad perspiciatis dolorum qui autem facilis."
        />
      </div>
    </section>
  );
};

export default Solution;
