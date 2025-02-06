"use client"

import styles from "./CardGroup.module.scss";
import { useEffect, useRef, useState, useContext } from "react";
import { ModalContext } from "../../page";

export default function CardGroup(content) {
    const data = content?.content;
    const categories = content?.content.especsData;
    const wrapperRef = useRef(null);
    const cardRefs = useRef([]);
    const [mask, setMask] = useState("none");
    const { setIsOpen, setSelectedCard, setModalType } = useContext(ModalContext);

    useEffect(() => {
        function updateMask() {
            if (!wrapperRef.current || cardRefs.current.length === 0) return;

            let maskShape = "";
            cardRefs.current.forEach((card) => {
                if (card) {
                    const rect = card.getBoundingClientRect();
                    const x = rect.left;
                    const y = rect.top;
                    const w = rect.width;
                    const h = rect.height;
                    maskShape += `rect(${y}px, ${x + w}px, ${y + h}px, ${x}px), `;
                }
            });

            maskShape = `polygon(0 0, 100% 0, 100% 100%, 0% 100%) subtract ${maskShape.slice(0, -2)}`;
            const svgMask = encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <mask id="mask" x="0" y="0" width="100%" height="100%">
                    <rect width="100%" height="100%" fill="white"/>
                    <path d="${maskShape}" fill="black"/>
                </mask>
                <rect width="100%" height="100%" fill="black" mask="url(#mask)"/>
            </svg>
        `);

            // Apply the mask-image with the dynamically generated SVG mask
            setMask(`url("data:image/svg+xml,${svgMask}")`);
        }

        window.addEventListener("resize", updateMask);
        updateMask(); // Initial call

        return () => window.removeEventListener("resize", updateMask);
    }, []);

    const handleClick = (item) => {
        setIsOpen(true);
        setSelectedCard(item);
        setModalType("praticas");
        window.scrollTo(0, 0);
    }

    return (
        <div className={styles.cardGroup} style={{ marginBottom: '4rem' }}>
            <div className={`row ${styles.cardGroupTitleWrapper}`}>
                <p className={`col-2 ${styles.cardGroupTitle}`}>
                    {data.title}
                </p>
            </div>
            <div className={`${styles.content}`}>
                <img src="/background.jpeg" className={styles.backgroundImage} />
                <div className={`row ${styles.cardWrapper}`} ref={wrapperRef} style={{ maskImage: mask }}>
                    {categories.map((item, i) => {
                        return (
                            <div key={i} className={`col-3 ${styles.card}`} ref={(el) => (cardRefs.current[i] = el)} onClick={() => handleClick(item) }> {item.title} </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
