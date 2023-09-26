import styles from './footer.module.css';

export default function Footer() {
    return (
        <nav class={`navbar ${styles["navbar-footer"]}`}>
            <div class="container-fluid">
                <span class="navbar-text">
                    OnMusic © 2023
                </span>
            </div>
        </nav>
    )
}