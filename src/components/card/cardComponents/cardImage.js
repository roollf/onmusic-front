import styles from '@/components/card/card.module.css';

export default function CardImage({ item }) {

    console.log(item)
    return (
        <img src={item.imageUrl} className="card-img-top" alt={item.altText} />
    )
}