import Navbar from "../navbar/Navbar";
import MouseIcon from "./MouseIcon";

const Hero = () => {
  return (
    <section className="bg-hero-bgcover h-screen w-screen bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <div className="flex flex-col justify-center p-5 md:p-20 gap-7 md:gap-10 h-[70vh] md:h-2/3">
        <h1 className="uppercase text-6xl md:text-8xl font-semibold tracking-[.2em]">
          CHANCE <br /> ux
        </h1>
        <p className="text-base md:text-lg leading-normal w-full md:w-1/2 text-light-grey font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          quaerat fugit ipsa eius, sed similique et nesciunt eos! Nihil in
          distinctio veritatis ea. Illum corporis enim, nesciunt aliquam qui
          quasi.t fugit ipsa eius, sed similique et nesciunt eos! Nihil in
          distinctio veritatis ea. Illum corporis enim
        </p>
      </div>
      <button className="hidden md:flex justify-center items-end w-full pt-20">
        <MouseIcon />
      </button>
    </section>
  );
};

export default Hero;
