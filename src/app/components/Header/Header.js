"use client"

import React, { useState, useRef, useEffect, useContext } from "react"
import styles from "./Header.module.scss";
import { ModalContext } from "../../page";


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const bannerRef = useRef(null);
    const { isOpen, setIsOpen } = useContext(ModalContext);

    useEffect(() => {
        const handleScroll = () => {
            if (bannerRef.current) {
                const bannerBottom = bannerRef.current.offsetTop + bannerRef.current.offsetHeight;
                setScrolled(window.scrollY > bannerBottom);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <>
            <div className={`container ${styles.header}`}>
                {scrolled || isOpen ?
                    (
                        <div className={`row ${styles.navL1}`}>
                            <div className={`row ${styles.navWrapper}`}>
                                <div className={`col-7`} onClick={() => setIsOpen(false)} href="/">
                                    {/* <img src="/vector.svg" className={styles.logoSmall} /> */}
                                    <img src="/mtamer-site-ui/logo-mask.png" className={styles.logoSmall} />
                                </div>
                                <div className={`col-5 ${styles.headerLinks}`}>
                                    {labels.map((item, i) => {
                                        return (
                                            <a key={i} href={item.url} className={`col-2 ${styles.links}`}>{item.label}</a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={`row ${styles.navB}`}>
                                <div className={`row ${styles.navWrapper}`}>
                                    <div className={`col-7`}>
                                        {/* <img src="/logo-full.svg" className={styles.logoFull} /> */}
                                        <img src="/mtamer-site-ui/logo-full.svg" className={styles.logoFull} />
                                    </div>
                                    <div className={`col-5 ${styles.headerLinks}`}>
                                        {labels.map((item, i) => {
                                            return (
                                                <a key={i} href={item.url} className={`col-2 ${styles.links}`}>{item.label}</a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {!isOpen ? (
                    <div className={`row ${styles.banner}`} ref={bannerRef}>
                        <div className="col-12">
                            {/* <img src="/logo-mask.svg" /> */}
                            <img src="/mtamer-site-ui/logo-mask.png" />
                        </div>
                    </div>
                    ) : null
                }
            </div>
        </>
    )
}