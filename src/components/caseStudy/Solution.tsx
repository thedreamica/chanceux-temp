import CaseTitle from "./CaseTitle";

const SolItem = ({ item }: { item: string }) => {
  return <li className="font-semibold text-base my-2">{item}</li>;
};

const Solution = () => {
  return (
    <div className="px-6 md:px-40 py-20">
      {/* problem section */}
      <div>
        <CaseTitle title="Problem Statement" />
        <p className="font-medium text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
      </div>
      {/* solution section */}
      <div className="mt-20">
        <CaseTitle title="The Solution" />
        <div>
          <SolItem item="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
          <SolItem item="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
          <SolItem item="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
          <SolItem item="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
          <SolItem item="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
          <SolItem item="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
          <SolItem item="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
