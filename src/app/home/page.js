import styles from './page.module.css'
import { MusicCardGenerator, CarouselGenerator } from './utils';

export default function HomeApp() {
  return (
    <main className="main">
      <CarouselGenerator />
      <div className={styles.description}>
        <h2>
          Top Artists
        </h2>
      </div>
      <div className={styles.grid}>
        <MusicCardGenerator />
      </div>
    </main>
  )
}