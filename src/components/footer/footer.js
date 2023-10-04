import styles from './footer.module.css';
import { FooterTagLine } from './footerComponents';

export default function Footer({ tagLine }) {
    return (
        <nav className={`navbar ${styles["navbar-footer"]} ${styles["navbar-footer-border"]}`}>
            <div className={`container-fluid`}>
                <FooterTagLine content={tagLine} />
            </div>
        </nav>
    )
}