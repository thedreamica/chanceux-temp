import Title from "../title/Title";
import ServiceItem from "./ServiceItem";

// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    slidesToScroll: 1,
  };
  return (
    <section className="px-6 md:px-80 py-10 md:py-20 bg-[url('https://i.postimg.cc/ZnB6mhD1/PATTERN.png')]">
      <div className="uppercase text-center">
        <h6 data-aos="fade-up" data-aos-delay="200" className="text-custom-blue text-xl md:text-2xl font-light mb-1 md:mb-3 tracking-wide">
          WE PROVIDE
        </h6>
        <Title children="Services" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {/* <Slider {...settings}> */}
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
      {/* </Slider> */}
      </div>
    </section>
  );
};

export default Service;
