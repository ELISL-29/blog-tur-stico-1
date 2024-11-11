import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const submit = async (event) => {
    event.preventDefault()
    const correo = event.target.elements.correo.value
    const pass = event.target.elements.password.value

    const response = await fetch('https://673271fc2a1b1a4ae10ff8cd.mockapi.io/user')
    const users = await response.json()
    console.log(users)

    const user = users.find(user => user.email === correo && user.password === pass)
    
    if (user) {
      navigate('/results')
    } else {
      setError(true)
    }
  }

  return (
    <main className="login">
      <form onSubmit={submit}>
        <h1>Inicia sesión</h1>
        {error ? 'Las credenciales son incorrectas':null}
        <fieldset>
          <label>
            <span>Correo</span>
            <input name="correo" type="email" placeholder="johndoe@email.com" required/>
            </label>
          <label>
            <span>Contraseña</span>
            <input name="password" type="password" placeholder="***********" required/>
            </label>
        </fieldset>
        <button>Iniciar Sesión</button>
        <button type="button" onClick={() => navigate('/register')}>Registrarse</button>
      </form>
    </main>
  )
}