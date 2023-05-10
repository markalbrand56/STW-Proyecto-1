import React from "react"
import PirelliLogo from "../../assets/pirelli.svg"
import AutotecnicaLogo from "../../assets/autotecnica-logo-74d1fcb76f487701ccfc4a8b5822d737.png"
import FoxLogo from "../../assets/fox.svg"
import TatuusLogo from "../../assets/tatuus-logo-7d63d64cfd8a64d1b82f5c210d94e20a.png"
import F1AcademyLogo from "../../assets/f1_Academy.svg"
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
                    <hr className={styles.Divider} />
                </div>
                <div className={styles.GlobalPartners}>
                    <p>Our partners</p>
                    <div className={styles.Partners}>
                        <div className={styles.PrimaryPartners}>
                            <ul>
                                <li>
                                    <img src={PirelliLogo} alt="Pirelli" />
                                </li>
                            </ul>
                        </div>
                        <div className={styles.SecondaryPartners}>
                            <ul>
                                <li>
                                    <img
                                        src={AutotecnicaLogo}
                                        alt="AutoTecnica"
                                    />
                                </li>
                                <li>
                                    <img src={FoxLogo} alt="Fox" />
                                </li>
                                <li>
                                    <img src={TatuusLogo} alt="Tatuus" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.FooterDivider}>
                    <hr className={styles.Divider} />
                </div>
                <div className={styles.FooterBottom}>
                    <div className={styles.FooterBottomLeft}>
                        <img src={F1AcademyLogo} alt="F1 Academy Logo" />
                    </div>
                    <div className={styles.FooterBottomRight}>
                        <p>© 2023 Formula One Management Limited</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
