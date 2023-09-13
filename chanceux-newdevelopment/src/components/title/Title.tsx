export default function Title({ children }: any) {
  return (
    <>
      <h3 className="text-4xl md:text-5xl font-semibold text-white uppercase mb-10">
        {children}
      </h3>
    </>
  );
}
