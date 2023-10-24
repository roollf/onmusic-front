import styles from './page.module.css'
import { MusicCardGenerator, CarouselGenerator } from './utils';

export default function HomeApp() {
  return (
    <main className={styles.main}>
      <CarouselGenerator />
    </main>
  )
}