import Item from "./Item";

const Testimonials = () => {
  return (
    <section className="px-6 md:px-40 py-5 md:py-20">
      <div>
        <h6 className="text-custom_orange font-bold text-lg mb-2">
          Testimonials
        </h6>
        <h4 className="text-white text-4xl sm:text-5xl font-semibold capitalize w-full mb-5">
          From Getting Started
        </h4>
        <p className="text-md text-slate-400 leading-snug w-full md:w-1/2">
          Est modi similique et cumque quos ut excepturi Quis. In incidunt
          dolorum est dolore distinctio non consectetur rerum. Et voluptatum
          enim eum officiis fuga aut pariatur.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 sm:mt-10">
        <Item imgUrl="\static\images\landing\bg_facebook.png" />
        <Item imgUrl="\static\images\landing\bg_google.png" />
        <Item imgUrl="\static\images\landing\bg_twitter.png" />
      </div>
    </section>
  );
};

export default Testimonials;
