import { Link } from 'react-router-dom';
import '../Styles/sign-inForm.css';

function FormSigIn() {
  return (
    <div className='card'>
        <p className='title'>Inciar sesión</p>
        <hr />
        <p className='text'>Usuario</p>
        <input className='user'></input>
        <p className='text'>Contraseña</p>
        <input className='user' type={"password"}></input>
        <a className="sign-in" href="#">Iniciar sesión</a>
    </div>
    
  );
}

export default FormSigIn;