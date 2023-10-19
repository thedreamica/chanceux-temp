const data = [
  {
    id: 1,
    img: "/static/images/landing/landing_creativeAgency.png",
    title: "creative agency",
    desc: "Full Branding, Website, App",
  },
  {
    id: 2,
    img: "/static/images/landing/landing_digitalMarketing.png",
    title: "digital marketing",
    desc: "Logo, Website And Mobile App",
  },
  {
    id: 3,
    img: "/static/images/landing/landing_digitalAgency.png",
    title: "digital agency",
    desc: "Website, UI/UX",
  },
  {
    id: 4,
    img: "/static/images/landing/landing-cs-plan-management.png",
    title: "plan management",
    desc: "Branding, Website, iOS App",
  },
  {
    id: 5,
    img: "/static/images/landing/landing-cs-social-engagement.png",
    title: "social engagement",
    desc: "Design, Development",
  },
  {
    id: 6,
    img: "/static/images/landing/landing_webApp.png",
    title: "web application",
    desc: "Logo, Website, App",
  },
];

const OurProjects = () => {
  return (
    <section className="px-6 md:px-80 py-5 md:py-10">
      <div>
        <h6 className="text-custom_orange font-bold text-xl mb-2">
          Our Project
        </h6>
        <h4 className="text-white text-4xl sm:text-5xl font-semibold capitalize w-full md:w-1/2 leading-tight mb-5">
          Some of Our Finest Work
        </h4>
      </div>
      <div>
        {/* <div className="flex gap-5 justify-end">
          <button className="text-xl font-normal hover:underline hover:underline-offset-3">
            all works
          </button>
          <button className="text-xl font-normal hover:underline hover:underline-offset-3">
            branding
          </button>
          <button className="text-xl font-normal hover:underline hover:underline-offset-3">
            mobile apps
          </button>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 my-3">
          {data.map((val) => {
            return (
              <div
                key={val.id}
                className="rounded-2xl overflow-hidden bg-[#202020]"
              >
                <img src={val.img} />
                <div className="p-5">
                  <h4 className="text-white text-2xl font-semibold capitalize mb-2">
                    {val.title}
                  </h4>
                  <p className="text-sm text-slate-200">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
