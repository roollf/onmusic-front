import { Card, Carousel } from '@/components';

export function MusicCardGenerator() {
    const data = require('@/mocks/data/music.json');
    return (
        data.map((item) => {
            const artist = item;
            return (
                <Card music={artist} />
            )
        })
    );
}

export function CarouselGenerator() {
    const data = require('@/mocks/data/carousel.json');
    return (
        <Carousel carouselId={"carouselHome"} image={data} />
    );
}