import { useState, useEffect, useRef } from 'react';
import styles from './ScrambleText.module.css';

const ScrambleText = () => {
    const sentences = [
        "Hello, world! Welcome to Riya's portfolio.",
        "Hey there, Nice to meet you!!",
        "Stay curious and keep learning every day.",
        "It's a cool portfolio, isn't it??",
        "I'm always happy to chat, so email me for anything",
        "Buy me a coffee??",
        "BTW, click on the gift box for a lil fun :)"
    ];

    const [scrambledText, setScrambledText] = useState(sentences[0]);
    const sentenceIndexRef = useRef(0);

    useEffect(() => {
        const scrambleText = (text) => {
            return text
                .split("")
                .map(() => String.fromCharCode(Math.random() * (126 - 32) + 32))
                .join("");
        };

        const displaySentence = () => {
            let i = 0;
            const currentSentence = sentences[sentenceIndexRef.current];

            const interval = setInterval(() => {
                if (i < 10) {
                    setScrambledText(scrambleText(currentSentence));
                } else {
                    clearInterval(interval);
                    setScrambledText(currentSentence);
                    sentenceIndexRef.current = (sentenceIndexRef.current + 1) % sentences.length;
                }
                i++;
            }, 50);
        };

        const intervalId = setInterval(displaySentence, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.container}>
            <span className={styles.scrambleText}>{scrambledText}</span>
        </div>
    );
};

export default ScrambleText;



// import React, { useState, useEffect, useRef } from 'react';
// import styles from './ScrambleText.module.css';

// const ScrambleText = () => {
//     const sentences = [
//         "Hello, world! Welcome to Riya's portfolio.",
//         "Hey there, Nice to meet you!!",
//         "Stay curious and keep learning every day.",
//         "It's a cool portfolio, isn't it??",
//         "I'm always happy to chat, so email me for anything",
//         "Buy me a coffee??",
//         "BTW, click on the gift box for a lil fun :)"
//     ];

//     const [scrambledText, setScrambledText] = useState(sentences[0]);
//     const sentenceIndexRef = useRef(0); // Use a ref to keep track of the current sentence index

//     useEffect(() => {
//         const scrambleText = (text) => {
//             return text
//                 .split("")
//                 .map(() => String.fromCharCode(Math.random() * (126 - 32) + 32))
//                 .join("");
//         };

//         const displaySentence = () => {
//             let i = 0;
//             const currentSentence = sentences[sentenceIndexRef.current];

//             const interval = setInterval(() => {
//                 if (i < 10) {
//                     setScrambledText(scrambleText(currentSentence));
//                 } else {
//                     clearInterval(interval);
//                     setScrambledText(currentSentence);

//                     // Move to the next sentence
//                     sentenceIndexRef.current = (sentenceIndexRef.current + 1) % sentences.length;
//                 }
//                 i++;
//             }, 50);
//         };

//         const intervalId = setInterval(displaySentence, 3000);

//         return () => clearInterval(intervalId); // Cleanup interval on unmount
//     }, [sentences]);

//     return (
//         <div className={styles.container}>
//             <span className={styles.scrambleText}>{scrambledText}</span>
//         </div>
//     );
// };

// export default ScrambleText;
