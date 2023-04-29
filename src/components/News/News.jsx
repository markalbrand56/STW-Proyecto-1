import React from "react"
import PropTypes from "prop-types"
import styles from "./News.module.css"

function News({ news }) {
    return (
        <div className={styles.News}>
            <div className={styles.NewsMainItem}>
                <img src={news.main.img} alt="" />
                <h3>{news.main.category}</h3>
                <h1>{news.main.title}</h1>
            </div>
            <div className={styles.NewsSecondary}>
                <div className={styles.NewsSecondaryItem}>
                    <img src={news.secondary1.img} alt="" />
                    <h3>{news.secondary1.category}</h3>
                    <h1>{news.secondary1.title}</h1>
                </div>
                <div className={styles.NewsSecondaryItem}>
                    <img src={news.secondary2.img} alt="" />
                    <h3>{news.secondary2.category}</h3>
                    <h1>{news.secondary2.title}</h1>
                </div>
                <div className={styles.NewsSecondaryItem}>
                    <img src={news.secondary3.img} alt="" />
                    <h3>{news.secondary3.category}</h3>
                    <h1>{news.secondary3.title}</h1>
                </div>
            </div>
        </div>
    )
}

const newsShape = PropTypes.shape({
    main: PropTypes.shape({
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    secondary1: PropTypes.shape({
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    secondary2: PropTypes.shape({
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    secondary3: PropTypes.shape({
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
})

News.propTypes = {
    news: newsShape.isRequired,
}

export default News
