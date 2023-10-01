"use client";

import styles from '@/components/card/card.module.css';
import { CardBodyContent, CardImage } from './cardComponents';


export default function Card({ music }) {
    return (
        <div className={`card ${styles["card-content"]}`}>
            <CardImage item={music} />
            {/* <img src={`...`} className={`card-img-top`} alt={`...`} /> */}
            <div className={`card-body`}>
                <h5 className={`card-title`}>Card title</h5>
                <p className={`card-text`}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </p>
                <a href={`#`} className={`btn ${styles["card-content-button"]}`}>
                    Go somewhere
                </a>
            </div>
        </div>
    )
}