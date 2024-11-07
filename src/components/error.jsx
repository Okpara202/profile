import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";

function Error() {
    let error = useRouteError();
    console.log("error:", error)
  return (
    <div  className="mx-auto px-4 flex items-center justify-center h-screen w-screen bg-gradient-to-t from-rose-800  to-amber-50 flex-col text-3xl font-semibold">
    <h1>{error.message}</h1>
    <Link className="hover:text-white text-lg mt-4 italic p-2 hover:ring-1 rounded ring-white" to="/"> Back to Home</Link>
    <p className="text-lg mt-4 italic">Error due to - {error.message}</p>
</div>
  )
}

export default Error