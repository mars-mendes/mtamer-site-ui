// Grid.tsx (React + Next.js)
import styles from "./CardGroup.module.scss";

export default function CardGroup(content) {
    const categories = content?.content;

    return (
        <div className={styles.cardGroup}>
            <div className={`row ${styles.backgroundImage}`}>
                {categories.map((item, i) => {
                    return (
                        <div key={i} className={`col-3 ${styles.card}`} id="mask"> {item.title} </div>
                    );
                })}
            </div>
        </div>
    );
}
