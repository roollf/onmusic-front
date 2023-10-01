import styles from './carousel.module.css';
import { CarouselButton, CarouselContent, CarouselIndicator } from './carouselComponents';
const data = require('@/mocks/data/carousel.json');
const images = require.context('../../../public/images/carouselHome', false, /^\.\/.*\.(jpeg|jpg|png)$/);

const carouselItems = images.keys().map((item, index) => {
    const fileName = item.replace('./', '');
    return {
        imageUrl: `images/carouselHome/${fileName}`,
        altText: `Imagem ${index + 1}`
    }
});

export default function Carousel({ carouselId }) {

    return (
        <div id={carouselId} className={`carousel slide ${styles["carousel-slide-content"]}`}>
            <div className={`carousel-indicators`}>
                <CarouselIndicator items={carouselItems} parentSelector={carouselId} />
            </div>
            <div className={`carousel-inner ${styles["carousel-inner-content"]}`}>
                <CarouselContent items={carouselItems} />
            </div>
            <CarouselButton directionInput={"prev"} parentSelector={carouselId} />
            <CarouselButton directionInput={"next"} parentSelector={carouselId} />
        </div>
    )
}