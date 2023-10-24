import styles from '@/components/card/card.module.css';
import { CardBodyContent, CardImage } from './cardComponents';

export default function Card({ musicObject }) {
    return (
        <div className={`card ${styles["card-content"]}`}>
            <CardImage musicObject={musicObject} />
            <div className="card-body">
                <CardBodyContent musicObject={musicObject} />
            </div>
        </div>
    )
}