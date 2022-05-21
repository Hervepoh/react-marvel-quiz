import React , { useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import { route } from '../../Env';
import { FirebaseContext } from '../Firebase';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const firebase = useContext(FirebaseContext);
    let navigate   = useNavigate();

    const data = {
        'pseudo' : '' ,
        'email' : '',
        'password' : '',
        'confirmPassword' : '',
    }

    const [error , setError] = useState('');
    const [loginData , setLoginData] = useState(data);
    const  {pseudo , email , password ,confirmPassword} = loginData;

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.id]:e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        firebase
        .signupUser(email,password)
        .then((userCredential) => {
            // Signed in an login user
            // const user = userCredential.user;
            // redirection vers la page welcome
           navigate(route.welcome, { replace: true });
        })
        .catch((errorLogin) => {
            setError(errorLogin);
            setLoginData({...loginData, 'password' : '', 'confirmPassword' : ''});
        });

    }
    
    //gestion des btn d'Inscription 
    const btn = pseudo !== '' && email !== '' && password !== '' && password.length >=6 && password === confirmPassword 
    ? <button type="submit">Inscription</button> :
    <button disabled>Inscription</button>
    
    //gestion des erreurs
    const errorMsg = error !== '' && <span> { error.message } </span>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                        { errorMsg }
                    
                        <h2 style={{ marginTop : "30px"}}>Inscription</h2>
                        
                        <form onSubmit={ handleSubmit }>
                            <div className="inputBox">
                                <input type="text" onChange={ handleChange } value={pseudo} id="pseudo" name="pseudo" required /> 
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input  type="email" onChange={ handleChange } value={email} id="email"  name="email" required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input type="password" onChange={ handleChange } value={password}  id="password" name="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>

                            </div><div className="inputBox">
                                <input   type="password" onChange={ handleChange } value={confirmPassword}  id="confirmPassword" name="confirmPassword"  autoComplete="off" required />
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>
                        
                            { btn }

                        </form> 
                        <div className="linkContainer">
                            <Link to={ route.login } className="simpleLink">Déjà inscrit ? Connectez-vous.</Link>
                        </div>
                    </div>
                    
                
                </div>
            </div>
        </div>
    )

}

export default Signup