import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/register"}>Cadastre-se</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;