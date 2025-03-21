
import { useState } from "react"

function RegistrationForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [confirSenha, setConfirSenha] = useState('')

  function handleSubmit() {
    fetch('http://192.168.1.3:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: nome,
        email: 'email@email.com',
        celular: '1234567890',
        senha: 'senha',
        confirSenha: 'confirSenha'
      })
    })
  }

  return (
    <div className="registro">
      <label htmlFor="nome">Nome</label>
      <input 
        type="text" 
        name="nome" 
        id="nome" 
        placeholder="Digite seu nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
      <label htmlFor="celular">Celular</label>
      <input type="tel" name="celular" id="celular" placeholder="Informe seu numero de celular" />
      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" placeholder="Crie uma senha" />
      <label htmlFor="confirSenha">Confirme sua senha</label>
      <input type="password" name="confirSenha" id="confirSenha" placeholder="Confirme a senha" />

      <button onClick={handleSubmit}>Criar Conta</button>
    </div>
  )
}

export default RegistrationForm
 