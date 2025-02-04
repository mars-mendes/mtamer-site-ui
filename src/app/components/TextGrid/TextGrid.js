import styles from "./TextGrid.module.scss";

export default function TextGrid(content) {
    const data = content?.content;
    return (
        <>
            <div className={`row ${styles.textGrid}`}>
                <div className={`col-2 ${styles.title}`}> {data.title} </div>
                <div className={`col-4 ${styles.quote}`}> {data.quote} </div>
                <div className={`col-4 ${styles.textContent}`}>
                    {data.content.split("\n").map((line,i) => (
                        <p key={i} className={styles.copy}>{line}</p>
                    ))}
                </div>
            </div>
        </>
    )
}