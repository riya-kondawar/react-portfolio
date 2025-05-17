import { getImageUrl } from "../../utils";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.container} id='contact'>
            <div className={styles.gradientBar}></div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/riyakondawar/" 
                       aria-label="LinkedIn profile"
                       className={styles.socialLink}>
                        <img src={getImageUrl("contact/linkedinIcon.png")} 
                             alt="LinkedIn" 
                             className={styles.socialIcon}/>
                        <span className={styles.hoverEffect}></span>
                    </a>
                </li>
                
                <li className={styles.heart}>
                    <div className={styles.pulseAnimation}>❤️</div>
                </li>
                
                <li className={styles.link}>
                    <a href="https://github.com/riya-kondawar" 
                       aria-label="GitHub profile"
                       className={styles.socialLink}>
                        <img src={getImageUrl("contact/githubIcon.png")} 
                             alt="GitHub" 
                             className={styles.socialIcon}/>
                        <span className={styles.hoverEffect}></span>
                    </a>
                </li>
            </ul>
            <p className={styles.copyright}>
                <span className={styles.year}>2024</span> 
                <span className={styles.built}>Built by Riya with</span> 
                <span className={styles.heartInline}>❤️</span>
            </p>
        </footer>
    )
}

export default Footer;