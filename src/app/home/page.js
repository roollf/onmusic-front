import Image from 'next/image';
import styles from './page.module.css'

export default function HomeApp() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/brand.svg"
          alt="OnMusic Logo"
          width={720}
          height={148}
          priority
        />
      </div>
    </main>
  )
}