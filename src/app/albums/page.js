import styles from './page.module.css';
import { MusicCardGenerator } from './utils';

export default function Albums() {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                <MusicCardGenerator />
            </div>
        </main>
    )
}