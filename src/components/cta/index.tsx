import Input from "../common/input";

const CTA = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full px-6 sm:px-40 py-10 gap-10">
      <div className="w-full sm:w-1/3">
        <p className="text-white text-3xl sm:text-4xl font-semibold mb-5 sm:mb-10 leading-relaxed">
          Request Your Free Quote Now
        </p>
        <form className="flex flex-col gap-8">
          <Input
            wrapperProps={{}}
            inputProps={{
              type: "text",
              placeholder: "Enter Name...",
            }}
          />
          <Input
            inputProps={{
              type: "email",
              placeholder: "Enter Email...",
            }}
          />
          <Input
            inputProps={{
              type: "text",
              placeholder: "Enter Phone No...",
            }}
          />
          <Input
            inputProps={{
              type: "submit",
              className: "w-1/3 text-slate-700 font-bold",
            }}
          />
        </form>
      </div>
      <img
        className="w-full h-full sm:w-1/2 sm:h-1/2 object-cover"
        src="static\images\landing\cta_bg.png"
      />
    </div>
  );
};

export default CTA;
