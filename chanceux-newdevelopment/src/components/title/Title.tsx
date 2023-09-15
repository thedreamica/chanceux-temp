export default function Title({ children }: any) {
  return (
    <div data-aos="fade-up" data-aos-delay="400">
      <h3 className="text-4xl md:text-5xl font-semibold text-white uppercase mb-5 md:mb-10">
        {children}
      </h3>
    </div>
  );
}
