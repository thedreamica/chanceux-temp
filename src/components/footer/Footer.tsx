import Facebook from "@/icons/facebook";
import LinkedIn from "@/icons/linkedIn";
import X from "@/icons/x";

const Footer = () => {
  return (
    <section className="px-6 pt-6 pb-6 sm:pb-10 md:px-40 md:pt-10 relative">
      <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" src="/static/images/landing/footer_bg.png" alt="" />
      <div className="flex justify-center items-center flex-col h-auto md:h-[40vh] gap-6 z-10 relative">
        <h1 className="text-white text-2xl sm:text-4xl font-bold capitalize text-center sm:w-1/2 w-full leading-normal"> 
          Get Ready To Leverage Our Digital Services
        </h1>
        <button className="text-base sm:text-lg font-semibold capitalize rounded-3xl bg-custom_blue h-fit w-fit py-2 sm:py-3 px-6 sm:px-10">
          Start Now
        </button>
      </div>
      <div className="flex justify-between mt-20 sm:mt-10">
        <LinkedIn className="fill-white h-6" />
        <X className="fill-white h-6" />
        <Facebook className="fill-white h-6" />
        <LinkedIn className="fill-white h-6" />
        <Facebook className="fill-white h-6" />
      </div>
    </section>
  );
};

export default Footer;
