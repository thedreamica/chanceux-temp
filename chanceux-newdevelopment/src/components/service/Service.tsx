import React from "react";
import Title from "../title/Title";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <section className="px-80 py-20">
      <div className="uppercase text-center my-0">
        <h6 className="text-custom-blue text-2xl font-light mb-3 tracking-wide">WE PROVIDE</h6>
        <Title children="Services" />
      </div>
      {/* grid */}
      <div className="grid grid-cols-3 gap-7">
        {/* single Item */}
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
