import { useRef, useState } from "react";
import { useNavigate } from "react-router";

export default function Welcome( props ) {
    
    // set up states & variables
    const { setLogin, data } = props;
    const [ loginUser, setLoginUser ] = useState(null);
    const [ loginPass, setLoginPass ] = useState(null);
    const modalDiv = useRef(0);
    const navigate = useNavigate();
            
    // functions to handle modal fade-in and fade-out
    const openModal = () => {
        modalDiv.current.style.display = "block";
        setTimeout(() => {
            modalDiv.current.style.opacity = "1";
        }, 1);
    }
    const closeModal = () => {
        modalDiv.current.style.opacity = "0";
        setTimeout(() => {
            modalDiv.current.style.display = "none";
        }, 250);
    }

    // get values from form
    const setUser = (e) => {
        const x = e.target.value;
        setLoginUser(x);
    }
    const setPass = (e) => {
        const x = e.target.value;
        setLoginPass(x);
    }

    // function to handle login and set user and isLoggedIn
    const handleLogin = (e) => {
        // prevent reload
        e.preventDefault();
        
        // validate submission, show error (if applicable), nav to Lists component
        let myID = "";
        let login = false; // set local false variable b/c state does not update inside functions
        for (let users of data) {
            if (loginUser == users.userName && loginPass == users.pass) {
                myID = users.userID;
                setLogin(true);
                login = true;
            }
            console.log(login);
        }
        login ? navigate(`${myID}/lists`) : openModal();
    }

    return (
        <div className="component row">
            <div id="about-info">
                <h2>Welcome to WishLister!</h2>
                <span className="emphasis">What is WishLister?</span><br/>
                <p>WishLister is your way to easily build wish lists from items you find <i>all over</i> the interwebs! </p>
                <p>Simply create a list for anything you want - like favorite spatulas or supplies for puppy shower - and either track your list yourself, or share your list with others that might want to know what items you or your new puppy wishes for!</p>
                <p>The worldwide web is your oyster, with <span className="emphasis">WishLister</span>. </p>
            </div>
            <div id="login-info" className="col">
                <div id="login-text">
                    <h2>Login to get started!</h2>
                </div>
                <form name="login-form" id="login" method="post" onSubmit={handleLogin}>
                    <h3>LOGIN</h3>
                    <label>EMAIL
                        <input type="email" id="login-user" name="user" placeholder="valid@email.com" onChange={setUser} />
                    </label>
                    <label>PASSWORD
                        <input type="password" id="login-pass" name="password" onChange={setPass} />
                    </label>
                    <button type="submit">LOGIN</button>
                </form>
                <div id="modal-error" className="modal-bg" ref={modalDiv}>
                    <div className="modal">
                        <button className="close" onClick={closeModal}>&times;</button>
                        <p>Oops! Incorrect Username or Password. <br/>
                        Please try again.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}