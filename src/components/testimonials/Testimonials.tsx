import Item from "./Item";

const Testimonials = () => {
  return (
    <section className="px-6 md:px-40 py-5 md:py-20">
      <div>
        <h6 className="text-custom_orange font-bold text-lg mb-2">
          Success Stories
        </h6>
        <h4 className="text-white text-4xl sm:text-5xl font-semibold capitalize w-full mb-5">
          Lorem ipsum dolor
        </h4>
        <p className="text-md text-slate-400 leading-snug w-full md:w-1/2">
          Explore what our clients have to say about their experience with our
          service. Real Stories and Real Results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 sm:mt-10">
        <Item
          Name="Sara Desai"
          imgUrl="\static\images\landing\bg_facebook.png"
          desc="We contacted Chanceux to get a customized app developed and they provided us with complete quality service. The app was developed as we had in our mind. Further, we're currently consuming their app maintenance service so that the app stays updated."
        />
        <Item
          Name="Himanshi"
          imgUrl="\static\images\landing\bg_google.png"
          desc="Chanceux is best at understanding the business from its core. The agency gave our business an e-commerce presence and our products and business are seeing new heights. Excellent digital experience and best partner of a business."
        />
        <Item
          Name="Rahul"
          imgUrl="\static\images\landing\bg_twitter.png"
          desc="We wanted to improve our digital presence. And, the agency successfully worked on elevating our digital media and boosted our conversion rates. Their testing and QA service also worked wonders as they made our software more smooth. Highly recommend the services to other businesses."
        />
      </div>
    </section>
  );
};

export default Testimonials;
