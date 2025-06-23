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
                <div className={`col-xl-10 col-12 container-fluid ${styles.cardAwardsWrapper}`}>
                    <div className="row" style={{gap: "2rem"}}>
                        {data.cards.map((card, i) => {
                            return (
                                <div className={`col-lg-5 col-md-5 col-12 ${styles.cardAwards}`} key={i}>
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