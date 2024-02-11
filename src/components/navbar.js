import { Nav } from "react-bootstrap"
import "./navbar.css"
import CustomButton from "./button"
export default function Navbar() {
    return (
        <div>

            <nav className="bg-black text-white d-none d-md-flex  justify-content-around align-items-center gap-5 px-5">
                <div className="d-flex justify-content-start w-25">

                    <CustomButton text="Logo" />
                </div>
                <div className="d-flex justify-content-end gap-4 w-75">

                    <CustomButton text="test&nbsp;zgodności" />
                    <CustomButton text="O&nbsp;projekcie" />
                    <CustomButton text="rozszerzona&nbsp;rzeczywistość" />
                </div>
            </nav>
            <nav className="bg-black text-white d-md-none d-flex justify-content-between align-items-center gap-5 px-5">
                <CustomButton text="Logo" />
                <CustomButton text="Menu" />
            </nav>
        </div>
    )
}