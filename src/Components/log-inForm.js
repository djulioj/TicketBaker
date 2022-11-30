import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/sign-inForm.css';

function FormSigIn() {
  return (
    <div className='card'>
        <p className='title'>Crear Cuenta</p>
        <hr />
        <p className='text'>Usuario</p>
        <input className='user'></input>
        <p className='text'>Contraseña</p>
        <input className='user' type={"password"}></input>
        <Form.Check type="checkbox" label="Vendedor" className='check' />
        <a className="sign-in" href="#">Iniciar sesión</a>
    </div>
    
  );
}

export default FormSigIn;