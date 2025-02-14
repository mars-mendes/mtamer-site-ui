import styles from "./ContactUs.module.scss";

export default function ContactUs(content) {
    const data = content?.content;
    return (
        <>
            <div className={`col-lg-12 col-md-8 col-sm-4 ${styles.contactUs}`}>
                <div className={`col-lg-2 col-md-8 col-sm-4 ${styles.title}`}> {data.title} </div>
                <div className={`col-lg-8 col-md-8 col-sm-4 ${styles.contactUsWrapper}`}>
                    <div className={`col-lg-4 col-md-8 col-sm-4 ${styles.contactUsContent}`}>
                        <div className={`row ${styles.contactUsLinks}`}>
                            <p>{data.end}</p>
                            <a className={styles.link} target="_blank" href={data.telefone}>
                                {data.telefone}
                            </a>
                            <a className={styles.link} target="_blank" href={`mailto:${data.email}`}>
                                {data.email}
                            </a>
                        </div>
                    </div>
                    <div className={`col-lg-6 col-md-8 col-sm-4 ${styles.map}`}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313.424173512322!2d-46.692375454047216!3d-23.578781815151235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b62131a36f%3A0xe886b00ddfd64f1d!2sEdif%C3%ADcio%20Seculum%20Building!5e0!3m2!1spt-BR!2sbr!4v1738833867766!5m2!1spt-BR!2sbr" width="100%" height="200%" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}