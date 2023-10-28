import styles from '@/components/cardplaylist/cardPlaylist.module.css';
import { CardBodyContent } from './cardComponents';

export default function CardPlaylist({ musicObject }) {
    return (
        <div className={`card ${styles["card-content"]}`}>
            <div className="card-body">
                <CardBodyContent musicObject={musicObject} />
            </div>
        </div>
    )
}