import { UserSignup } from "@/components";
import styles from './page.module.css';

export default function Cadastrar() {
    return (
        <div className={styles.main}>
            <UserSignup />
        </div>
    )
}