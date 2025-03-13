import Footer from "../components/Footer"
import Header from "../components/Header"

function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="boas-vindas">Bem-vindo ao Dengue-Off!
                    Sua denúncia é fundamental para eliminar focos do mosquito e proteger a comunidade.
                    É rápido, fácil e pode salvar vidas!
                    Denunciar agora é um ato de cuidado e responsabilidade.
                    Não espere! Denuncie já e faça a diferença!</div>
            </div>
            <Footer />
        </>
    )
}

export default Home