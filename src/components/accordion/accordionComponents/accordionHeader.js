import styles from '@/components/accordion/accordion.module.css';

export default function AccordionHeader({ item }) {
    return (
        <h2 className={`accordion-header ${styles["accordion-header"]}`}>
            <button
                className={`accordion-button collapsed ${styles["accordion-body-button"]}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${item.idString}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${item.idString}`}
            >
                {item.question}
            </button>
        </h2>
    )
}