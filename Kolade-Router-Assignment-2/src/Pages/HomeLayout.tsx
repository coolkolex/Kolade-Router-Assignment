import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function HomeLayout() {
    return (
        <div id="Home-Layout">
            <div className="Home-layout-container">
                <header className="header">
                    <h5 className="first-header"><FaHome/>Home</h5>
                </header>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}