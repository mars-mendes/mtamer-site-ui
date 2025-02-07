import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <div className={`col-lg-12 ${styles.footer}`}>
            <div className="col-lg-2"></div>
            <div className={`col-lg-4 ${styles.logos}`}>
                <img src="/mtamer-site-ui/logo-mask.png" className={styles.mainLogo}/>
                {/* <img src="/vector.svg" className={styles.mainLogo}/> */}
                <img src="/mtamer-site-ui/logo-full.svg" className={styles.smallLogo}/>
                {/* <img src="/logo-full.svg" className={styles.smallLogo}/> */}
            </div>
            <div className={`col-lg-6 ${styles.content}`}>
                
            </div>
        </div>
    )
}