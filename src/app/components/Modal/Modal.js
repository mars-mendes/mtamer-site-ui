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

    return (
        <div className={`${styles.modalWrapper}`}>
            <div className={styles.backgroundWrapper}>
                <div className={`row ${styles.modalActions}`}>
                    <div className={`col-lg-10 ${styles.homeLink}`} >
                        <a onClick={() => handleReturn()} href="/">
                            Voltar para página inicial
                        </a>
                    </div>
                    <div className={`col-lg-2 ${styles.close}`} onClick={() => handleReturn()}>X</div>
                </div>
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
                            ) : ""}
                            <div className={`col-lg-10 ${styles.contentWrapper}`}>
                                <div className={`col-lg-7 ${styles.textWrapper}`}>
                                    <p className={styles.modalTitle}>
                                        {selectedCard.content.fullTitle ? selectedCard.content.fullTitle : selectedCard.title}
                                    </p>
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
                                <div className={`col-lg-3`}>
                                    {/* <img src="/placeholderPic.png" /> */}
                                    <img src="/mtamer-site-ui/placeholderPic.png" />
                                </div>
                            </div>
                        </>
                    ) : modalType === "profile" ? (
                        <div className={styles.profile}>
                            <div className={`col-lg-2 ${styles.empty}`}>
                            </div>
                            <div className={`col-lg-10 ${styles.contentWrapper}`}>
                                <div className={`col-lg-7 ${styles.textWrapper}`}>
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
                                <div className={`col-lg-3`}>
                                    {/* <img src="/placeholderPic.png" /> */}
                                    <img src="/mtamer-site-ui/placeholderPic.png" />
                                </div>
                            </div>
                        </div>
                    ) : null
                    }
                </div>
            </div>
        </div>
    )
}