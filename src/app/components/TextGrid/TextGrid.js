import styles from "./TextGrid.module.scss";
import { useContext } from "react";
import { ModalContext } from "../../page";
import ReadMore from "../ReadMore/ReadMore";

export default function TextGrid(content) {
    const data = content?.content;
    const labels = data.labels;
    const { setIsOpen, setModalType } = useContext(ModalContext);

    const handleProfile = () => {
        setIsOpen(true);
        setModalType("profile")
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div className={`row ${styles.textGrid}`}>
                <div className={`col-lg-2  col-md-8 col-sm-4 ${styles.title}`}> {data.title} </div>
                <div className={`row ${styles.titleMobile}`}>
                    <span className={styles.titleString}>
                        {data.title}
                    </span>
                </div>
                {data.type === 'article' ?
                    (<div className={`col-lg-8 col-md-8 col-sm-4 ${styles.contentWrapper}`}>
                        <div className={`col-lg-3 col-md-8 col-sm-4 ${styles.quote}`}> {data.quote} </div>
                        <div className="col-lg-1" />
                        <div className={`col-lg-4 col-md-8 col-sm-4 ${styles.textContent}`}>
                            {data.content.split("\n").map((line, i) => (
                                <p key={i} className={styles.copy}>{line}</p>
                            ))}
                        </div>
                        <div className={`col-lg-6 col-md-8 col-sm-4 ${styles.textReadMore}`}>
                            <ReadMore className={styles.copy} text={data.content} />
                        </div>
                    </div>)
                    : data.type === 'profile' ?
                        (<div className={`col-lg-8 col-md-3 col-sm-4 ${styles.profileWrapper}`}>
                            <div className={`col-lg-6 col-md-6 col-sm-4 ${styles.profileContent}`}>
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
                            <div className="col-lg-1" />
                            <div className={`col-lg-6 col-md-6 col-sm-4 ${styles.profilePic}`}>
                                <img src={`${data.profile.picture}`} />
                                {/* <img src={`/mtamer-site-ui${data.profile.picture}`} /> */}
                            </div>
                        </div>)
                        : null}

            </div>
        </>
    )
}