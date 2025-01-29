import { Link, useNavigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";
import useUser from "./hooks/useUser";
const NavBar = () => {
    const navigate = useNavigate();
    const {user} = useUser();
    const adminEmail = "123456@gmail.com";
    return ( 
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                {user && user.email === adminEmail && <li><Link to="/add-article">Add Article</Link></li>}
            </ul>
            <div className="nav-right">
                {user
                    ? <button onClick={()=>{
                        console.log("logout")
                        signOut(getAuth())
                    }} >Log out</button>
                    : <button onClick={()=>{ 
                        navigate('/login') 
                    }} >Log In</button>
                }
            </div>
        </nav>
    )
}
export default NavBar