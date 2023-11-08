"use client";
import { useState } from "react";

const data = [
  {
    id: 1,
    img: "/static/images/landing/landing_creativeAgency.png",
    title: "Application Development",
    desc: "Whether you have a new business looking to build your first app or you already have an established company looking to expand your presence, we can help you convert your ideas into the application of your dreams.",
    desc2:
      "We utilize web development libraries like React, Vue, and angular and mobile development libraries like React Native to create apps that provide a premium user experience to your target audience",
  },
  {
    id: 2,
    img: "/static/images/landing/landing_digitalMarketing.png",
    title: "App Management Service",
    desc: "We understand that applications are the moving force of a business, and it is essential to keep them updated with growing technology. With our proactive approach, your application service is in safe hands.",
    desc2:
      "We provide an application (helpdesk & technical) and operational (monitoring & toolchain) support for the apps to keep them secure and ensure the smooth running of the business.",
  },
  {
    id: 3,
    img: "/static/images/landing/landing_digitalAgency.png",
    title: "Digital Commerce Services",
    desc: "In this digital era, stepping into the world of e-commerce will do wonders for your brand. We at Chanceux specialize in providing complete digital commerce service for your business.",
    desc2:
      "Our team of experts will guide you to build your first online presence and identify which marketplace is more suitable for you. Harness the power of Shopify, Headless Commerce, and Medusa to transform your business.",
  },
  {
    id: 4,
    img: "/static/images/landing/landing-cs-plan-management.png",
    title: "Digital Experience",
    desc: "To meet customers' growing expectations, we've introduced an exceptional personalization digital experience that understands customers' behavior and needs. We leverage Artificial Intelligence & Machine Learning so that your business can stay ahead of the curve.",
    desc2:
      "We provide delivery services with a complete analysis of user behavior. From design and marketing to content creation, we leverage technological concepts to make your business shine.",
  },
  {
    id: 5,
    img: "/static/images/landing/landing-cs-social-engagement.png",
    title: "DevOps Services",
    desc: "Let's bridge the gap between the development and operational departments of your business to boost efficiency and achieve rapid delivery.",
    desc2:
      "Our trained team will provide consultancy regarding DeveOps services by building a clear and complete roadmap of DeveOps services for your business. Let's create your first infra cloud with Chanceux.",
  },
  {
    id: 6,
    img: "/static/images/landing/landing_webApp.png",
    title: "Testing & QA",
    desc: "The goal-driven team of experts is ready to dive into your project and inspect every corner of the software. We provide premium automated and manual services according to your business requirements.",
    desc2:
      "Our wide range of services includes functional, performance, security, and compatibility testing. We tailor our services according to industry standards and your software architecture. ",
  },
];

const OurProjects = () => {
  const [readMoreStates, setReadMoreStates] = useState(
    // Initialize readMoreStates for all items to false
    data.map(() => false)
  );

  // Function to toggle the state of "Read More" for a specific item
  const toggleReadMore = (index: number) => {
    const newReadMoreStates = [...readMoreStates];
    newReadMoreStates[index] = !newReadMoreStates[index];
    setReadMoreStates(newReadMoreStates);
  };

  return (
    <section className="px-6 md:px-80 py-5 md:py-10">
      <div>
        <h6 className="text-custom_orange font-bold text-xl mb-2">Solutions</h6>
        <h4 className="text-white text-3xl sm:text-4xl font-semibold capitalize w-full md:w-1/2 leading-tight mb-5">
          Lorem ipsum dolor sit
        </h4>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 my-3">
          {data.map((val, index) => {
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
                  <div>
                    <p className="text-sm sm:text-base text-slate-200 font-medium">
                      {val.desc}
                    </p>
                    {readMoreStates[index] ? (
                      <p className="text-sm sm:text-base text-slate-200 font-medium mt-5">
                        {val.desc2}
                      </p>
                    ) : null}
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="text-custom_blue underline mt-2"
                    >
                      {readMoreStates[index] ? "Read Less" : "Read More"}
                    </button>
                  </div>
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
