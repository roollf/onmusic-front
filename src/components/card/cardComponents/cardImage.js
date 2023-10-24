import Image from 'next/image';
import styles from '@/components/card/card.module.css';

export default function CardImage({ musicObject }) {
    return (
        <Image
            className={`${styles["card-content-image"]}`}
            src={musicObject.image}
            alt={`Imagem ${musicObject.id}`}
            width={300}
            height={300}
            layout="responsive"
        />
    )
}