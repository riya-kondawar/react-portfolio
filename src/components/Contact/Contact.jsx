import React from 'react'

const Contact = () => {
  return (
    <section className={styles.contact}>
        <h2 className={styles.title}>Get in touch</h2>
        <span className={styles.subtitle}>Contact Me</span>
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.contentTitle}>Talk to me</h3>
                <div className={styles.contactInfo}>
                    <div className={styles.card}>
                        <i></i>
                        <h3 className={styles.cardTitle}></h3>
                        <span className={styles.cardData}></span>

                        <a href="#" ></a>
                    </div> 
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.contentTitle}>Write me your project</h3>
            </div>

        </div>
      
    </section>
  )
}

export default Contact
