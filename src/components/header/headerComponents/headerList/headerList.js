import styles from '@/components/header/header.module.css';

export default function HeaderList({ children }) {
    return (
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles["navbar-header-link"]}`}>
            {children}
        </ul>
    )
}