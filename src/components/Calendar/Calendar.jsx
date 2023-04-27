import React from "react"
import styles from "./Calendar.module.css"

function Calendar() {
    return (
        <div className={styles.Calendar}>
            <div className={styles.Round}>
                <div className={styles.Dates}>
                    <h3>ROUND 1</h3>
                    <h2>27-28 APRIL 2023</h2>
                    <h1>FREE PRACTICE 1 COUNTDOWN</h1>
                </div>
                <div className={styles.Location}>
                    <img
                        src="src/assets/Flag_of_Austria.svg.png"
                        alt="Flag of Austria"
                    />
                    <h1>SPIELBERG, AUSTRIA</h1>
                </div>
            </div>
            <div className={styles.Countdown}>
                <div className={styles.CountdownDetail}>
                    <span className={styles.CountdownTitle}>DAYS</span>
                    <span className={styles.CountdownTime}>00</span>
                </div>
                <div className={styles.CountdownDetail}>
                    <span className={styles.CountdownTitle}>HOURS</span>
                    <span className={styles.CountdownTime}>00</span>
                </div>
                <div className={styles.CountdownDetail}>
                    <span className={styles.CountdownTitle}>MINUTES</span>
                    <span className={styles.CountdownTime}>00</span>
                </div>
                <div className={styles.CountdownDetail}>
                    <span className={styles.CountdownTitleSeconds}>
                        SECONDS
                    </span>
                    <span className={styles.CountdownTimeSeconds}>00</span>
                </div>
            </div>
        </div>
    )
}

export default Calendar
