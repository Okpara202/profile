import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


function Home() {

    let [form, setForm] = useState({
        search: ""
    })

    const handleForm = (e) => {
        let { name, type, checked, value } = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }

        })
    }

    return (
        <div className="mx-auto px-4 flex items-center justify-center h-screen w-screen bg-gradient-to-t from-rose-800  to-amber-50">
            <div className="flex items-center shadow-lg shadow-black outline-0 px-4 text-lg py-2 rounded-lg font-mono bg-black/5 w-3/4 max-w-[600px]">
                <input type="search" name="search" value={form.search} onChange={handleForm} placeholder="Enter Your Github username" className="flex-1 bg-transparent px-4 py-4 text-lg font-[cursive] border-0 placeholder:text-black outline-0 font-normal" />
                <div>
                    <Link to={`description?search=${form.search}`}>
                        <FaSearch />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home