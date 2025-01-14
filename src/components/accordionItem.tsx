import {faq_content} from "../utils/data.tsx";
import style from "./styles/accordion.module.css";
import {useState} from "react";
const AccordionItem = ({question, answer} : faq_content) => {
    const [active, setActive] = useState(false);
    const toggleAccordion = () => {
        setActive(!active);
        return
    }
    return (
        <li className={`${style.accordionItem} ${active ? style.active : ""}`}>
            <h4 onClick={() => toggleAccordion()}>{question}</h4>
            <div className={`${active ? style.active : ""}`}>
                <p className={`${active ? style.active : ""}`}>{answer}</p>
            </div>
        </li>
    );
};

export default AccordionItem;