import { Link } from "react-router-dom";
import { useState } from "react"
import Modal from "react-modal";
import Authentication from "../Authentication";


Modal.setAppElement('#root');

function Menu() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <div className="cotainer-menu">
                {/* <Link to={'/'}>Home</Link> */}
                <Link to={'/perfil'}>Perfil</Link>
                <Link to={'/denuncia'}>Denuncias</Link>
                {/* <Link to={'/login'}>Login</Link> */}
                <button onClick={openModal} className="login-button">Login</button>
                <div className="modal">
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <button onClick={closeModal} className="close-modal">X</button>
                        <Authentication />
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default Menu