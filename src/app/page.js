"use client"
import { createContext, useEffect, useRef, useState } from "react";
import CardGroup from "./components/CardGroup/CardGroup.js";
import Header from "./components/Header/Header.js";
import TextGrid from "./components/TextGrid/TextGrid.js";
import data from "../data/content.json"
import styles from "./page.module.scss";
import Modal from "./components/Modal/Modal.js";
import Footer from "./components/Footer/Footer.js";
import Banner from "./components/Banner/Banner.js";
import Awards from "./components/Awards/Awards.js";

export const ModalContext = createContext({
  isOpen: false,
  setIsOpen: () => { },
  selectedCard: {},
  setSelectedCard: () => { },
  modalType: "",
  setModalType: () => { }
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [scrolled, setScrolled] = useState(false);


  const modalData = modalType === "profile" ? data.equipe : data.praticas;
  const modalClass = modalType === "menu" ? styles.pageMenuWrapper : styles.pageModalWrapper

  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      // Scroll to top when modal is shown
      scrollRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <div className="d-flex flex-column min-vh-100" style={{ maxWidth: '100vw' }}>
      <ModalContext.Provider value={{ isOpen, setIsOpen, selectedCard, setSelectedCard, modalType, setModalType, scrolled, setScrolled }}>
        <div className="row">
          <Header />
        </div>
        {!isOpen ? (
          <div className={`row flex-grow-1 overflow-auto pb-5 ${styles.pageWrapper}`} id='content-wrapper'>
            <div className={styles.pageWrapperScroll}>
              <div className="row justify-content-center">
                <Banner />
              </div>
              <a id="quem-somos" className={styles.anchor}></a>
              <div className={`row justify-content-center ${styles.contentRow}`}>
                <TextGrid content={data.quemSomos} />
              </div>
              <a id="praticas" className={styles.anchor}></a>
              <div className={`row justify-content-center ${styles.contentRow}`}>
                <CardGroup content={data.praticas} />
              </div>
              <a id="equipe" className={styles.anchor}></a>
              <div className={`row justify-content-center ${styles.contentRow}`} >
                <TextGrid content={data.equipe} />
              </div>
              <a id="responsabilidade" className={styles.anchor}></a>
              <div className={`row justify-content-center ${styles.contentRow}`} >
                <TextGrid content={data.respSocialCorp} />
              </div>
              <a id="premios" className={styles.anchor}></a>
              <div className={`row justify-content-center ${styles.contentRow}`} >
                <Awards content={data.premios} />
              </div>
              <a id="contato" className={styles.anchor}></a>
              <div className={`row justify-content-center ${styles.footer}`}>
                <Footer content={data.contato} />
              </div>
            </div>
          </div>
        ) : (
          <div className={`row ${styles.pageWrapper} ${modalClass}`} style={{ backgroundColor: "#ECE6D8", overflowX: "hidden!important" }} ref={scrollRef}>
            <Modal content={modalData} />
          </div>
        )
        }
      </ModalContext.Provider>
    </div>
  );
}
