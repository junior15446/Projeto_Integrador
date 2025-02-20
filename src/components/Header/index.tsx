import Menu from "../Menu"

function Header() {
    return (
        <>
            <div className="container-header">
                <div className="menu-header">
                    <Menu />
                </div>
                <div className="logo-header">logo</div>
            </div>
        </>
    )
}

export default Header