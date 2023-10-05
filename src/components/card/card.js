import styles from '@/components/card/card.module.css';
import { CardBodyContent, CardImage } from './cardComponents';

export default function Card({ music }) {
    return (
        <div className={`card ${styles["card-content"]}`}>
            <CardImage item={music} />
            <div className="card-body">
                <CardBodyContent item={music} />
            </div>
        </div>
    )
}