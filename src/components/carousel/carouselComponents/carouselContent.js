import Image from 'next/image';

export default function CarouselContent({ item }) {
    return (
        <>
            {item.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <Image
                        src={item.image}
                        alt={`Imagem ${item.id}`}
                        width={800}
                        height={450}
                        layout="responsive"
                    />
                </div>
            ))
            }
        </>
    )
}