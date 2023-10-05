import styles from '@/components/accordion/accordion.module.css';

export default function AccordionContent({ item, parentSelector }) {
    const targetSelector = parentSelector;
    const hasList = item.hasOwnProperty("list");

    return (
        <div id={`flush-collapse${item.idString}`} className="accordion-collapse collapse" data-bs-parent={`#${targetSelector}`}>
            <div className={`accordion-body ${styles["accordion-body-content"]}`}>
                <p>{item.answer}</p>
                {hasList && (
                    <ul>
                        {Object.values(item.list).map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}