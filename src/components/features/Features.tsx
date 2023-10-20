const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-20 px-6 sm:px-52 py-20">
      <div className="w-full">
        <h6 className="text-orange-500 font-bold text-lg mb-2">
          Featured Case Study
        </h6>
        <h4 className="text-white text-3xl font-semibold capitalize w-full md:w-3/4 leading-snug mb-5">
          Innovate, Create, Excel
        </h4>
        <p className="text-base leading-6 text-slate-100 mb-4">
          At Chanceux, we're not only an agency, we're a team of your project
          and partner in your progress. We commit to excellence, innovation, and
          optimum satisfaction to convert your vision into a reality.
        </p>
        <p className="text-base leading-6 text-slate-100 mb-4">
          We work in complete transparency to build the trust of our clients.
          With expertise in multiple industries, we're here to assist you in
          navigating digital service with confidence. Let's kickstart this
          journey together.
        </p>
        <div className="flex flex-col md:flex-row justify-between md:items-center w-full sm:w-full mt-8 sm:mt-6 gap-5">
          <button className="text-base md:text-lg font-semibold capitalize rounded-3xl bg-[#7FD2D3] h-fit w-fit py-3 px-6">
            <a href="/caseStudy">read case study</a>
          </button>
          {/* <div className="flex md:flex-row flex-col gap-5">
            <div className="w-1/2">
              <p className="text-orange-500 text-4xl font-bold mb-3">0%</p>
              <p className="text-white">Lorem ipsum dolor sit.</p>
            </div>
            <div className="w-1/2">
              <p className="text-orange-500 text-4xl font-bold mb-3">0K</p>
              <p className="text-white">Lorem ipsum dolor sit.</p>
            </div>
          </div> */}
        </div>
      </div>
      <img
        className="rounded-2xl"
        src="/static/images/landing/blog_casestudy.png"
      />
    </section>
  );
};

export default Features;
