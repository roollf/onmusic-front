import { AccordionHeader, AccordionContent } from './accordionComponents';

export default function Accordion({ accordionId, item }) {
    return (
        <>
            <AccordionHeader item={item} />
            <AccordionContent parentSelector={accordionId} item={item} />
        </>
    )
}