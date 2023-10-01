export default function CarouselIndicator({ items, parentSelector }) {
    const targetSelector = `#${parentSelector}`;

    return (
        <>
            {items.map((_, index) => (
                <button
                    key={index}
                    type={`button`}
                    data-bs-target={targetSelector}
                    data-bs-slide-to={index}
                    className={`${index === 0 ? "active" : ""}`}
                    aria-current={`${index === 0 ? "true" : ""}`}
                    aria-label={`Slide ${index + 1}`}
                />
            ))}
        </>
    )
}