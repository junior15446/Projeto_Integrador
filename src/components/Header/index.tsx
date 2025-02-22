import Menu from "../Menu"
import Dengueimg from "../../assets/mosquito.png"

function Header() {
    return (
        <>
            <div className="container-header">
                <div className="logo-header">
                    <img src={Dengueimg} alt="" className="logo-img"/>
                </div>
                <div className="menu-header">
                    <Menu />
                </div>
            </div>
        </>
    )
}

export default Header