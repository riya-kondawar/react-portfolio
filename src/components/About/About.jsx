import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

// React Icons
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTableau, SiCplusplus } from "react-icons/si";
import { MdBarChart, MdWeb, MdAnalytics, MdGroup } from "react-icons/md";

const About = () => {
    return (
        <section className={styles.container} id='about'>
            <div className={styles.header}>
                <h2 className={styles.title}>
                    <span className={styles.gradientText}>About Me</span>
                </h2>
                <p className={styles.subtitle}>Data Analyst & Full Stack Developer</p>
            </div>
            <div>
                <div className={styles.content}>
                    <div className={styles.profileSection}>
                        <img
                            className={styles.profileImage}
                            src={getImageUrl("about/riya-photo2.jpg")}
                            alt="Profile"
                        />
                        <div className={styles.profileHighlights}>
                            <div className={styles.highlightItem}>
                                <span>📍</span> Pune, India
                            </div>
                            <div className={styles.highlightItem}>
                                <span>💻</span> 1+ Years Experience with Tech
                            </div>
                        </div>
                    </div>

                    <div className={styles.skillsGrid}>
                        <div className={styles.skillCard}>
                            <div className={styles.skillHeader}>
                                <MdBarChart className={styles.icons} />
                                <h3>Data Analytics</h3>
                            </div>
                            <p>Python, Power BI, Tableau, Machine Learning, Data Visualization</p>
                        </div>

                        <div className={styles.skillCard}>
                            <div className={styles.skillHeader}>
                                <MdWeb className={styles.icons} />
                                <h3>Full-Stack Dev</h3>
                            </div>
                            <p>MERN Stack, REST APIs, Tailwind CSS, Context API, Responsive Design</p>
                        </div>

                        <div className={styles.skillCard}>
                            <div className={styles.skillHeader}>
                                <MdAnalytics className={styles.icons} />
                                <h3>Problem Solving</h3>
                            </div>
                            <p>React.js, MongoDB, TensorFlow, Algorithm Design, System Architecture</p>
                        </div>

                        <div className={styles.skillCard}>
                            <div className={styles.skillHeader}>
                                <MdGroup className={styles.icons} />
                                <h3>Leadership</h3>
                            </div>
                            <p>Media Head at IRIS, Event Management, Team Collaboration, Content Strategy</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* New Skills, Tools & Technologies Section */}
            <div className={styles.skillsTechSection}>
                <h3 className={styles.techTitle}>Skills, Tools & Technologies</h3>
                <div className={styles.techGrid}>
                    <div className={styles.techCard}><SiCplusplus className={styles.icon} /> C++</div>
                    <div className={styles.techCard}><FaReact className={styles.icon} /> React.js</div>
                    <div className={styles.techCard}><FaNodeJs className={styles.icon} /> Node.js</div>
                    <div className={styles.techCard}><SiMongodb className={styles.icon} /> MongoDB</div>
                    <div className={styles.techCard}><FaPython className={styles.icon} /> Python</div>
                    {/* <div className={styles.techCard}><SiPowerbi className={styles.icon} /> Power BI</div> */}
                    <div className={styles.techCard}><SiTableau className={styles.icon} /> Tableau</div>
                    <div className={styles.techCard}><SiTailwindcss className={styles.icon} /> Tailwind CSS</div>
                    <div className={styles.techCard}><FaGitAlt className={styles.icon} /> Git</div>
                    <div className={styles.techCard}><FaDocker className={styles.icon} /> Docker</div>
                    <div className={styles.techCard}><FaDatabase className={styles.icon} /> SQL/NoSQL</div>
                </div>
            </div>

        </section>
    )
}

export default About;