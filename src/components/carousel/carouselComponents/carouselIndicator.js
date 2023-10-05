export default function CarouselIndicator({ item, parentSelector }) {
    const targetSelector = parentSelector;

    return (
        <>
            {item.map((item, index) => (
                <button
                    key={index}
                    type="button"
                    data-bs-target={`#${targetSelector}`}
                    data-bs-slide-to={index}
                    className={`${index === 0 ? "active" : ""}`}
                    aria-current={`${index === 0 ? "true" : ""}`}
                    aria-label={`Slide ${item.id}`}
                />
            ))}
        </>
    )
}