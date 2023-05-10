import React from "react"
import { useEffect } from "react"
import PropTypes from "prop-types"
import styles from "./Calendar.module.css"

function CountDown() {
    const [days, setDays] = React.useState(0)
    const [hours, setHours] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)
    const [seconds, setSeconds] = React.useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const countDownDate = new Date("May 31, 2023 23:55:00").getTime()
            const distance = countDownDate - now

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
            setHours(
                Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
            )
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.Countdown}>
            <div className={styles.CountdownDetail}>
                <span className={styles.CountdownTitle}>DAYS</span>
                <span className={styles.CountdownTime}>{days}</span>
            </div>
            <div className={styles.CountdownDetail}>
                <span className={styles.CountdownTitle}>HOURS</span>
                <span className={styles.CountdownTime}>{hours}</span>
            </div>
            <div className={styles.CountdownDetail}>
                <span className={styles.CountdownTitle}>MINUTES</span>
                <span className={styles.CountdownTime}>{minutes}</span>
            </div>
            <div className={styles.CountdownDetail}>
                <span className={styles.CountdownTitleSeconds}>SECONDS</span>
                <span className={styles.CountdownTimeSeconds}>{seconds}</span>
            </div>
        </div>
    )
}

function Calendar({ calendar }) {
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
                    <img src={calendar.flag} alt="Country Flag"/>
                    <h1>
                        {calendar.location}
                        <i>{" >>>"}</i>
                    </h1>
                </div>
            </div>
            <CountDown/>
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
