import Link from 'next/link';
import styles from '@/components/card/card.module.css';

export default function CardBodyContent({ item }) {
    return (
        <>
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
                {item.about}
            </p>
            <Link href={`${item.link}`} className={`btn ${styles["card-content-button"]}`}>
                Go to songs
            </Link>
        </>
    )
}