"use client"
import { createContext, useState } from "react";
import CardGroup from "./components/CardGroup/CardGroup";
import Header from "./components/Header/Header";
import TextGrid from "./components/TextGrid/TextGrid";
import data from "../data/content.json"
import styles from "./page.module.scss";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";

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

  const modalData = modalType === "profile" ? data.equipe : data.praticas;
  const modalClass = modalType === "menu" ? styles.pageMenuWrapper : styles.pageModalWrapper

  return (
    <div style={{maxWidth: '100vw'}}>
      <ModalContext.Provider value={{ isOpen, setIsOpen, selectedCard, setSelectedCard, modalType, setModalType }}>
        <div className="row">
          <Header />
        </div>
        {!isOpen ? (
          <div className={`row justify-content-center ${styles.pageWrapper}`}>
            <a id="quem-somos" className={styles.anchor}></a>
            <div className="row justify-content-center">
              <TextGrid content={data.quemSomos} />
            </div>
            <a id="praticas" className={styles.anchor}></a>
            <div className="row justify-content-center">
              <CardGroup content={data.praticas} />
            </div>
            <a id="equipe" className={styles.anchor}></a>
            <div className="row justify-content-center" >
              <TextGrid content={data.equipe} />
            </div>
            <a id="responsabilidade" className={styles.anchor}></a>
            <div className="row justify-content-center" >
              <TextGrid content={data.respSocialCorp} />
            </div>
            <a id="contato" className={styles.anchor}></a>
            <div className="row justify-content-center" >
              <ContactUs content={data.contato} />
            </div>
          </div>
        ) : (
          <div className={`row ${styles.pageWrapper} ${modalClass}`} style={{ backgroundColor: "#E2D6C5", overflowX: "hidden!important" }}>
            <Modal content={modalData} />
          </div>
        )
        }
      </ModalContext.Provider>
      {!isOpen ? (
        <div className="row">
          <Footer />
        </div>
      ) : null}
    </div>
  );
}
