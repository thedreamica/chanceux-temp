import Navbar from "@/components/navbar/Navbar";

const services = () => {
  return (
    <section>
      <Navbar />
      <div className="bg-[url('https://i.postimg.cc/0N2PX7JV/Group.png')] h-screen w-screen bg-right bg-contain flex flex-col justify-center gap-5 px-32">
        <h5 className="text-custom_green tracking-[.5em]">BUILD YOUR OWN</h5>
        <h1 className="text-6xl font-semibold text-white w-full md:w-1/2">
          We're The Ones That Your Whole Business Will Love
        </h1>
        <p className="text-light-grey font-medium w-full md:w-[40%] leading-relaxed">
          At Equpex, we deliver an amazing product that you won't get elsewhere.
          Forward-driven and passionate about every project.
        </p>
        <button className="bg-custom_green font-semibold px-10 py-3 rounded-3xl w-fit text-xl">
          Try Now
        </button>
      </div>
    </section>
  );
};

export default services;
