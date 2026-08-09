import { Outlet } from "react-router";
import Navbar from "./../components/header/Navbar"
import FooterSection from "../components/footer/footer";


export default function MainLayout() {
  return (
    <div>
        
        <Navbar></Navbar>
        

        <div>
            <Outlet/>
        </div>

        <FooterSection></FooterSection>

    </div>
  )
}
