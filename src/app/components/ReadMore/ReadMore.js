import { useState, useEffect, useRef } from "react";
import styles from "./ReadMore.module.scss"; // Assuming you're using SCSS

const ReadMore = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        // Check if it's mobile
        const checkMobile = () => setIsMobile(window.innerWidth <= 1100);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const firstParagraph = text.split("\n")[0]; // Assuming paragraphs are separated by line breaks

    return (
        <div className={`${styles.readMoreContainer}`}>
                <p ref={textRef} className={isExpanded || !isMobile ? styles.fullText : styles.collapsedText}>
                    {isExpanded || !isMobile ? text : firstParagraph}
                </p>
            {isMobile && !isExpanded && (
                <button className={`d-flex justify-content-between align-items-center ${styles.readMoreButton}`} onClick={() => setIsExpanded(true)}>
                    <span className={`text-start ${styles.text}`}>
                        Ler Mais
                    </span>
                    <span className={`text-end ${styles.plus}`}>
                        +
                    </span>
                </button>
            )}
            {isMobile && isExpanded && (
                <button
                    className={`d-flex justify-content-between align-items-center ${styles.readMoreButton}`}
                    onClick={() => setIsExpanded(false)}>
                    <span className={`text-start ${styles.text}`}>
                        Ler Menos
                    </span>
                    <span className={`text-end ${styles.plus}`}>
                        +
                    </span>

                </button>
            )}
        </div>
    );
};

export default ReadMore;