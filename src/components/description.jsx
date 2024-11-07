import { useLoaderData, defer, Await } from "react-router-dom";
import getProfile from "./api/api";
import { Suspense, useEffect, useState } from "react";
import Repo from "./repoList";
import Spinner from "./spinner";

export async function loader({ request }) {
    let user = new URL(request.url).searchParams.get("search");
    return defer({ data: getProfile(user) })
}

function Description() {

    let data = useLoaderData();



    function fetchData(data) {

        let [repo, setRepo] = useState([])

        useEffect(() => {
            fetch(`https://api.github.com/users/${data.login}/repos`).then(res => res.json()).then(json => setRepo(json))
        }, []);

        let repos = repo.map(repo => <Repo key={repo.id} repo={repo} />)
        return <>
            <div className=" container pt-10 mx-auto px-4 flex flex-col min-h-screen min-w-full text-gray-900 bg-gradient-to-t from-rose-800  to-amber-50 md:flex-row space-x-5 md:space-x-10">
                <div className="flex flex-col space-y-2 md:w-1/2">

                    <img className="mb-5 aspect-square text-center" src={data.avatar_url} alt="" />
                    <h2>Name : {data.name}</h2>
                    <h2>Nick name: {data.login} </h2>
                    <h2>Bio : {data.bio}</h2>
                    <h2>Location : {data.location}</h2>
                    <h2>Number of public repositories: {data.public_repos}</h2>
                </div>

                <div className="flex flex-col md:w-1/2">
                    {repos}
                </div>


            </div>
        </>
    }


    return (
        <Suspense fallback={<Spinner />}>
            <Await resolve={data.data}>
                {fetchData}
            </Await>
        </Suspense>
    )
}

export default Description