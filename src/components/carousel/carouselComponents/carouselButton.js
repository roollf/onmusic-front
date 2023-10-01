import styles from '@/components/carousel/carousel.module.css'

export default function CarouselButton({ directionInput, parentSelector }) {
    const direction = directionInput;
    let hiddenContent;

    if (direction === "prev") {
        hiddenContent = "Previous";
    } else {
        hiddenContent = "Next";
    }
    const dataBsSlide = `${direction}`;
    const targetSelector = `#${parentSelector}`;

    return (
        <button
            className={`carousel-control-${direction === "prev" ? "prev" : "next"} ${styles["carousel-control-button"]}`}
            type="button"
            data-bs-target={targetSelector}
            data-bs-slide={dataBsSlide}
        >
            <span className={`carousel-control-${direction === "prev" ? "prev" : "next"}-icon`} aria-hidden="true" />
            <span className={`visually-hidden`}>{hiddenContent}</span>
        </button>
    )
}