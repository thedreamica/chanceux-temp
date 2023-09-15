import FacebookIcon from "./FacebookIcon";
import GoogleIcon from "./GoogleIcon";
import InstagramIcon from "./InstagramIcon";
import WhatsappIcon from "./WhatsappIcon";

const Footer = () => {
  return (
    <footer className="bg-[url('https://i.postimg.cc/ZnB6mhD1/PATTERN.png')] bg-center bg-contain px-6 md:px-80 py-10 md:py-20 h-[70vh] md:h-screen w-screen flex flex-col justify-center text-center">
      <div className="mt-28 md:mt-60">
        <h6 data-aos="fade-up" data-aos-delay="200" className="text-base md:text-xl font-medium text-custom_orange">
          Let&apos;s Work Together
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-3xl md:text-5xl text-white font-semibold my-5">
          Do You Need A Successful Project?
        </h2>
        <button data-aos="fade-up" data-aos-delay="400" className="bg-custom_green px-6 py-3 rounded-3xl text-base md:text-xl font-medium">
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-5 place-items-center items-end h-screen">
        <WhatsappIcon />
        <GoogleIcon />
        <InstagramIcon />
        <FacebookIcon />
        <WhatsappIcon />
      </div>
    </footer>
  );
};

export default Footer;
