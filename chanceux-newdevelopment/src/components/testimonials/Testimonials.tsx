import Title from "../title/Title";
import StarIcon from "./StarIcon";

const Item = () => {
  return (
    <div className="bg-[#232733] rounded-3xl p-6 relative">
      <img
        className="w-16 md:w-20 h-16 md:h-20 rounded-full absolute left-1/2 transform -translate-x-1/2 -top-8 md:-top-10"
        src="https://i.postimg.cc/4ydFRvy2/Fu-WYbmna-AAAIjyg-1.png"
        alt=""
      />
      <div className="flex items-center gap-3 my-3 justify-end">
        <StarIcon />
        <p className="text-lg font-semibold text-white">5.0</p>
      </div>
      <p className="text-light-grey font-medium text-sm md:text-base">
        “Lorem ipsum dolor sit ame Ut minus sint est molestiae quasi est sint
        corrupti. Sed esse velit id dolorum.”
      </p>
      <div className="flex items-center justify-center gap-3 mt-8">
        <p className="font-bold text-light-grey md:text-lg text-base">
          Lionel Messi
        </p>
        <img
        className="w-32 h-fit object-contain"
          src="https://i.postimg.cc/zf4cYHKq/580b57fcd9996e24bc43c51f-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-test-bg relative px-6 md:px-52 py-10 md:py-20">
      <div className="text-center mb-20">
        <Title children="TESTIMONIALS" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative md:absolute md:-bottom-40 md:left-1/2 md:transform md:-translate-x-1/2 w-full px-0 md:px-52">
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default Testimonials;
