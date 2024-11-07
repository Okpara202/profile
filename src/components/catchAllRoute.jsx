import { Link } from "react-router-dom"
function CatchRoute() {
    return (
        <div  className="mx-auto px-4 flex items-center justify-center h-screen w-screen bg-gradient-to-t from-rose-800  to-amber-50 flex-col text-3xl font-semibold">
            <h1>Page Not found</h1>
            <Link className="hover:text-white text-lg mt-4 italic p-2 hover:ring-1 rounded ring-white" to="/"> Return to home </Link>
        </div>
    )
}

export default CatchRoute