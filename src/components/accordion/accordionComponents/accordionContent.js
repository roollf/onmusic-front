export default function AccordionContent({ item, parentSelector }) {
    const targetSelector = parentSelector;
    
    return (
        <div id={`flush-collapse${item.idString}`} className="accordion-collapse collapse" data-bs-parent={`#${targetSelector}`}>
            <div className="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate
                the <code>.accordion-flush</code> class. This is the first item's
                accordion body.
            </div>
        </div>
    )
}