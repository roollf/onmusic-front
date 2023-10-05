export default function AccordionContainer({ children, accordionId }) {
    return (
        <div className="accordion accordion-flush" id={accordionId}>
            {children}
        </div>
    )
}