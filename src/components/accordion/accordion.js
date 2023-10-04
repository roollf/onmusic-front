import styles from '@/components/accordion/accordion.module.css';

export default function Accordion({ accordionId, item }) {
    return (
        <div className={`accordion accordion-flush`} id={accordionId}>
            <div className="accordion-item">
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
                <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body">
                        Placeholder content for this accordion, which is intended to demonstrate
                        the <code>.accordion-flush</code> class. This is the first item's
                        accordion body.
                    </div>
                </div>
            </div>
        </div>
    )
}