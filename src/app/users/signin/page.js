import Login from '@/components/login/login';
import styles from './page.module.css';

export default function SignIn() {
    return (
        <div className={styles.main}>
            <Login />
        </div>
    )
}