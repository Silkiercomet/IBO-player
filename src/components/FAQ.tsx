import styles from './styles/accordion.module.css';
import AccordionItem from "./accordionItem";
import {faq_content, faq_data} from "../utils/data";
const Faq = () => {
    return (
        <section className={styles.faq}>
            <h4>Frequently Asked Questions</h4>
            <ul className={styles.faq_accordion}>
                {faq_data.map((element:faq_content   , index:number) => <AccordionItem key={index} question={element.question} answer={element.answer}/>)}
            </ul>
        </section>
    );
};

export default Faq;