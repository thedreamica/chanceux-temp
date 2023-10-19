import Banner from "@/components/about/banner"
import GetInTouch from "@/components/about/getInTouch"
import Metrics from "@/components/about/metrics"
import Team from "@/components/about/team"

const Aboutus = () => {
  return <div className="bg-[#06071B]">
    <Banner />
    <Metrics/>
    <Team />
    {/* <GetInTouch /> */}
  </div>
}

export default Aboutus