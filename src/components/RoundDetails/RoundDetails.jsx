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
