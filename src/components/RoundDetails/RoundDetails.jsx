import React from "react"
import PropTypes from "prop-types"
import styles from "./RoundDetails.module.css"

function RoundDetails({ roundDetails }) {
    return (
        <div className={styles.RoundDetails}>
            <div className={styles.RoundDetailsDate}>
                <h3>{roundDetails.round}</h3>
                <h2>{roundDetails.dates}</h2>
            </div>
            <div className={styles.RoundDetailsCalendar}>
                <div className={styles.RoundDetailsWeekendStruct}>
                    <div className={styles.RoundDetailsWeekendStructLocation}>
                        <div className={styles.Country}>
                            <img
                                src="src/assets/Flag_of_Austria.svg.png"
                                alt="Flag of Austria"
                            />
                            <h3>{roundDetails.country}</h3>
                        </div>
                        <h1>{roundDetails.city}</h1>
                        <a href="">
                            Full round details
                            <i>{" >"}</i>
                        </a>
                    </div>
                </div>
                <div className={styles.RoundDetailsSaturday}>
                    <div className={styles.RoundDetailsSaturdayElement}>
                        <p className={styles.RoundDetailsSaturdayElementTitle}>
                            Free Practice 1
                        </p>
                        <p className={styles.RoundDetailsSaturdayElementDay}>
                            {roundDetails.fp1.day}
                        </p>
                        <span>{roundDetails.fp1.time}</span>
                    </div>
                    <div className={styles.RoundDetailsSaturdayElement}>
                        <p className={styles.RoundDetailsSaturdayElementTitle}>
                            Free Practice 2
                        </p>
                        <p className={styles.RoundDetailsSaturdayElementDay}>
                            {roundDetails.fp2.day}
                        </p>
                        <span>{roundDetails.fp2.time}</span>
                    </div>
                    <div className={styles.RoundDetailsSaturdayElement}>
                        <p className={styles.RoundDetailsSaturdayElementTitle}>
                            Qualifying 1
                        </p>
                        <p className={styles.RoundDetailsSaturdayElementDay}>
                            {roundDetails.q1.day}
                        </p>
                        <span>{roundDetails.q1.time}</span>
                    </div>
                    <div className={styles.RoundDetailsSaturdayElement}>
                        <p className={styles.RoundDetailsSaturdayElementTitle}>
                            Qualifying 2
                        </p>
                        <p className={styles.RoundDetailsSaturdayElementDay}>
                            {roundDetails.q2.day}
                        </p>
                        <span>{roundDetails.q2.time}</span>
                    </div>
                    <div
                        className={styles.RoundDetailsSaturdayElementAnnotation}
                    >
                        <p>Times displayed are track times</p>
                    </div>
                </div>
                <div className={styles.RoundDetailsSunday}>
                    <div className={styles.RoundDetailsSundayElement}>
                        <p className={styles.RoundDetailsSundayElementTitle}>
                            Race 1
                        </p>
                        <p className={styles.RoundDetailsSundayElementDay}>
                            {roundDetails.r1.day}
                        </p>
                        <span>{roundDetails.r1.time}</span>
                    </div>
                    <div className={styles.RoundDetailsSundayElement}>
                        <p className={styles.RoundDetailsSundayElementTitle}>
                            Race 2
                        </p>
                        <p className={styles.RoundDetailsSundayElementDay}>
                            {roundDetails.r2.day}
                        </p>
                        <span>{roundDetails.r2.time}</span>
                    </div>
                    <div className={styles.RoundDetailsSundayElement}>
                        <p className={styles.RoundDetailsSundayElementTitle}>
                            Race 3
                        </p>
                        <p className={styles.RoundDetailsSundayElementDay}>
                            {roundDetails.r3.day}
                        </p>
                        <span>{roundDetails.r3.time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const roundDetailsShape = PropTypes.shape({
    round: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    fp1: PropTypes.shape({
        day: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
    fp2: PropTypes.shape({
        day: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
    q1: PropTypes.shape({
        day: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
    q2: PropTypes.shape({
        day: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
    r1: PropTypes.shape({
        day: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
    r2: PropTypes.shape({
        day: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
    r3: PropTypes.shape({
        day: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
})

RoundDetails.propTypes = {
    roundDetails: roundDetailsShape.isRequired,
}

export default RoundDetails
