import { useState, useEffect } from 'react';
import styles from '/styles/TypingEffect.module.css';

const TypingEffect = ({ textArray, speed }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < textArray.length) {
                setCurrentText((prev) => prev + textArray[currentIndex].charAt(0));
                textArray[currentIndex] = textArray[currentIndex].substring(1);
                if (textArray[currentIndex].length === 0) {
                    setCurrentIndex((prev) => prev + 1);
                }
            }
        }, speed);

        return () => clearInterval(interval);
    }, [currentIndex, currentText, textArray, speed]);

    return <span className={styles.typingEffect}>{currentText}</span>;
};

export default TypingEffect;