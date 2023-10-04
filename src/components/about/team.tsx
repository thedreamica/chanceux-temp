
const EmployeeCard = ({name, position, brief}) => {
    return <div className="flex flex-col bg-[#232733] rounded-2xl w-[200px] h-[250px] relative">
        <div className="rounded-full border-slate-950 w-[200px] absolute right-[40px] -translate-y-[50%]">
            <img src="/static/images/about/emp.png" />
        </div>
        <p>
            {name}
        </p>
        <p>
            {position}
        </p>
        <p>
            {brief}
        </p>
    </div>
}

const Team = () => {
    return <section className="flex flex-col items-center mt-20 px-44">
        <p className="text-white font-bold text-3xl mb-[170px]">Meet Our Team</p>
        <div className="flex justify-between w-full">
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
        </div>
    </section>
}

export default Team