import styles from "./Awards.module.scss"

const Awards = (content) => {
    const data = content.content;

    return (
        <div className={`container-fluid row ${styles.awardsContainer}`}>
            <div className="row">
                <div className={`col-lg-2  col-md-8 col-sm-4 ${styles.title}`}> {data.title} </div>
                <div className={`row ${styles.titleMobile}`}>
                    <span className={styles.titleString}>
                        {data.title}
                    </span>
                </div>
                <div className={`col-lg-10 container-fluid ${styles.cardAwardsWrapper}`}>
                    <div className="row">
                        {data.cards.map((card, i) => {
                            return (
                                <div className={`col-lg-4 ${styles.cardAwards}`} key={i}>
                                    <div className={`row p-3 ${styles.cardAwardsContent}`}>
                                        <strong>{card.title}</strong><br/>
                                        <span className="align-top">{card.description}</span>
                                    </div>
                                    <div className={`row p-3 ${styles.imageWrapper}`}>
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