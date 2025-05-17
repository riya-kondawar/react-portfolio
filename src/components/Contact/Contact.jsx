import styles from './Contact.module.css';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
      <h2 className={styles.title}>Get in <span className={styles.highlight}>Touch</span></h2>
      
      <div className={styles.container}>
        {/* Contact Info Cards */}
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={`${styles.card} ${styles.cardHover}`}>
              <div className={styles.iconWrapper}>
                <FaEnvelope className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Email</h3>
              <a 
                href="mailto:riya.kondawar@gmail.com" 
                className={styles.cardButton}
                aria-label="Send email to riya.kondawar@gmail.com"
              >
                <span className={styles.cardData}>riya.kondawar@gmail.com</span>
              </a>
            </div>

            <div className={`${styles.card} ${styles.cardHover}`}>
              <div className={styles.iconWrapper}>
                <FaPhone className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Phone</h3>
              <a 
                href="tel:+918421946836" 
                className={styles.cardButton}
                aria-label="Call +91 8421946836"
              >
                <span className={styles.cardData}>+91 8421946836</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.content}>
          <h3 className={styles.contentTitle}>Write Me Your <span className={styles.highlight}>Project</span></h3>
          <form 
            action="https://formspree.io/f/mnndwoaz"
            method="POST"
            className={styles.form}
          >
            <input type="hidden" name="_subject" value="New portfolio message!" />
            
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="Your Name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="Your Email"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Your Message"
                defaultValue="Hi, I'm interested in working with you. Let's connect!"
                required
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className={styles.button}>
              <FaPaperPlane className={styles.buttonIcon} /> 
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
