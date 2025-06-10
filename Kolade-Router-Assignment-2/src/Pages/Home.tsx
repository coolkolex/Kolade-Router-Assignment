import { useState } from "react";
import { Link } from "react-router-dom";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";


export default function Home() {
    const [query, setQuery] = useState("")

    return (
        <div className="home">
            <h1 className="home-header">
                <RiGraduationCapFill/>Student Portal</h1>
            <div className="link-container">
                <Link to="/students">
                    <GiBookshelf/>View all students
                </Link>
                <div className="input-box">
                    <input value={query} onChange={(e) => setQuery(e.target.value)} />
                    <Link to={{ pathname: "/search", search: `?query=${query}` }}><IoSearch/>Search</Link>
                </div>
            </div>
        </div>
    )
}