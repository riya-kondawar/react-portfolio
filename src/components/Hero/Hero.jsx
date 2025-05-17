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








// import { useEffect, useRef, useState } from 'react';
// import { getImageUrl } from "../../utils";
// import styles from "./Hero.module.css";
// import song from './rick.mp3';
// import { FaEnvelope, FaFileDownload } from 'react-icons/fa';

// const Hero = () => {
//     const [audioPlaying, setAudioPlaying] = useState(false);
//     const audioRef = useRef(null);
//     const [typedText, setTypedText] = useState('');
//     const fullText = "Data Analyst | Web Developer";
//     const [cursorVisible, setCursorVisible] = useState(true);

//     useEffect(() => {
//         // Typing animation
//         let i = 0;
//         const typingInterval = setInterval(() => {
//             if (i < fullText.length) {
//                 setTypedText(fullText.substring(0, i + 1));
//                 i++;
//             } else {
//                 clearInterval(typingInterval);
//                 // Start cursor blink after typing completes
//                 setInterval(() => {
//                     setCursorVisible(prev => !prev);
//                 }, 500);
//             }
//         }, 100);

//         return () => clearInterval(typingInterval);
//     }, []);

//     const handleAudio = () => {
//         if (!audioRef.current) {
//             audioRef.current = new Audio(song);
//             audioRef.current.loop = true;
//         }

//         if (audioPlaying) {
//             audioRef.current.pause();
//         } else {
//             audioRef.current.play().catch(error => {
//                 console.log("Audio playback error:", error);
//             });
//         }
//         setAudioPlaying(!audioPlaying);
//     };

//     return (
//         <section id="hero" className={styles.container}>
//             <div className={styles.content}>
//                 <h1 className={styles.title}>
//                     <span className={styles.wave}>👋</span> Hello!
//                 </h1>
//                 <div className={styles.location}>
//                     <span className={styles.pin}>📍</span> Pune, India
//                 </div>
//                 <p className={styles.description}>
//                     I'm <span className={styles.highlight}>Riya</span>, a passionate
//                 </p>
//                 <p className={styles.typing}>
//                     {typedText}
//                     <span className={`${styles.cursor} ${cursorVisible ? styles.visible : ''}`}>|</span>
//                 </p>
//                 <p className={styles.subtext}>
//                     I bring ideas to life on the web with modern technologies and creative solutions.
//                 </p>
//                 <div className={styles.buttons}>
//                     <a
//                         className={styles.contactBtn}
//                         href="mailto:riya.kondawar@gmail.com"
//                         aria-label="Contact me via email"
//                     >
//                         <FaEnvelope /> Contact Me
//                     </a>
//                     <a
//                         className={styles.resumeBtn}
//                         href="/RiyaResume-DataAnalyst-FSD.pdf"
//                         download="RiyaKondawar-Resume.pdf"
//                         aria-label="Download resume"
//                     >
//                         <FaFileDownload /> Resume
//                     </a>
//                     <button
//                         className={`${styles.musicBtn} ${audioPlaying ? styles.playing : ''}`}
//                         onClick={handleAudio}
//                         aria-label={audioPlaying ? "Stop music" : "Play music"}
//                     >
//                         {audioPlaying ? '🔊' : '🔈'}
//                     </button>
//                 </div>
//             </div>
//             <img
//                 className={styles.heroImg}
//                 src={getImageUrl("hero/heroImage.png")}
//                 alt="Riya Kondawar - Web Developer"
//                 loading="eager"
//             />
//             <div className={styles.scrollIndicator}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//         </section>
//     );
// };

// export default Hero;





// // original 1st
// import { getImageUrl } from "../../utils";
// import styles from "./Hero.module.css";
// import song from './rick.mp3'

// const Hero = () => {
//     const handleClick = (e) => {
//         // e.preventDefault()
//         let sound = new Audio(song)
//         sound.play().catch(error => {
//             console.log("Error playing audio", error);
//         })
//     }

//     return (
//         <section className={styles.container}>

//             <div className={styles.content} >
//                 <h1 className={styles.title} >Hello!</h1>
//                 {/* <div className={styles.location}>
//                     Pune, India
//                 </div> */}
//                 <p
//                     className={styles.description}>
//                     I'm <b>Riya</b>, from 📍Pune <br />
//                     Data Analyst | Web developer <br />
//                     Who brings ideas to life on the web💻. <br />
//                     I craft seamless user experiences with React.js, and build reliable backends using Node.js. <br />

//                 </p>
//                 <div className={styles.buttons} >
//                     <a
//                         className={styles.Btn1}
//                         href="mailto:riya.kondawar@gmail.com">
//                         Contact Me
//                     </a>
//                     <a
//                         className={styles.Btn2}
//                         href="/RiyaResume-DataAnalyst-FSD.pdf"
//                         download="RiyaKondawar-Resume.pdf">
//                         Resume
//                     </a>
//                     <lord-icon
//                         src="https://cdn.lordicon.com/nfpjdyaz.json"
//                         trigger="loop"
//                         state="loop-roll"
//                         colors="primary:#576cbc,secondary:#fff"
//                         style={{ width: "40px", height: "40px" }}
//                         onClick={(e) => handleClick()}
//                     >
//                     </lord-icon>
//                 </div>
//             </div>
//             <img
//                 className={styles.heroImg}
//                 src={getImageUrl("hero/heroImage.png")}
//                 alt="Hero-Image"
//             />
//             <div className={styles.topBlur} />
//             <div className={styles.bottomBlur} />
//         </section>
//     );
// };

// export default Hero;
