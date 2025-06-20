"use client"

import React, { useContext } from "react"
import styles from "./Header.module.scss";
import { ModalContext } from "../../page.js";


export default function Header() {
    const { isOpen, setIsOpen, modalType, setModalType, scrolled } = useContext(ModalContext);

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
            label: "Responsabilidade",
            url: "#responsabilidade"
        },
        {
            label: "Prêmios",
            url: "#premios"
        },
        {
            label: "Contato",
            url: "#contato"
        }
    ]

    const bgColor = scrolled || isOpen ? '#D9D9D9' : '#ECE6D8';

    const handleMenu = () => {
        setModalType("menu");
        setIsOpen(true)
    }

    return (
        <>
            <header className={`container-fluid ${styles.header}`} style={{ backgroundColor: bgColor }} >
                {scrolled || isOpen ?
                    (
                        <>
                            {modalType != 'menu' ? (

                                <div className={`row ${styles.navL1}`}>
                                    <div className={`${styles.navWrapper}`}>
                                        <div className={`col-lg-7 col-md-3 col-sm-3`} onClick={() => setIsOpen(false)} href="/">
                                            <img src="/vector.svg" className={styles.logoSmall} />
                                        </div>
                                        <div className={`col-lg-1 col-md-2 col-sm-2 ${styles.headerLinksMobile}`} onClick={() => handleMenu()}>
                                            <img src="/menu.svg" />
                                        </div>
                                        <div className={`col-5 col-sm-0 ${styles.headerLinksDesktopL1}`}>
                                            {labels.map((item, i) => {
                                                return (
                                                    <a key={i} href={item.url} className={`col-2 ${styles.links}`} onClick={() => setIsOpen(false)}>{item.label}</a>
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
                                    <div className={`col-lg-7 col-md-3 col-sm-3`}>
                                        <div className={styles.logoFullWrapper}>
                                            <img src="/logo-full.svg" className={styles.logoFull} />
                                        </div>
                                    </div>
                                    <div className={`col-6 col-sm-4`} />
                                    <div className={`col-lg-5 ${styles.headerLinksDesktop}`}>
                                        {labels.map((item, i) => {
                                            return (
                                                <a key={i} href={item.url} onClick={() => setIsOpen(false)} className={`col-2 ${styles.links}`}>{item.label}</a>
                                            )
                                        })}
                                    </div>
                                    <div className={`col-md-2 col-sm-1 ${styles.headerLinksMobile}`} onClick={() => handleMenu()}>
                                        <img src="/menu.svg" />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
            </header>
        </>
    )
}