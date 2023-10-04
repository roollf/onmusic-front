export default function AccordionHeader({ item }) {
    return (
        <h2 className="accordion-header">
            <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
            >
                Accordion Item #1
            </button>
        </h2>
    )
}