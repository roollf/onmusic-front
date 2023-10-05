import styles from './page.module.css';
import { AccordionGenerator } from './utils';

export default function Faq() {
    return (
        <>
        <main className={styles.main}>
            <AccordionGenerator />
        </main>
        </>
    )
}