"use client"

import React, { useState, useRef, useEffect, useContext } from "react"
import styles from "./Header.module.scss";
import { ModalContext } from "../../page";


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const bannerRef = useRef(null);
    const { isOpen, setIsOpen, modalType, setModalType } = useContext(ModalContext);

    useEffect(() => {
        const handleScroll = () => {
            if (bannerRef.current) {
                const bannerBottom = bannerRef.current.offsetTop + bannerRef.current.offsetHeight;
                const bannerTop = bannerRef.current.offsetTop;
                const scrollY = window.scrollY;
        
                // Check if the banner is visible in the viewport
                const isBannerVisible = scrollY < bannerBottom && scrollY + window.innerHeight > bannerTop;
        
                if (isBannerVisible) {
                  setScrolled(false); // Force the navbar to "initial" when the banner is visible
                } else {
                  setScrolled(scrollY > bannerBottom);
                }
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

    const bgColor = scrolled || isOpen ? '#D9D9D9' : '#E2D6C5';

    const handleMenu = () => {
        setModalType("menu");
        setIsOpen(true)
    }

    return (
        <>
            <div className={`container ${styles.header}`} style={{ backgroundColor: bgColor }}>
                <div className="row">

                    {scrolled || isOpen ?
                        (
                            <>
                                {modalType != 'menu' ? (

                                    <div className={`row ${styles.navL1}`}>
                                        <div className={`row ${styles.navWrapper}`}>
                                            <div className={`col-lg-7 col-md-3 col-sm-3`} onClick={() => setIsOpen(false)} href="/">
                                                <img src="/vector.svg" className={styles.logoSmall} />
                                                {/* <img src="/mtamer-site-ui/vector.png" className={styles.logoSmall} /> */}
                                            </div>
                                            <div className={`col-lg-1 col-md-1 col-sm-1 ${styles.headerLinksMobile}`} onClick={() => handleMenu()}>
                                                <img src="/menu.svg" />
                                                {/* <img src="/mtamer-site-ui/menu.svg"/> */}
                                            </div>
                                            <div className={`col-lg-5 col-sm-0 ${styles.headerLinksDesktop}`}>
                                                {labels.map((item, i) => {
                                                    return (
                                                        <a key={i} href={item.url} className={`col-2 ${styles.links}`}>{item.label}</a>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </>
                        ) : (
                            <>
                                <div className={`row ${styles.navB}`}>
                                    <div className={`row ${styles.navWrapper}`}>
                                        <div className={`col-lg-7 col-md-6 col-sm-3`}>
                                            <img src="/logo-full.svg" className={styles.logoFull} />
                                            {/* <img src="/mtamer-site-ui/logo-full.svg" className={styles.logoFull} /> */}
                                        </div>
                                        <div className={`col-lg-5 ${styles.headerLinksDesktop}`}>
                                            {labels.map((item, i) => {
                                                return (
                                                    <a key={i} href={item.url} className={`col-2 ${styles.links}`}>{item.label}</a>
                                                )
                                            })}
                                        </div>
                                        <div className={`col-md-2 col-sm-1 ${styles.headerLinksMobile}`} onClick={() => handleMenu()}>
                                            <img src="/menu.svg" />
                                            {/* <img src="/mtamer-site-ui/menu.svg"/> */}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                </div>
                <div className="row">
                    {!isOpen ? (
                        <div className={`row ${styles.banner}`} ref={bannerRef}>
                            <div className="col-lg-12 col-md-6 col-sm-4">
                                <img src="/logo-mask.svg" />
                                {/* <img src="/mtamer-site-ui/logo-mask.png" /> */}
                            </div>
                        </div>
                    ) : null
                    }
                </div>
                {/* try to emcompass the image wihtin the header so it accompanies the height and positioning  */}
            </div>
        </>
    )
}