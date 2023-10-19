import X from "@/icons/x"
import RenderIcon from "../common/renderIcon"
import Facebook from "@/icons/facebook"
import Twitter from "@/icons/twitter"
import LinkedIn from "@/icons/linkedIn"

const EmployeeCard = ({name, position}: any) => {
    return <div className="flex flex-col bg-[#232733] rounded-2xl w-[200px] h-[250px] relative pt-[120px] px-4  pb-4">
        <div className="rounded-full border-slate-950 w-[150px] sm:w-[200px] absolute right-[80px] sm:right-[40px] sm:-top-[100px] -top-[60px]">
            <img src="/static/images/about/emp.png" />
        </div>
        <p className="text-white text-xl font-semibold">
            {name}
        </p>
        <p className="text-white text-base">
            {position}
        </p>
        <div className="flex justify-around mt-auto">
           <LinkedIn className="fill-white h-6"/> 
           <X className="fill-white h-6" />
           <Facebook className="fill-white h-6"/>
        </div>
    </div>
}

const Team = () => {
    return <section className="flex flex-col items-center mt-10 sm:mt-20 px-6 sm:px-44">
        <p className="text-white font-bold text-3xl mb-[100px] sm:mb-[170px]">Meet Our Team</p>
        <div className="flex flex-col sm:flex-row items-center gap-20 justify-between w-full">
            <EmployeeCard name="Kishore" position="ceo"/>
            <EmployeeCard name="Kishore" position="ceo"/>
            <EmployeeCard name="Kishore" position="ceo"/>
            <EmployeeCard name="Kishore" position="ceo"/>
        </div>
    </section>
}

export default Team