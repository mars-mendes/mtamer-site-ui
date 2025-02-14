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
    const [columns, setColumns] = useState(4); // Default column count
    const { setIsOpen, setSelectedCard, setModalType } = useContext(ModalContext);

    // useEffect(() => {
    //     function updateMask() {
    //         if (!wrapperRef.current || cardRefs.current.length === 0) return;

    //         let maskShape = "";
    //         cardRefs.current.forEach((card) => {
    //             if (card) {
    //                 const rect = card.getBoundingClientRect();
    //                 const x = rect.left;
    //                 const y = rect.top;
    //                 const w = rect.width;
    //                 const h = rect.height;
    //                 maskShape += `rect(${y}px, ${x + w}px, ${y + h}px, ${x}px), `;
    //             }
    //         });

    //         maskShape = `polygon(0 0, 100% 0, 100% 100%, 0% 100%) subtract ${maskShape.slice(0, -2)}`;
    //         const svgMask = encodeURIComponent(`
    //         <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    //             <mask id="mask" x="0" y="0" width="100%" height="100%">
    //                 <rect width="100%" height="100%" fill="white"/>
    //                 <path d="${maskShape}" fill="black"/>
    //             </mask>
    //             <rect width="100%" height="100%" fill="black" mask="url(#mask)"/>
    //         </svg>
    //     `);

    //         // Apply the mask-image with the dynamically generated SVG mask
    //         setMask(`url("data:image/svg+xml,${svgMask}")`);
    //     }

    //     window.addEventListener("resize", updateMask);
    //     updateMask(); // Initial call

    //     return () => window.removeEventListener("resize", updateMask);
    // }, []);

    useEffect(() => {
        // Update columns based on screen size (Bootstrap grid classes)
        const updateColumns = () => {
          const width = window.innerWidth;
    
          // Determine how many columns should be visible based on screen width
          if (width >= 1200) setColumns(4); // lg (large devices)
          else if (width >= 992) setColumns(2); // md (medium devices)
          else if (width <= 768) setColumns(2); // sm (small devices)
          else setColumns(1); // xs (extra small devices)
        };
    
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
      }, []);

    const handleClick = (item) => {
        setIsOpen(true);
        setSelectedCard(item);
        setModalType("praticas");
        window.scrollTo(0, 0);
    }

    return (
        <div className={styles.cardGroup} style={{ marginBottom: '4%' }}>
            <div className={`row ${styles.cardGroupTitleWrapper}`}>
                <p className={`col-2 ${styles.cardGroupTitle}`}>
                    {data.title}
                </p>
            </div>
            <div className={`${styles.content}`}>
                {/* <img src="/background.jpeg" className={styles.backgroundImage} /> */}
                <div className={`row ${styles.cardWrapper}`} ref={wrapperRef} >
                    {categories.map((item, i) => {
                        const isFirstColumn = i % columns === 0;
                        const isLastColumn = (i + 1) % columns === 0;
                        const isFirstRow = i < columns;
                        const isLastCard = i === categories.length - 1;
                        const isSecondColumn = (i % columns === 1);
              
                        let borderStyle = {};
                        if (isFirstColumn) borderStyle.borderLeft = "1px solid gray";
                        if (isFirstColumn && columns > 2) borderStyle.borderRight = "1px solid gray";
                        if (isSecondColumn && columns > 2) borderStyle.borderRight = "1px solid gray";
                        if (isLastColumn) borderStyle.borderRight = "1px solid gray";
                        if (isLastCard) borderStyle.borderRight = "1px solid gray";
                        if (isLastColumn) borderStyle.borderLeft = "1px solid gray";
                        if (isFirstRow) borderStyle.borderTop = "1px solid gray";
                        borderStyle.borderBottom = "1px solid gray"; // Every card gets bottom border
                        // Definetely NOT the best way to approach it, but I also don't know what would be. So we have this :)
                        return (
                            <div key={i} className={`col-${12 / columns} ${styles.card}`} ref={(el) => (cardRefs.current[i] = el)} onClick={() => handleClick(item) } style={borderStyle}> {item.title} </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
