import React, { useState ,useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import {route} from '../../Env';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn , setBtn] = useState(false);
    const [validatorMessage , setValidatorMessage] = useState('');
    const [error , setError] = useState('');
    let firebase = useContext(FirebaseContext)
    let navigate = useNavigate();
  
    useEffect(() => {
        if (email !== '' && password.length > 5) {
            setBtn(true);
            setValidatorMessage('');
        }else if(btn) {
            setBtn(false);
            if(email === ''){
                setValidatorMessage('Entrer un email valide');          
            }
            if(password.length <=5){
                setValidatorMessage('Le mot de passe doit contenir au moins 6 caratères');  
            }
            setTimeout(() => {setValidatorMessage(''); }, 5000);
        }
    }, [email,password,btn])

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase.loginUser(email , password)
        .then((user)=>{
            setEmail('')
            setPassword('')

            //redirection vers la page welcome
            navigate(route.welcome)
        })
        .catch(error =>{
            setPassword('')
            setError(error);
            setTimeout(() => {setError(''); }, 5000);
        })
    }

    const btnDisplay = (btn) 
    ? <button type="submit">Connexion</button>
    : <button disabled>Connexion</button>

    //gestion des erreurs
    const errorMsg = error !== '' && <span> { error.message } </span>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">

                <div className="formBoxLeftLogin">

                </div>
                
                <div className="formBoxRight">
                <div className="formContent">

                    { errorMsg }
                    { validatorMessage &&   <span> {validatorMessage} </span>} 

                    <h2>Connexion</h2>
                    <form onSubmit={ handleSubmit }>
                        <div className="inputBox">
                            <input  onChange={ e => setEmail(e.target.value) } value={email} type="email" id="email"  autoComplete="off" required />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="inputBox">
                                <input  onChange={ e => setPassword(e.target.value) }  value={password} type="password" id="password" name="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>
                        </div>

                        { btnDisplay }

                    </form>
                    <div className="linkContainer">
                        <Link to={route.signup} className="simpleLink">Nouveau sur Marvel-quiz ? S'inscrire maintement.</Link>
                        <br />
                        <Link  to={route.forgetpassword} className="red-simpleLink">Mot de passe oublié? Récupérez-le ici.</Link>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Login