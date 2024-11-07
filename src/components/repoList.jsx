import { NavLink } from "react-router-dom"

function Repo({repo}) {
    console.log(repo)
  return (
    <div className=" p-10 rounded-2xl mt-10 flex flex-col space-y-3 shadow-2xl shadow-gray-700">
        <NavLink className="hover:text-white font-bold" to={`${repo.clone_url}`}>{repo.full_name}</NavLink>
        <h1>{repo.name}</h1>
        <h1>{repo.description}</h1>
    </div>
  )
}

export default Repo;