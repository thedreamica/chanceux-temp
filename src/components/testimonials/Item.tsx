type itemProps = {
  imgUrl: string;
  Name: string;
  desc: string;
};
import Stars from "@/icons/stars";

const Item = ({ imgUrl, Name, desc }: itemProps) => {
  return (
    <div className="rounded-2xl bg-[#232733] p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <img className="w-fit h-12 object-contain" src={imgUrl} alt="" />
        <div className="flex items-center gap-2">
          <Stars />
          <p className="text-lg font-medium ">5.0</p>
        </div>
      </div>
      <p className="text-sm sm:text-base leading-normal font-normal my-3">
        {desc}
      </p>
      <div className="flex gap-3 items-center mt-auto">
        <div className="w-10 sm:w-16 h-10 sm:h-16 rounded-full bg-cover">
          <img src="\static\images\landing\testimonial_frenkie.png" alt="" />
        </div>
        <div>
          <h6 className="font-medium text-base sm:text-lg capitalize">
            {Name}
          </h6>
          {/* <p className="text-sm font-light">Lorem ipsum dolor sit amet.</p> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
