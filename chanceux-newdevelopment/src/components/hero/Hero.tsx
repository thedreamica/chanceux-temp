import Navbar from "../navbar/Navbar";
import MouseIcon from "./MouseIcon";

const Hero = () => {
  return (
    <section className="bg-hero-bgcover max-h-screen w-screen bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <div
        className="flex flex-col justify-center p-5 md:p-20 gap-7 md:gap-10 h-screen md:h-[90vh]"
      >
        <h1 data-aos="fade-up" data-aos-delay="200" className="uppercase text-6xl md:text-8xl font-semibold tracking-[.2em]">
          CHANCE <br /> ux
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className="text-base md:text-lg leading-normal w-full md:w-1/2 text-light-grey font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          quaerat fugit ipsa eius, sed similique et nesciunt eos! Nihil in
          distinctio veritatis ea. Illum corporis enim, nesciunt aliquam qui
          quasi.t fugit ipsa eius, sed similique et nesciunt eos! Nihil in
          distinctio veritatis ea. Illum corporis enim
        </p>
      </div>
      <button className="hidden md:flex justify-center items-end w-full pb-20 ">
        <MouseIcon />
      </button>
    </section>
  );
};

export default Hero;
