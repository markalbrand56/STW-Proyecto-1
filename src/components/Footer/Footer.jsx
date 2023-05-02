import React from "react"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className={styles.FooterContainer}>
            <div className={styles.Footer}>
                <div className={styles.FooterTop}>
                    <div className={styles.FooterTopLeft}>
                        <ul className={styles.FooterLinks}>
                            <li> Terms of Use </li>
                            <li> Cookies Policy </li>
                            <li> Privacy Notice </li>
                            <li> Credits </li>
                            <li> Contact Us </li>
                            <li> Privacy Manager GDPR </li>
                        </ul>
                    </div>
                    <div className={styles.FooterTopRight}>
                        <ul className={styles.FooterSocialMedia}>
                            <a href="#" className="fa fa-twitter" />
                            <a href="#" className="fa fa-instagram" />
                        </ul>
                    </div>
                </div>
                <div className={styles.FooterDivider}>
                    <hr className={styles.Divider}/>
                </div>
                {/* <div className={styles.GlobalPartenrs}></div> */}
                {/* <div className={styles.FooterBottom}></div> */}
            </div>
        </div>
    )
}

export default Footer
