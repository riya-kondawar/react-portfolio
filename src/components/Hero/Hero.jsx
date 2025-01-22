import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import song from './rick.mp3'

const Hero = () => {
    const handleClick = (e) => {
        // e.preventDefault()
        let sound = new Audio(song)
        sound.play().catch(error => {
            console.log("Error playing audio", error);
        })
    }


    return (
        <section className={styles.container}>

            <div className={styles.content} >
                <h1 className={styles.title} >Hello!</h1>
                {/* <div className={styles.location}>
                    Pune, India
                </div> */}
                <p
                    className={styles.description}>
                    I'm <b>Riya</b>, <br />
                    Data Analyst | Web developer <br />
                    Who brings ideas to life on the web💻. <br />
                    I craft seamless user experiences with React.js, and build reliable backends using Node.js. <br />
                </p>
                <div className={styles.buttons} >
                    <a
                        className={styles.Btn1}
                        href="mailto:riya.kondawar@gmail.com">
                        Contact Me
                    </a>
                    <a
                        className={styles.Btn2}
                        href="mailto:riya.kondawar@gmail.com">
                        Resume
                    </a>
                    <lord-icon
                        src="https://cdn.lordicon.com/nfpjdyaz.json"
                        trigger="loop"
                        state="loop-roll"
                        colors="primary:#576cbc,secondary:#fff"
                        style={{ width: "40px", height: "40px" }}
                        onClick={(e) => handleClick()}
                    >
                    </lord-icon>
                </div>
            </div>
            <img
                className={styles.heroImg}
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero-Image"
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};

export default Hero;
