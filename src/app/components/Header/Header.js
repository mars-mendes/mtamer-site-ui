"use client"

import React, { useState, useRef, useEffect } from "react"
import styles from "./Header.module.scss";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const bannerRef = useRef(null);

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

    return (
        <>
            <div className={`container ${styles.header}`}>
                {scrolled ?
                    (
                        <div className={`row ${styles.navL1}`}>
                            <div className={`col-6`}>scrolled</div>
                            <div className={`col-6`}>scrolled again</div>
                        </div>
                    ) : (
                        <div className={`row ${styles.navB}`}>
                            <div className={`col-6`}>
                                <img src="/logo-full.svg" className={styles.logoFull}/>
                            </div>
                            <div className={`col-6`}>test 2</div>
                        </div>
                    )}
                <div className={`row ${styles.banner}`} ref={bannerRef}>
                    <div className="col-12">
                        {/* <img src="/background.jpeg" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}