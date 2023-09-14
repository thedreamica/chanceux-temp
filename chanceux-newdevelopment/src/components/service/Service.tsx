import Title from "../title/Title";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <section className="px-6 md:px-80 py-10 md:py-20 bg-[url('https://i.postimg.cc/ZnB6mhD1/PATTERN.png')]">
      <div className="uppercase text-center">
        <h6 className="text-custom-blue text-xl md:text-2xl font-light mb-1 md:mb-3 tracking-wide">
          WE PROVIDE
        </h6>
        <Title children="Services" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <ServiceItem
          imageUrl="https://i.postimg.cc/XYLcfPjT/3dicons.png"
          title="Application Development"
        />
        <ServiceItem
          imageUrl="https://i.postimg.cc/JzM5B8LN/3dicons-1.png"
          title="Application Managed Services"
        />
        <ServiceItem
          imageUrl="https://i.postimg.cc/B6tFcw8n/3dicons-2.png"
          title="Digital Commerce"
        />
      </div>
    </section>
  );
};

export default Service;
