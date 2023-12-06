import Link from 'next/link';
import styles from '@/components/card/card.module.css';

export default function CardBodyContent({ musicObject }) {
    return (
        <>
            <h5 className="card-title">{musicObject.name}</h5>
            <p className="card-text">
                {musicObject.artist}
            </p>
            <Link href={`/albums/detail/${musicObject._id}`} className={`btn ${styles["card-content-button"]}`}>
                Go to songs
            </Link>
        </>
    )
}