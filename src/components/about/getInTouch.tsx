import RenderIcon from "../common/renderIcon";

const ContactItem = ({ type, title, content }: any) => {
  return (
    <div className="flex flex-col items-center gap-4 w-[300px]">
      <RenderIcon className="h-11 fill-white" type={type} />
      <p className="text-white text-lg">{title}</p>
      <p className="text-white font-bold text-lg text-center">{content}</p>
    </div>
  );
};

const GetInTouch = () => {
  return (
    <section className="flex flex-col items-center mt-20 px-6 sm:px-44">
      <p className="text-white font-bold text-3xl mb-10 sm:mb-[70px]">
        Get in Touch with us
      </p>
      <div className="flex flex-col gap-10 sm:flex-row justify-between w-full">
        <ContactItem type="MAIL" title="Email" content="info@chanceuxinc.com" />
        <ContactItem
          type="LOCATION"
          title="Location"
          content="Plot 0209, mango hills, texas 020995, USA"
        />
        <ContactItem type="PHONE" title="Phone" content="+91 8686868686" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-32 items-center mt-[70px]">
        <form className="flex flex-col w-full gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-white text-lg">Name</label>
            <input className="rounded-lg p-2 sm:p-4 outline-none border-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-lg">Email</label>
            <input className="rounded-lg p-2 sm:p-4 outline-none border-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-lg">Your message</label>
            <textarea className="rounded-lg p-2 sm:p-4 outline-none border-none h-36" />
          </div>
          <input type="submit" className="bg-[#00898a] p-2 sm:p-4 rounded-lg w-1/3 font-medium mx-auto sm:mx-0" />
        </form>
        <div className="w-full h-auto sm:w-[80%] object-cover">
          <img src="/static/images/about/form.png" />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
