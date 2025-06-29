import styles from "./Footer.module.scss";

export default function Footer(content) {
    const data = content?.content;

    return (
        <>
            <div className={`row ${styles.footer}`}>
                <div className={`offset-lg-1 col-lg-5 col-12 ${styles.contentWrapper}`}>
                    <div className={`row ${styles.logos}`}>
                        {/* <img src="/mtamer-site-ui/logo-full.svg" className={styles.smallLogo}/> */}
                        <img src="/footer.svg" className={`col-lg-8 col-5 ${styles.mainLogo}`} />
                    </div>
                    <div className={`row text-start ${styles.content}`}>
                        <div className={`offset-lg-2 col-12 ${styles.contactUsContent}`}>
                            <div className={`row ${styles.contactUsLinks}`}>
                                <hr className={`${styles.line}`} />
                                <p>{data.end}</p>
                                <span className={`${styles.tel} ${styles.link}`}>
                                    {data.telefone}
                                </span>
                                <span className={styles.link}>
                                    {data.email}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1 p-0" style={{maxWidth: "1rem"}}/>
                <div className={`col-lg-4 col-md-6 col-12 ${styles.map}`}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313.424173512322!2d-46.692375454047216!3d-23.578781815151235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b62131a36f%3A0xe886b00ddfd64f1d!2sEdif%C3%ADcio%20Seculum%20Building!5e0!3m2!1spt-BR!2sbr!4v1738833867766!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0, aspectRatio: "1/1", paddingRight: "1rem" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}