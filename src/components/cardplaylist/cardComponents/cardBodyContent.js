import styles from '@/components/card/card.module.css';
import Link from 'next/link';

export default function CardBodyContent({ musicObject }) {
    return (
        <>
            <h5 className="card-title">{musicObject.name}</h5>
            <p className="card-text">
                {musicObject.artist}
            </p>
            <Link href={`/playlists/detail/${musicObject.id}`} className={`btn ${styles["card-content-button"]}`}>
                Go to songs
            </Link>
        </>
    )
}