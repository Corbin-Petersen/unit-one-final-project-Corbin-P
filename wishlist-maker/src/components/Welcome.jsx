import { useState } from "react"


export default function Welcome() {
    const [ user, setUser ] = useState(null);

    return (
        <div className="component">
            <div id="welcome-text">
                <h2>Welcome to WishLister!</h2>
            </div>
            <form name="login-form" id="login">
                <h3>LOGIN</h3>
                <label>EMAIL<br/>
                    <input type="email" id="login-user" name="user" placeholder="valid@email.com"/><br/>
                </label>
                <label>PASSWORD<br/>
                    <input type="password" id="login-pass" name="password" /><br/>
                </label><br/>
                <input type="button" value="SUBMIT" />
            </form>
        </div>
    )
}