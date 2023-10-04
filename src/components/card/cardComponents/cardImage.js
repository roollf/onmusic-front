import Image from 'next/image';
import styles from '@/components/card/card.module.css';

export default function CardImage({ item }) {
    return (
        <Image
            className={`${styles["card-content-image"]}`}
            src={item.image}
            alt={`Imagem ${item.id}`}
            width={350}
            height={350}
            layout="responsive"
        />
    )
}