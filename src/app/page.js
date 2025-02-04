"use client"
import CardGroup from "./components/CardGroup/CardGroup";
import Header from "./components/Header/Header";
import TextGrid from "./components/TextGrid/TextGrid";
import data from "../data/content.json"
import styles from "./page.module.scss";


export default function Home() {
  return (
    <>
    <div className="row">
      <Header />
    </div>
    <div className={`row justify-content-center ${styles.pageWrapper}`}>
      <div className="row justify-content-center">
       <TextGrid content={data.quemSomos}/>
      </div>
      <div className="row justify-content-center">
        <CardGroup content={data.especsData} />
      </div>
    </div>
    </>
  );
}
