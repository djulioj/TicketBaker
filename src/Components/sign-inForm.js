import { Link } from 'react-router-dom';
import '../Styles/signinForm.css';

function FormSigIn() {
  return (
    <div className='card'>
        <p className='title'>Inciar sesión</p>
        <hr />
        <p className='text'>Usuario</p>
        <input className='user'></input>
        <p className='text'>Contraseña</p>
        <input className='user' type={"password"}></input>
        <a className="sign-in2" href="#">Iniciar sesión</a>
        <a className="log-in2" href="#">Registrarse</a>
    </div>
    
  );
}

export default FormSigIn;