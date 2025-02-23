import { useContext } from "react";
import { ModalContext } from "../../page";
import styles from "./Modal.module.scss";


export default function Modal(content) {
    const data = content?.content;
    const { setIsOpen, modalType, selectedCard } = useContext(ModalContext);
    const topics = selectedCard?.content?.topics;
    const copy = selectedCard?.content?.copy;
    const bio = data.profile?.bio;
    const grad = data.profile?.grad;
    const rec = data.profile?.recognition;
    const handleReturn = () => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    }

    const labels = [
        {
            label: "Quem somos",
            url: "#quem-somos"
        },
        {
            label: "Práticas",
            url: "#praticas"
        },
        {
            label: "Equipe",
            url: "#equipe"
        },
        {
            label: "Conteúdo",
            url: "#conteudo"
        },
        {
            label: "Responsabilidade",
            url: "#responsabilidade"
        },
        {
            label: "Contato",
            url: "#contato"
        }
    ]

    return (
        <div className={`${styles.modalWrapper}`}>
            <div className={styles.backgroundWrapper}>
                {modalType != "menu" ? (
                    <div className={`row ${styles.modalActions}`}>
                        <div className={`col-lg-10 ${styles.homeLink}`} >
                            <a onClick={() => handleReturn()} href="/">
                                Voltar para página inicial
                            </a>
                        </div>
                        <div className={`col-lg-2 ${styles.close}`} onClick={() => handleReturn()}>
                            <img src="/exit_icon.svg" />
                            {/* <img src="/mtamer-site-ui/exit_icon.svg" /> */}
                        </div>
                    </div>
                ) : (
                    <div className={`row ${styles.menuActions}`}>
                        <div className={`${styles.homeLink} col-lg-7 col-md-3 col-sm-2`} onClick={() => setIsOpen(false)} href="/">
                            <img src="/vector.svg" className={styles.logoSmall} />
                            {/* <img src="/mtamer-site-ui/vector.png" className={styles.logoSmall} /> */}
                        </div>
                        <div className={`col-lg-2 col-md-3 col-sm-1 ${styles.close}`} onClick={() => handleReturn()}>
                            <img src="/exit_icon.svg" />
                            {/* <img src="/mtamer-site-ui/exit_icon.svg" /> */}
                        </div>
                    </div>
                )}
                <div className={`row ${styles.modal}`}>
                    {modalType === "praticas" ? (
                        <>
                            {topics ? (
                                <div className={`col-lg-2 ${styles.toc}`}>
                                    {topics.map((topic, i) => {
                                        return (
                                            <p key={i}>
                                                <a href={`#${topic.id}`}>{topic.shortTitle ? topic.shortTitle : topic.title}</a>
                                            </p>
                                        )
                                    })}
                                </div>
                            ) : <div className="col-lg-2"></div>}
                            <div className={`col-lg-10 col-md-8 col-sm-4 ${styles.contentWrapper}`}>
                                <div className={`col-lg-6 col-md-8 col-sm-4 ${styles.textWrapper}`}>
                                    <p className={styles.modalTitle}>
                                        {selectedCard.content.fullTitle ? selectedCard.content.fullTitle : selectedCard.title}
                                    </p>
                                    <div className={styles.imgMobile}>
                                        <img src={selectedCard.imageSrc} />
                                        {/* <img src="/mtamer-site-ui/placeholderPic.png" /> */}
                                    </div>
                                    {copy.split("\n").map((line, i) => (
                                        <p key={i} className={styles.copy}>{line}</p>
                                    ))}
                                    {topics ? (
                                        topics.map((topic, i) => {
                                            return (
                                                <div key={i}>
                                                    <a id={`${topic.id}`} className="anchor" />
                                                    <div className={styles.topics}>
                                                        <h5>{topic.title}</h5>
                                                        {topic.copy.split("\n").map((line, i) => (
                                                            <p key={i} className={styles.copy}>{line}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : ""
                                    }
                                </div>
                                <div className={`col-lg-1`}></div>
                                <img className={`col-lg-4  ${styles.imgDesktop}`} src={selectedCard.imageSrc} />
                                {/* <img src="/mtamer-site-ui/placeholderPic.png" /> */}
                            </div>
                        </>
                    ) : modalType === "profile" ? (
                        <div className={styles.profile}>
                            <div className={`col-lg-2 col-md-8 col-sm-4 ${styles.empty}`}>
                            </div>
                            <div className={`col-lg-10 col-md-8 col-sm-4 ${styles.contentWrapper}`}>
                                <div className={`col-lg-7 col-md-8 col-sm-4 ${styles.textWrapper}`}>
                                    {console.log(data)}
                                    <p className={`row ${styles.profileData}`}>
                                        <span>{data.profile.name}</span>
                                        <span className={styles.role}>
                                            {data.profile.role}
                                        </span>
                                    </p>
                                    {bio.split("\n").map((line, i) => (
                                        <p key={i} className={styles.copy}>{line}</p>
                                    ))}
                                    <div className={styles.gradWrapper}>
                                        <p className={styles.boldLabel}>{grad.label}</p>
                                        <ul>
                                            {grad.items.map((item, i) => {
                                                return <li key={i}>{item}</li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className={styles.recWrapper}>
                                        <p className={styles.boldLabel}>{rec.label}</p>
                                        <ul>
                                            {rec.items.map((item, i) => {
                                                return <li key={i}>{item}</li>
                                            })}
                                        </ul>

                                    </div>
                                </div>
                                <div className={`col-lg-1`}></div>
                                <div className={`col-lg-4 ${styles.imgDesktop}`}>
                                    <img src={data.profile.picture} />
                                    {/* <img src="/mtamer-site-ui/placeholderPic.png" /> */}
                                </div>
                            </div>
                        </div>
                    ) : modalType === "menu" ? (
                        <div className={`container ${styles.menuContainer}`}>
                            {labels.map((item, i) => {
                                const border = i === labels.length - 1 ? '1px solid black' : 'none';
                                console.log(i, labels.length)
                                return (
                                    <a key={i} href={item.url} className={`row ${styles.menuLinks}`} onClick={() => setIsOpen(false)} style={{ borderBottom: border }}>{item.label}</a>
                                )
                            })}
                        </div>
                    ) : null
                    }
                </div>
            </div>
        </div>
    )
}