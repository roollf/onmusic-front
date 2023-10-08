import styles from './page.module.css'
import { MusicCardGenerator, CarouselGenerator } from './utils';

export default function HomeApp() {
  return (
    <main className={styles.main}>
      <CarouselGenerator />
      <div className={styles.description}>
        <h2>
          Playlists
        </h2>
      </div>
      <div className={styles.grid}>
        <MusicCardGenerator />
      </div>
    </main>
  )
}