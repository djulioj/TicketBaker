import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import '../Styles/signinForm.css';

function FormSigIn() {

  const username=useRef()
  const password=useRef()
  /*onst isVendor=useRef()*/
  const userType=useRef()


  const saveInLocalStorage=()=>{
    if(username.current.value&&password.current.value&&userType.current.value){
      if(localStorage.getItem(username.current.value) === null){
        const userInfo={
          "usuario": username.current.value,
          "contra": password.current.value,
          "tipoDeUsuario": userType.current.value
        }
        localStorage.setItem(username.current.value,JSON.stringify(userInfo))
        alert("Registro Exitoso")
      }else{
        alert("Este usuario ya existe")
      }  
    }
  }

  return (
    <div className='card'>
        <p className='title'>Crear Cuenta</p>
        <hr />
        <p className='text'>Usuario</p>
        <input className='username' ref={username}></input>
        <p className='text'>Contraseña</p>
<<<<<<< Updated upstream
        <input className='user' type={"password"}></input>
        <Form.Check type="checkbox" label="Vendedor" className='check' />
        <a className="sign-in2" href="#">Iniciar sesión</a>
=======
        <input className='pwd' type={"password"} ref={password}></input>
        {/*<Form.Check type="checkbox" label="Vendedor" className='isVendor' ref={isVendor} />*/}
        {/*<a className="sign-in" href="#">Iniciar sesión</a>*/}
        <p className='userTypeTag'>Tipo de Usuario</p>
        <select className="tipoUsuario" ref={userType}>
          <option value="Vendedor">Vendedor</option>
          <option value="Comprador">Comprador</option>
        </select>
        <button onClick={saveInLocalStorage}>Registrarse</button>
>>>>>>> Stashed changes
    </div>
  );
}

export default FormSigIn;