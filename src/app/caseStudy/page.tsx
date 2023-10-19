import Navbar from "@/components/navbar/Navbar"
import CaseBanner from "@/components/caseStudy/CaseBanner"
import Solution from "@/components/caseStudy/Solution"
import Roles from "@/components/caseStudy/Roles"
import ProjDuration from "@/components/caseStudy/ProjDuration"
import Process from "@/components/caseStudy/Process"


const CaseStudy = () => {
  return (
    <div className='bg-[#06071B] text-white overflow-hidden'>
      <Navbar />
      <CaseBanner />
      <Solution />
      <Roles />
      <ProjDuration />
      <Process />
    </div>
  )
}

export default CaseStudy
