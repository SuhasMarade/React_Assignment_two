import { Link } from "react-router-dom";
import Logo from "../Logo/Logo"
import "./Signup.css";
function Signup() {
    return (
        <div className="container">
            <div className="signupData">
                <Logo className="textLogo"/>
                <input className="inputData" type="text" name="mobileNumberOrEmail" id="mobileOrEmail" autoFocus placeholder="Mobile Number or Email" />
                <input className="inputData" type="text" name="fullName" id="fullName" placeholder="Full Name" />
                <input className="inputData" type="text" name="phoneNumberOrUsernameOrEmail" id="phoneNumberOrUsernameOrEmail" placeholder="Phone number username or email" />
                <input className="inputData" type="password" name="userPassword" id="userPassword" placeholder="password" />
                <Link className="signupButton" to="/" >Sign up</Link>
            </div>
            <div className="login">
                <p>Have an account? <Link className="loginLink" to="/">Log in</Link></p>
            </div>
        </div>
    );
}

export default Signup;