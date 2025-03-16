function RegistrationForm() {
  return (
    <div className="registro">
      <label htmlFor="">Nome</label>
      <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" />
      <label htmlFor="">Email</label>
      <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
      <label htmlFor="">Celular</label>
      <input type="tel" name="celular" id="celular" placeholder="Informe seu numero de celular" />
      <label htmlFor="">Senha</label>
      <input type="password" name="senha" id="senha" placeholder="Crie uma senha" />
      <label htmlFor="">Confirme sua senha</label>
      <input type="password" name="confirSenha" id="confirSenha" placeholder="Confirme a senha" />

      <input type="submit" value="Criar Conta" id="btn-registro" />
    </div>
  )
}

export default RegistrationForm

