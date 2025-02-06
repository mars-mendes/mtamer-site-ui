"use client"
import { createContext, useState } from "react";
import CardGroup from "./components/CardGroup/CardGroup";
import Header from "./components/Header/Header";
import TextGrid from "./components/TextGrid/TextGrid";
import data from "../data/content.json"
import styles from "./page.module.scss";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";

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

  return (
    <>
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
          </div>
        ) : (
          <div className={`row ${styles.pageWrapper} ${styles.pageModalWrapper}`} style={{ backgroundColor: "#E2D6C5", overflow: "hidden" }}>
            <Modal content={modalData} />
          </div>
        )
        }
      </ModalContext.Provider>
      <div className="row">
        <Footer />
      </div>
    </>
  );
}
