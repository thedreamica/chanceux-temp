import CaseTitle from "./CaseTitle";
import EmpathizeIcon from "./EmpathizeIcon";

const Process = () => {
  return (
    <div className="px-6 md:px-40 pb-20">
      <CaseTitle title="Design Process" />
      <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
        <EmpathizeIcon />
        <EmpathizeIcon />
        <EmpathizeIcon />
        <EmpathizeIcon />
        <EmpathizeIcon />
      </div>
    </div>
  );
};

export default Process;
