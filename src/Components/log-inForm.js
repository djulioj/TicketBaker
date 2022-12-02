import { useRef } from 'react';
import '../Styles/loginForm.css';

function FormSigIn() {

  const username=useRef()
  const password=useRef()
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
        window.location.replace("/");
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
        <input className='pwd' type={"password"} ref={password}></input>
        <p className='text'>Tipo de Usuario</p>
        <select className="userType" ref={userType}>
          <option value="Vendedor">Vendedor</option>
          <option value="Comprador">Comprador</option>
        </select>
        <button className='sign-in2' onClick={saveInLocalStorage}>Registrarse</button>
    </div>
  );
}

export default FormSigIn;