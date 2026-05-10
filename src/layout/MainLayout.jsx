import { Outlet } from "react-router";
import Navbar from "./../components/header/Navbar"


export default function MainLayout() {
  return (
    <div>
        
        <Navbar></Navbar>
        

        <div>
            <Outlet/>
        </div>

    </div>
  )
}
