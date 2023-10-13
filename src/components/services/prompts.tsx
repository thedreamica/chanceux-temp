const Prompts = () => {
  return (
    <div className="h-screen w-screen  relative">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <p className="sm:text-[180px] text-3xl font-extrabold text-white z-10">
          Digital Marketing
        </p>
        <img
          className="absolute top-[10%] left-0 w-[100px] sm:w-[250px]"
          src="/static/images/services/digitalMarketing/dm-ICON-1.png"
        />
        <img
          className="absolute top-[25%] left-[40%] w-[210px] sm:w-[530px]"
          src="/static/images/services/digitalMarketing/dm-ICON-2.png"
        />
        <img
          className="absolute top-0 right-0 w-[160px] sm:w-[400px]"
          src="/static/images/services/digitalMarketing/dm-ICON-3.png"
        />
        <img
          className="absolute bottom-0 right-0 w-[80px] sm:w-[200px] z-20"
          src="/static/images/services/digitalMarketing/dm-ICON-4.png"
        />
        <img
          className="absolute -bottom-10 left-0 w-[120px] sm:w-[300px]"
          src="/static/images/services/digitalMarketing/dm-ICON-5.png"
        />
      </div>
    </div>
  );
};

export default Prompts;
