import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <nav className={`navbar navbar-expand-lg ${styles["navbar-header"]}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand ${styles["navbar-header-brand"]}`} href={"/"}>OnMusic</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collpase" data-bs-target="navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles["navbar-header-link"]}`}>
                        <li className="nav-item">
                            <Link className="nav-link" href="/faq">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Cadastrar</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Music is our culture.
                    </span>
                </div>
            </div>
        </nav>
    )
}