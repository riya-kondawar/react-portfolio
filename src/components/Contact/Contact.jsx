// import React from 'react'

// const Contact = () => {
//   return (
//     <section className={styles.contact}>
//         <h2 className={styles.title}>Get in touch</h2>
//         <span className={styles.subtitle}>Contact Me</span>
//         <div className={styles.container}>
//             <div className={styles.content}>
//                 <h3 className={styles.contentTitle}>Talk to me</h3>
//                 <div className={styles.contactInfo}>
//                     <div className={styles.card}>
//                         <i></i>
//                         <h3 className={styles.cardTitle}></h3>
//                         <span className={styles.cardData}></span>

//                         <a href="#" ></a>
//                     </div> 
//                 </div>
//             </div>
//             <div className={styles.content}>
//                 <h3 className={styles.contentTitle}>Write me your project</h3>
//             </div>

//         </div>

//     </section>
//   )
// }

// export default Contact









import React from 'react';
import styles from './Contact.module.css'; // Ensure this path is correct

const Contact = () => {
    return (
        <section className={styles.contact} id='contact'>
            <h2 className={styles.title}>Get in Touch</h2>
            {/* <span className={styles.subtitle}>Contact Me</span> */}
            <div className={styles.container}>
                {/* Talk to Me Section */}
                <div className={styles.content}>
                    {/* <h3 className={styles.contentTitle}>Talk to Me</h3> */}
                    <div className={styles.contactInfo}>
                        <div className={styles.card}>
                            <i className={`${styles.icon} fa fa-envelope`}></i>
                            <h3 className={styles.cardTitle}>Email</h3>
                            <a href="mailto:riya.kondawar@gmail.com" className={styles.cardButton}>
                                <span className={styles.cardData}>riya.kondawar@gmail.com</span>
                            </a>
                        </div>

                        <div className={styles.card}>
                            <i className={`${styles.icon} fa fa-phone`}></i>
                            <h3 className={styles.cardTitle}>Phone</h3>
                            <a href="+91 8421946836" className={styles.cardButton}>
                            <span className={styles.cardData}>Call Me</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Write Me Section */}
                <div className={styles.content}>
                    <h3 className={styles.contentTitle}>Write Me Your Project</h3>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                className={styles.input}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                className={styles.input}
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                className={styles.textarea}
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.button}>Send Message</button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
