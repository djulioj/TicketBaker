import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/signinForm.css';

function FormSigIn() {

  const username_login = useRef()
  const password_login = useRef()

  const logInValidation=()=>{
    if(localStorage.getItem(username_login.current.value)!== null){
      const userInfo= JSON.parse(localStorage.getItem(username_login.current.value))      
      if(password_login.current.value === userInfo.contra){
        alert("Inicio de sesion Exitoso")
        if(userInfo.tipoDeUsuario ==="Vendedor"){
          alert("Ha ingresado a la interfaz de vendedor")
          window.location.replace("/Crud")
        }else{
          const buyButton = document.getElementById("buyButton")
          console.log(buyButton)
          /*buyButton.style = {backgroundColor: '#2D3436', borderColor: '#2D3436', borderRadius: '28px'}*/
          window.location.replace("/")
        }

      }else{
        alert("User or Password incorrect, try again")
      }
    }else{
      alert("User or Password incorrect, try again")
    }
  }



  return (
    <div className='card'>
        <p className='title'>Inciar sesión</p>
        <hr />
        <p className='text'>Usuario</p>
        <input className='user' ref={username_login}></input>
        <p className='text'>Contraseña</p>
        <input className='user' type={"password"} ref={password_login}></input>
        <a className="sign-in2" href="#" onClick={logInValidation}>Iniciar sesión</a>
        <Link className="log-in2" to={'/log-in'}>Registrarse</Link>
    </div>
    
  );
}

export default FormSigIn;