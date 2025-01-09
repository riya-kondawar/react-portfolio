import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftText} >
        <h2 className={styles.title} >Projects</h2>
        <p className={styles.description}>
          Check out my projects here...
        </p>
      </div>
      <div className={styles.gallery} >
        <div
          className={`${styles.box} ${styles["row-2"]}`}
          style={{ backgroundImage: `url(${getImageUrl('projects/project.png')})` }}
        >Project1</div>

        <div
          className={`${styles.box} ${styles["col-2"]}`}
          style={{ backgroundImage: `url(${getImageUrl('projects/project.png')})` }}
        >Project2</div>

        <div
          className={`${styles.box} ${styles["col-3"]}`}
          style={{ backgroundImage: `url(${getImageUrl('projects/project.png')})` }}
        >Project3</div>

        <div
          className={`${styles.box} ${styles["row-2"]}`}
          style={{ backgroundImage: `url(${getImageUrl('projects/project.png')})` }}
        >Project4</div>

        <div
          className={`${styles.box} ${styles["col-2"]}`}
          style={{ backgroundImage: `url(${getImageUrl('projects/project.png')})` }}
        >Project5</div>

        <div
          className={`${styles.box} ${styles["col-3"]}`}
          style={{ backgroundImage: `url(${getImageUrl('projects/project.png')})` }}
        >Project6</div>

        <div
          className={`${styles.box} ${styles["col-2"]}`}
          style={{ backgroundImage: `url(${getImageUrl('projects/project.png')})` }}
        >Project7</div>

      </div>
    </section>
  )
}

export default Projects
