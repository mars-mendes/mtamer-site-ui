"use client";

import styles from "./CardGroup.module.scss";
import { useEffect, useRef, useState, useContext } from "react";
import { ModalContext } from "../../page.js";

export default function CardGroup(content) {
  const data = content?.content;
  const categories = content?.content.especsData;
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const [columns, setColumns] = useState(4); // Default column count
  const { setIsOpen, setSelectedCard, setModalType } = useContext(ModalContext);
  const [gridHeight, setGridHeight] = useState(0); // Height of the card grid

  useEffect(() => {
    // Update columns based on screen size (Bootstrap grid classes)
    const updateColumns = () => {
      const width = window.innerWidth;

      // Determine how many columns should be visible based on screen width
      if (width >= 1200) setColumns(4); // lg (large devices)
      else if (width >= 992) setColumns(2); // md (medium devices)
      else if (width <= 768) setColumns(2); // sm (small devices)
      else if (width <= 520) setColumns(4); // xsm (extra small devices)
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    // Calculate the height of the card grid
    if (wrapperRef.current) {
      const cardHeight = wrapperRef.current.querySelector(`.${styles.card}`)?.offsetHeight || 0;
      const rowCount = Math.ceil(categories.length / columns);
      const totalHeight = cardHeight * rowCount;
      setGridHeight(totalHeight);
    }
  }, [columns, categories.length]);

  const handleClick = (item) => {
    setIsOpen(true);
    setSelectedCard(item);
    setModalType("praticas");
  };

  // Add empty placeholder cards to the last row
  const totalCards = categories.length;
  const remainder = totalCards % columns;
  const placeholderCards = remainder > 0 ? columns - remainder : 0;

  return (
    <div className={styles.CardGroup} style={{ marginBottom: "4%" }}>
      <div className={`row ${styles.CardGroupTitleWrapper}`}>
        <p className={`col-2 ${styles.CardGroupTitle}`}>{data.title}</p>
      </div>
      <div className={styles.content}>
        {/* Background image container */}
        <div
          className={styles.backgroundImage}
          style={{ height: gridHeight }} // Constrain height to the card grid
        ></div>
        {/* Cards container */}
        <div className={`row ${styles.cardWrapper}`} ref={wrapperRef}>
          {/* Render actual cards */}
          {categories.map((item, i) => {
            const isFirstColumn = i % columns === 0;
            const isLastColumn = (i + 1) % columns === 0;
            const isFirstRow = i < columns;
            const isLastCard = i === categories.length - 1;
            const isSecondColumn = i % columns === 1;

            let borderStyle = {};
            if (isFirstColumn) borderStyle.borderLeft = "1px solid white";
            if (isFirstColumn && columns > 2) borderStyle.borderRight = "1px solid white";
            if (isSecondColumn && columns > 2) borderStyle.borderRight = "1px solid white";
            if (isLastColumn) borderStyle.borderRight = "1px solid white";
            if (isLastCard) borderStyle.borderRight = "1px solid white";
            if (isLastColumn) borderStyle.borderLeft = "1px solid white";
            if (isFirstRow) borderStyle.borderTop = "1px solid white";
            borderStyle.borderBottom = "1px solid white"; // Every card gets bottom border

            return (
              <div
                key={i}
                className={`col-${12 / columns} ${styles.card}`}
                ref={(el) => (cardRefs.current[i] = el)}
                onClick={() => handleClick(item)}
                style={borderStyle}
              >
                {/* Card content */}
                <div className={styles.cardContent}>{item.title}</div>
                <span className={styles.arrow}>→</span>
              </div>
            );
          })}

          {/* Render placeholder cards */}
          {Array.from({ length: placeholderCards }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className={`col-${12 / columns} ${styles.card} ${styles.placeholderCard}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}