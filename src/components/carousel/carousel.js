import styles from './carousel.module.css';
import { CarouselButton, CarouselContent, CarouselIndicator } from './carouselComponents';
const images = require.context('../../../public/images/carouselHome', false, /^\.\/.*\.(jpeg|jpg|png)$/);

export default function Carousel({ carouselId }) {
    const carouselItems = images.keys().map((item, index) => {
        const fileName = item.replace('./', '');
        return {
            imageUrl: `images/${fileName}`,
            altText: `Imagem ${index + 1}`
        }
    });

    return (
        <div id={carouselId} className="carousel slide">
            <div className="carousel-indicators">
                <CarouselIndicator items={carouselItems} parentSelector={carouselId} />
            </div>
            <div className="carousel-inner">
                <CarouselContent items={carouselItems} />
            </div>
            <CarouselButton directionInput={"prev"} parentSelector={carouselId} />
            <CarouselButton directionInput={"next"} parentSelector={carouselId} />
        </div>
    )
}