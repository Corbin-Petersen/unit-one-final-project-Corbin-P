import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import data from '../data/userData.json';

const userInfo = {};

export default function Welcome() {
    
    // set up states & variables
    const [ isLoggedIn, setLogin ] = useState(false);
    const [ invalidLogin, setInvalid ] = useState('');

    const modalDiv = useRef(0);
    const navigate = useNavigate();
    const userData = data;

    // function to handle login and set user and isLoggedIn
    const handleLogin = (e) => {
        // prevent reload
        e.preventDefault();
        
        // get submission
        const loginUser = e.target.user.value;
        const loginPass = e.target.password.value;

        // validate submission & set user and login
        for (let users of userData) {
            if (loginUser == users.userName && loginPass == users.pass) {
                // Object.assign(userInfo, users);
                // console.log(userInfo);
                setLogin(true);
                setLogin && navigate(`${users.userID}/lists`);
            } else {
                modalDiv.current.style.display = "block";
            }
        }
        
    }

    return (
        <div className="component col">
            <div id="welcome-text">
                <h2>Welcome to WishLister!</h2>
                <p>Login to get started!</p>
            </div>
            <form name="login-form" id="login" method="post" onSubmit={handleLogin}>
                <h3>LOGIN</h3>
                <label>EMAIL
                    <input type="email" id="login-user" name="user" placeholder="valid@email.com"/>
                </label>
                <label>PASSWORD
                    <input type="password" id="login-pass" name="password" />
                </label>
                <button type="submit">LOGIN</button>
            </form>
            <div id="modal-error" className="modal-bg" ref={modalDiv}>
                <div className="modal">
                    <button className="close" onClick={() => modalDiv.current.style.display = "none"}>&times;</button>
                    <p>Oops! Incorrect Username or Password. <br/>
                    Please try again.</p>
                </div>
            </div>
        </div>
    )
}