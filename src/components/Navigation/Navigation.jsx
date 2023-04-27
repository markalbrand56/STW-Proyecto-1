import React from "react"
import styles from "./Navigation.module.css"

const navText = {
    logo: "src/assets/f1_Academy.svg",
    latestNews: "LATEST NEWS",
    teams: "TEAMS & DRIVERS",
    standings: "STANDINGS",
    calendar: "CALENDAR & RESULTS",
    guides: "GUIDE TO F1 ACADEMY",
    live: "LIVE TIMING",
}

function Navigation() {
    return (
        <nav className={styles.Navigation}>
            <img src={navText.logo} alt="F1&copy; Logo" />
            <ul>{navText.latestNews}</ul>
            <ul>{navText.teams}</ul>
            <ul>{navText.standings}</ul>
            <ul>{navText.calendar}</ul>
            <ul>{navText.guides}</ul>
            <ul>{navText.live}</ul>
        </nav>
    )
}

export default Navigation