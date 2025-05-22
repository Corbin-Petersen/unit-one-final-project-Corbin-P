import { useState } from "react";
import { userList } from '../shared/userData';

export default function Welcome() {
    const [ user, setUser ] = useState(null);

    return (
        <div className="component col">
            <div id="welcome-text">
                <h2>Welcome to WishLister!</h2>
            </div>
            <form name="login-form" id="login">
                <h3>LOGIN</h3>
                <label>EMAIL
                    <input type="email" id="login-user" name="user" placeholder="valid@email.com"/>
                </label>
                <label>PASSWORD
                    <input type="password" id="login-pass" name="password" />
                </label>
                <button onClick="">LOGIN</button>
            </form>
        </div>
    )
}