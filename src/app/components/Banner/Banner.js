import { ModalContext } from "@/app/page";
import React, { useContext, useEffect, useRef } from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
    const { isOpen, setScrolled } = useContext(ModalContext);
    const bannerRef = useRef(null);

    useEffect(() => {
        if (!bannerRef.current) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            // When banner is not intersecting (not visible), set scrolled to true
            setScrolled(!entry.isIntersecting);
        },
        {
            root: document.getElementById('content-wrapper'), // your scroll container
            threshold: 0.1, // trigger when 10% of banner is visible
        }
    );

    observer.observe(bannerRef.current);

    return () => observer.disconnect();
}, []);
    return (
        <div className={`container-fluid p-0 ${styles.bannerWrapper}`} ref={bannerRef}>
            {!isOpen ? (
                <div className={`${styles.banner}`}>
                    <div className="container-fluid">
                        <video src="MTA_leadspace_video.mp4" autoPlay muted playsInline loop />
                    </div>
                </div>
            ) : null
            }
        </div>
    );
}
export default Banner;