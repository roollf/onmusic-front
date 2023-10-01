import { Card } from "@/components";


export const MusicCardGenerator = () => {
    const data = require('@/mocks/data.json');
    const images = require.context('../../../public/images/cardsHome', false, /^\.\/.*\.(jpeg|jpg|png)$/);
    // console.log(data[0].genero);
    return images.keys().map((item, index) => {
        const fileName = item.replace('./', '');
        return (
            <Card
            music = {{
                imageUrl: `/images/cardsHome/${fileName}`,
                altText: `Imagem ${index + 1}`
            }}
            />
        )
    });
}