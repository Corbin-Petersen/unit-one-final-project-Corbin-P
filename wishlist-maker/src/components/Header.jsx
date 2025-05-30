import { NavLink } from "react-router";
import NavBlock from "./NavBlock";

export default function Header( props ) {
    const { isLoggedIn, setLogin } = props;

    return (
        <header>
            <div id="header-content">
                <h1>WistLish</h1>
            </div>
        </header>
    );
}