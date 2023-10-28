import styles from './page.module.css';
import { MusicCardGenerator } from './utils';

export default function Playlists() {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                <MusicCardGenerator />
            </div>
        </main>
    )
}