const MetricItem = ({ metric, label }: any) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-white text-xl sm:text-2xl font-semibold">{metric}</p>
      <p className="text-white text-xl sm:text-2xl font-semibold" >{label}</p>
    </div>
  );
};

const Metrics = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-around gap-10 bg-[#111523] mt-20 px-44 py-8">
      <MetricItem metric={2023} label={"Founded"} />
      <MetricItem metric={"100+"} label={"Employees"} />
      <MetricItem metric={"5K+"} label={"Users"} />
      <MetricItem metric={"1000+"} label={"Active users"} />
    </section>
  );
};

export default Metrics;
