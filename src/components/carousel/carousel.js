import styles from './carousel.module.css';
import { CarouselButton, CarouselContent, CarouselIndicator } from './carouselComponents';

export default function Carousel({ carouselId, image }) {
    return (
        <div id={carouselId} className={`carousel slide ${styles["carousel-slide-content"]}`}>
            <div className={`carousel-indicators`}>
                <CarouselIndicator item={image} parentSelector={carouselId} />
            </div>
            <div className={`carousel-inner ${styles["carousel-inner-content"]}`}>
                <CarouselContent item={image} />
            </div>
            <CarouselButton directionInput={"prev"} parentSelector={carouselId} />
            <CarouselButton directionInput={"next"} parentSelector={carouselId} />
        </div>
    )
}