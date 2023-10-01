export default function CarouselContent({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img src={item.imageUrl} className={`d-block w-100`} alt={item.altText} />
                </div>
            ))
            }
        </>
    )
}