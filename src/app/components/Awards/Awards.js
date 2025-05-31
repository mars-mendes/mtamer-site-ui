import styles from "./Awards.module.scss"

const Awards = (content) => {
    const data = content.content;

    return (
        <div className={`container-fluid row ${styles.awardsContainer}`}>
            <div className="row">
                <div className={`col-lg-2  col-12 ${styles.title}`}> {data.title} </div>
                <div className={` ${styles.titleMobile}`}>
                    <span className={styles.titleString}>
                        {data.title}
                    </span>
                </div>
                <div className={`col-lg-10 col-12 container-fluid ${styles.cardAwardsWrapper}`}>
                    <div className="row">
                        {data.cards.map((card, i) => {
                            const lessMarginClass = i === 0 || i === 2 ? styles.lessMargin : "";
                            return (
                                <div className={`col-lg-5 ${styles.cardAwards} ${lessMarginClass}`} key={i}>
                                    <div className={`${styles.cardAwardsContent}`}>
                                        <b>{card.title}</b><br/>
                                        <span className="align-top">{card.description}</span>
                                    </div>
                                    <div className={`${styles.imageWrapper}`}>
                                        <img className={`${styles.image}`} src={card.img}/> 
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards;