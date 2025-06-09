import styles from "./TextGrid.module.scss";
import { useContext } from "react";
import { ModalContext } from "../../page.js";
import ReadMore from "../ReadMore/ReadMore";

export default function TextGrid(content) {
    const data = content?.content;
    const labels = data.labels;
    const { setIsOpen, setModalType } = useContext(ModalContext);

    const handleProfile = () => {
        setIsOpen(true);
        setModalType("profile")
    }

    return (
        <>
            <div className={`row ${styles.textGrid}`}>
                <div className={`col-lg-2  col-12 ${styles.title}`}> {data.title} </div>
                <div className={`row ${styles.titleMobile}`}>
                    <span className={styles.titleString}>
                        {data.title}
                    </span>
                </div>
                {data.type === 'article' ?
                    (<div className={`col-xl-8 col-12 ${styles.contentWrapper}`}>
                        <div className={`col-lg-6 col-12 ${styles.quote}`}> {data.quote} </div>
                        <div className={`col-lg-6 col-12 ${styles.textContent}`}>
                            {data.content.split("\n").map((line, i) => (
                                <p key={i} className={styles.copy}>{line}</p>
                            ))}
                        </div>
                        <div className={`col-lg-6 col-12 ${styles.textReadMore}`}>
                            <ReadMore className={styles.copy} text={data.content} />
                        </div>
                    </div>)
                    : data.type === 'profile' ?
                        (<div className={`col-xl-8 col-12 ${styles.profileWrapper}`}>
                            <div className={`col-lg-6 col-12 ${styles.profileContent}`}>
                                <p className={`row ${styles.profileData}`}>
                                    <b>{data.profile.name}</b>
                                    <span>
                                        {data.profile.role}
                                    </span>
                                </p>
                                <div className={`row ${styles.profileBio}`} onClick={() => handleProfile()}>
                                    <span className={styles.bio}>
                                        {labels.bioLabel} ↔
                                    </span>
                                </div>
                                <div className={`row ${styles.profileLinks}`}>
                                    <a className={styles.link} target="_blank" href={data.profile.linkedin}>
                                        {labels.linkedinLabel}
                                    </a>
                                    <a className={styles.link} target="_blank" href={data.profile.lattes}>
                                        {labels.lattesLabel}
                                    </a>
                                </div>
                            </div>
                            <img className={`col-lg-6 col-6 ${styles.profilePic}`} src={`${data.profile.picture}`} />
                            {/* <img src={`/mtamer-site-ui${data.profile.picture}`} /> */}
                        </div>)
                        : null}

            </div>
        </>
    )
}