import styles from './footer.module.css';
import { FooterTagLine } from './footerComponents';

export default function Footer() {
    return (
        <nav className={`navbar ${styles["navbar-footer"]}`}>
            <div className="container-fluid">
                <FooterTagLine content={"OnMusic © 2023"} />
            </div>
        </nav>
    )
}