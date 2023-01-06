import { useState } from "react";
import Banner from "../componnent/banner/Banner";
import Header from "../componnent/header/Header";
import Loading from "../componnent/Loading";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isLoading, setisLoading] = useState(false);


  return (
    <div className={styles.homeWrp}>
      {isLoading && <Loading />}
      <div className={styles.headerAndBannerWrp}>
        <Header />
        <Banner />
      </div>
    </div>

  )
}
