import Card from "../components/Cards"
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
                    Não espere! Denuncie já e faça a diferença!
                </div>
                <div className="container-cards">
                    <Card titulo="Sintomas" img="https://th.bing.com/th/id/OIP.MNHMn1z1ADxjQVmfl_NPUQHaE8?rs=1&pid=ImgDetMain" imgAlt="dengue" descricao="A dengue geralmente causa febre alta, dores intensas no corpo (principalmente nas articulações e músculos), dor de cabeça forte, dor atrás dos olhos, náuseas, cansaço excessivo e erupções cutâneas."/>
                    <Card titulo="Transmissão" img="https://th.bing.com/th/id/OIP.MNHMn1z1ADxjQVmfl_NPUQHaE8?rs=1&pid=ImgDetMain" imgAlt="dengue" descricao="A dengue é transmitida pela picada do mosquito Aedes aegypti infectado, que costuma se alimentar durante o dia, especialmente nas primeiras horas da manhã e ao entardecer."/>
                    <Card titulo="Prevenção" img="https://th.bing.com/th/id/OIP.MNHMn1z1ADxjQVmfl_NPUQHaE8?rs=1&pid=ImgDetMain" imgAlt="dengue" descricao="A principal forma de prevenção é evitar o acúmulo de água parada, onde o mosquito pode depositar seus ovos. Isso inclui eliminar pneus, garrafas, potes e caixas d'água sem tampa, além de usar repelentes e roupas adequadas para se proteger da picada."/>
                    <Card titulo="Tratamento" img="https://th.bing.com/th/id/OIP.MNHMn1z1ADxjQVmfl_NPUQHaE8?rs=1&pid=ImgDetMain" imgAlt="dengue" descricao="Não há tratamento específico para a dengue. O tratamento é focado em aliviar os sintomas, como o uso de analgésicos e hidratação adequada. Em casos graves, a pessoa pode necessitar de internação hospitalar."/>
                    <Card titulo="Complicações" img="https://th.bing.com/th/id/OIP.MNHMn1z1ADxjQVmfl_NPUQHaE8?rs=1&pid=ImgDetMain" imgAlt="dengue" descricao="A dengue pode evoluir para formas graves, como a dengue hemorrágica ou síndrome do choque da dengue, que podem ser fatais se não tratadas rapidamente. Esses casos exigem cuidado médico intensivo."/>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Home