import { Link } from "react-router-dom";
import Logo from '../Logo/Logo'
import "./Login.css"
function Login(){
    return (
        <div className="container">
            <div className="loginData">
                <Logo className="textLogo" />
                <input className="inputData" type="text" name="userdata" id="userdata" placeholder="Phone number, username or email" autoFocus />
                <input className="inputData" type="password" name="password" id="password" placeholder="Password"/>
                <Link className="loginButton" to="/signup">Sign in</Link>
            </div>
            <div className="signup">
                <p>Don't have an account?  <Link className="signupLink" to="/signup">Sign up</Link></p>
            </div>
        </div>
    );
}

export default Login;