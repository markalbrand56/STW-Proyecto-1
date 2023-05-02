import React from "react"
import PropTypes from "prop-types"
import styles from "./Cards.module.css"

function Cards({ cards }) {
    // TODO Averiguar como colorear el clip path
    return (
        <div className={styles.Cards}>
            <div className={styles.Card}>
                <div className={styles.CardInner}>
                    <h2>{cards.card1}</h2>
                    <a href="">
                        Explore
                        <i>{" >"}</i>
                    </a>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.CardInner}>
                    <h2>{cards.card2}</h2>
                    <a href="">
                        Explore
                        <i>{" >"}</i>
                    </a>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.CardInner}>
                    <h2>{cards.card3}</h2>
                    <a href="">
                        Explore
                        <i>{" >"}</i>
                    </a>
                </div>
            </div>
        </div>
    )
}

const cardsShape = PropTypes.shape({
    card1: PropTypes.string.isRequired,
    card2: PropTypes.string.isRequired,
    card3: PropTypes.string.isRequired,
})

Cards.propTypes = {
    cards: cardsShape.isRequired,
}

export default Cards
