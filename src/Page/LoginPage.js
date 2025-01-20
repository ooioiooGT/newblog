import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage =()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState('');

    const logIn =async() =>{
        try{
        await signInWithEmailAndPassword(getAuth(), email, password);
        console.log("login success!")
        navigate('/articles');
        }catch(e){
            setError(e.message);
        }
    }
    return (
        <div className="login">
        <h1> Log In </h1>
        {error && <p className="error">{error}</p>}
        <input 
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email"/>
        <input 
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password" 
            placeholder="password"/>
        <button onClick={logIn}> Log In </button>
        <Link to="/signup">don't have account? create one here</Link>
        </div>
    )
}
export default LoginPage;