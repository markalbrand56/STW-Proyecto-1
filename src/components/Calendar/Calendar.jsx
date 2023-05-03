import React from "react"
import PropTypes from "prop-types"
import styles from "./Calendar.module.css"

function Calendar( {calendar} ) {
    return (
        <div className={styles.Calendar}>
            <div className={styles.Round}>
                <div className={styles.Dates}>
                    <h3>{calendar.round}</h3>
                    <div className={styles.DatesDesc}>
                        <h2>{calendar.dates}</h2>
                        <h4>{calendar.year}</h4>
                    </div>
                    <h1>{calendar.session}</h1>
                </div>
                <div className={styles.Location}>
                    <img src={calendar.flag} alt="Country Flag" />
                    <h1>
                        {calendar.location}
                        <i>{" >>>"}</i>
                    </h1>
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

const calendarShape = PropTypes.shape({
    round: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    session: PropTypes.string.isRequired,
})

Calendar.propTypes = {
    calendar: calendarShape.isRequired,
}

export default Calendar
