import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Login() {
    return (
        <>
            <Header />
            <div className="container">
               <h1>Página de Login</h1>
               <Link to={'/registro'} className="botao-registro">Registre-se aqui</Link>
            </div>
            <Footer />
        </>
    )
}

export default Login