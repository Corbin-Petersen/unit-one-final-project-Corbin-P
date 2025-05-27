import { NavLink } from "react-router";

export default function Header( props ) {
    const { isLoggedIn, setLogin } = props;

    return (
        <header>
            <div id="header-content">
                <h1>WishLister</h1>
            </div>
            <nav>
                {/* { isLoggedIn 
                    ? <NavLink to="/:userID/lists">My Lists</NavLink>
                    : <NavLink to="/">Log In</NavLink>
                } */}
                
            </nav>
        </header>
    );
}