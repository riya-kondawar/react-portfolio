import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import song from './rick.mp3';
import ScrambleText from '../ScrambleText/ScrambleText';

const Hero = () => {
    const handleClick = (e) => {
        let sound = new Audio(song);
        sound.play().catch(error => {
            console.log("Error playing audio", error);
        });
    };

    return (
        <div className={styles.heroWrapper}>
            <ScrambleText />
            <section id="hero" className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>
                            <span className={styles.gradientText}>Hello!</span>
                            <span> 👋🏻</span>
                        </h1>
                        <div className={styles.animatedCursor}>_</div>
                    </div>
                    <p className={styles.description}>
                        I'm <span className={styles.highlight}>Riya</span>, from 📍Pune<br />
                        <span className={styles.jobTitle}>Data Analyst | Full Stack Developer</span><br />
                        I build immersive digital experiences with cutting-edge tech<br />
                        Specializing in React.js, Node.js, and data visualization
                    </p>
                    <div className={styles.buttons}>

                        <a className={styles.resumeBtn} href="/RiyaResume-DataAnalyst-FSD.pdf" download="RiyaKondawar-Resume.pdf">
                            Download Resume
                        </a>
                        <a className={styles.contactBtn} href="mailto:riya.kondawar@gmail.com">
                            Contact Me
                        </a>
                        <div className={styles.iconContainer} onClick={handleClick}>
                            <lord-icon
                                src="https://cdn.lordicon.com/nfpjdyaz.json"
                                trigger="loop"
                                state="loop-roll"
                                colors="primary:#00f0ff,secondary:#ff2d75"
                                style={{ width: "50px", height: "50px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.heroImg}
                        src={getImageUrl("hero/riya-photo1.jpg")}
                        alt="Hero-Image"
                    />
                    <div className={styles.glowEffect}></div>
                </div>
            </section>
        </ div>
    );
};

export default Hero;
