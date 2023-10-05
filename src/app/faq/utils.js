import { Accordion } from '@/components';
import { AccordionContainer } from '@/components/accordion/accordionComponents';

export function AccordionGenerator() {
    const data = require('@/mocks/data/faq.json');
    return (
        <AccordionContainer accordionId={"accordionFaq"}>
            {data.map((item) => {
                const faqElements = item;
                return (
                    <Accordion accordionId={"accordionFaq"} item={faqElements} />
                )
            })}
        </AccordionContainer>
    )
}