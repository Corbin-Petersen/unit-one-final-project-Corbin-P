import { NavLink, useParams } from "react-router";
import NavBlock from "./NavBlock";
import { useRef, useState } from "react";

export default function Header( props ) {
    const { data, loggedIn } = props;
    const { userID, listID } = useParams();
    const [ menuOpen, setMenuOpen ] = useState(false);
    const userInfo = data.find(user => user.userID == userID);

    const handleMenu = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }

    return (
        <header>
            <div id="header-content">
                <nav>
                    <h1>WistLish</h1>
                    <div className="menu" onClick={handleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    {!loggedIn ? (
                    <ul className={ menuOpen ? "open" : "" }>
                        <li>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                    </ul>
                    ) : (
                    <ul>
                        <li>
                            <NavLink to={`${loggedIn}/lists`} end>MY LISTS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" reloadDocument end>LOGOUT</NavLink>
                        </li>
                    </ul>
                    )}
                </nav>
            </div>

        </header>
    );
}