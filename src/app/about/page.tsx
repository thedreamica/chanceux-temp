import Banner from "@/components/about/banner"
import GetInTouch from "@/components/about/getInTouch"
import Metrics from "@/components/about/metrics"
import Team from "@/components/about/team"
import Navbar from "@/components/navbar/Navbar"

const Aboutus = () => {
  return <div className="bg-[#06071B] overflow-hidden">
    <Navbar />
    <Banner />
    <Metrics/>
    <Team />
    <GetInTouch />
  </div>
}

export default Aboutus