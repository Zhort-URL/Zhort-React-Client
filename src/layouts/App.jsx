import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <Sidebar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}