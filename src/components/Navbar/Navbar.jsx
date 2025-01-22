import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from './../../utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h1><a className={styles.title} href="/">Riy@</a></h1>
                <div className={styles.menu}>
                    <img className={styles.menuBtn}
                        src={
                            menuOpen
                                ? getImageUrl("nav/closeIcon.png")
                                : getImageUrl("nav/menuIcon.png")
                        }
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)} />
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <li>
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        {/* <li>
                            <a href="#experience">Experience</a>
                        </li> */}
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
