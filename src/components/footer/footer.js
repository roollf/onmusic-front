import styles from './footer.module.css';
import { FooterTagLine } from './footerComponents';

export default function Footer({ tagLine }) {
    return (
        <nav className={`navbar ${styles["navbar-footer"]}`}>
            <div className={`container-fluid`}>
                <FooterTagLine content={tagLine} />
            </div>
        </nav>
    )
}