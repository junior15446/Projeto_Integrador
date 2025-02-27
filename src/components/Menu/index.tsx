import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <div className="cotainer-menu">
                {/* <Link to={'/'}>Home</Link> */}
                <Link to={'/perfil'}>Perfil</Link>
                <Link to={'/denuncia'}>Denuncias</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </>
    )
}

export default Menu