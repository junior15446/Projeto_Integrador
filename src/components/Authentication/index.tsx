import { Link } from "react-router-dom"

function Authentication() {
    return (
        <>
            <div className="authentication">
                <label>Email</label>
                <input type="email" name="email" id="email" />
                <label>Senha</label>
                <input type="password" name="password" id="password" />
                <button>Entrar</button>
                <Link to={'/registro'} className="botao-registro">Não tem conta ainda? <br />Registre-se aqui</Link>
                <br />
                <br />
                Esqueci minha senha
            </div>
        </>
    )
}

export default Authentication