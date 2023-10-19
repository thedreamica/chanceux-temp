import CaseTitle from "./CaseTitle"

const RolesItem = ({item}:any) => {
    return (
        <li className="font-semibold text-base my-2">{item}</li>
    )
}

const Roles = () => {
  return (
    <div className="px-6 md:px-40 pb-20">
      <CaseTitle title='Our Role' />
      <div className="grid grid-cols-3 gap-10">
      <RolesItem item='Lorem ipsum' />
      <RolesItem item='Lorem ipsum' />
      <RolesItem item='Lorem ipsum' />
      <RolesItem item='Lorem ipsum' />
      <RolesItem item='Lorem ipsum' />
      <RolesItem item='Lorem ipsum' />
      </div>
    </div>
  )
}

export default Roles
