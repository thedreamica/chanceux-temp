const Tile = () => {
  return (
    <div className="h-[400px] w-[240px] relative rounded-lg overflow-hidden">
      <img src="https://placehold.co/240x400/darkcyan/darkcyan" />
      <div className="flex flex-col bg-gradient-to-t from-slate-900 to-transparent absolute top-0 left-0 h-full p-4">
        <p className="text-white text-lg font-semibold mt-auto">
          Nisi dolor do dolore adipisicing ex non sit
        </p>
        <p className="text-white mt-20 text-sm font-semibold">
          Laboris officia tempor do velit anim in pariatur laborum officia. Sunt
          dolor id quis mollit irure ex est Lorem nisi et non. Cupidatat in ut
          sint nisi adipisicing ad culpa.
        </p>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <section className="flex flex-col w-full h-full items-center px-6 sm:px-44 pt-16 sm:pt-32 overflow-hidden">
      <p className="text-white text-4xl sm:text-5xl font-medium text-center">
        About us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 items-center">
        <img
          className="w-auto h-auto object-cover"
          src="static\images\about\about_bg.png"
          alt="about_bg"
        />
        <div>
          <p className="text-white text-3xl sm:text-4xl font-medium mb-4 sm:mb-8">
            We Are Building An Transparent Digital Economy
          </p>
          <p className="text-white text-lg sm:text-xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* <div className="flex gap-12 [&>*:nth-child(even)]:mt-14">
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div> */}
    </section>
  );
};

export default Banner;
