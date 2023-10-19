import CaseTitle from "./CaseTitle";

const ProjDuration = () => {
  return (
    <div className="px-6 grid grid-cols-1 md:grid-cols-2 md:px-40 pb-20 gap-20">
      {/* project duration */}
      <div>
        <CaseTitle title="Project Duration" />
        <div className="flex justify-between gap-32 w-fit text-center">
            <div>
                <h4 className="font-bold text-6xl mb-2">14</h4>
                <p className="capitalize text-lg font-medium">weeks</p>
            </div>
            <div>
                <h4 className="font-bold text-6xl mb-2">10+</h4>
                <p className="capitalize text-lg font-medium">screens</p>
            </div>
        </div>
      </div>
      {/* tools used */}
      <div>
        <CaseTitle title="Tools Used" />
        <div className="grid grid-cols-3 gap-20 w-fit">
            <img className="w-20 h-20 object-cover" src="https://i.postimg.cc/W44cTRy9/React-Logo-PNG-HD.png" alt="" />
            <img className="w-20 h-20 object-cover" src="https://i.postimg.cc/W44cTRy9/React-Logo-PNG-HD.png" alt="" />
            <img className="w-20 h-20 object-cover" src="https://i.postimg.cc/W44cTRy9/React-Logo-PNG-HD.png" alt="" />

        </div>
      </div>
    </div>
  );
};

export default ProjDuration;
