import styles from './page.module.css';
import Link from 'next/link';
import { MusicCardGenerator } from './utils';

export default function Playlists() {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                <div className={`card ${styles["card-content"]}`}>
                    <div className="card-body">
                        <h5 className="card-title">Criar Playlist</h5>
                        <Link href={"/playlists/createplaylist"} className={`btn ${styles["card-content-button"]}`}>
                            Criar
                        </Link>
                    </div>
                </div>
                <MusicCardGenerator />
            </div>
        </main>
    )
}