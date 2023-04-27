import React from "react"
import styles from "./News.module.css"

function News() {
    return (
        <div className={styles.News}>
            <div className={styles.NewsMainItem}>
                <img src="" alt=""/>
                <h3>INTERVIEW</h3>
                <h1>
                    Inaugural Round of F1 Academy Kicks Off at the Red Bull Ring
                </h1>
            </div>
            <div className={styles.NewsSecondary}>
                <div className={styles.NewsSecondaryItem}>
                    <img src="" alt=""/>
                    <h3>INTERVIEW</h3>
                    <h1>
                        Pre-season Testing Concludes With Final Day at the Red Bull Ring
                    </h1>
                </div>
                <div className={styles.NewsSecondaryItem}>
                    <img src="" alt=""/>
                    <h3>INTERVIEW</h3>
                    <h1>
                        Day 2 of Pre-Season testing completed at Circuit Paul Ricard
                    </h1>
                </div>
                <div className={styles.NewsSecondaryItem}>
                    <img src="" alt=""/>
                    <h3>INTERVIEW</h3>
                    <h1>
                        Day 1 of testing completed in Le Castellet
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default News