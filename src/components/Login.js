import React from "react";
import '../App.css';

class Login extends React.Component{

    //se encarga de mostra la vista del componente
    render(){
        return(
            <div>
                <h1> Login</h1> 
                <form>
                    <input placeholder= "Usuario" className = 'input-login'></input>
                </form>
                <form>
                    <input placeholder= "Contraseña" className = 'input-login' type="password" ></input>
                </form>
                <form>
                    <button className= 'button-login'> Entrar</button>
                </form>
            </div>
        )
    }
}

export default Login;