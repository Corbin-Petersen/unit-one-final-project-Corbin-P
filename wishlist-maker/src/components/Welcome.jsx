

export default function Welcome() {


    return (
        <>
            <div id="welcome-text">
                <h2>Welcome to WishLister!</h2>
            </div>
            <form name="login-form">
                <h3>LOGIN</h3>
                <label for="login-user">EMAIL</label><br/>
                <input type="email" id="login-user" name="user" placeholder="valid@email.com"/><br/>
                <label for="login-pass">PASSWORD</label><br/>
                <input type="password" id="login-pass" name="password" /><br/>
                <input type="button" value="SUBMIT" />
            </form>
        </>
    )
}