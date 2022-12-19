import { FC, useEffect, useState } from "react";
import Chart from "../Chart/Chart";
import Footer from "../Footer/Footer";
import ProductDetailsHeader from "../ProductDetailsHeader/ProductDetailsHeader";
import ProductOne from "../ProductList/ProductOne";
import styles from "./ProductOneDetails.module.scss";

type ProductProp = {
  setPage: string | any;
};

const ProductOneDetails: FC<ProductProp> = ({ setPage }) => {
  const [move, handleMove] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleMove(true);
      } else handleMove(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      <ProductDetailsHeader setPage={setPage} />
      <div className={styles.product}>
        <ProductOne setPage={setPage} />
      </div>
      <div className={move ? styles.navBarWrapper_move : styles.navBarWrapper}>
        <div className={styles.navBar}>
          <p className={styles.navBar_textSelected}>Info</p>
          <p className={styles.navBar_text}>Configure</p>
          <p className={styles.navBar_text}>Reports</p>
        </div>
      </div>
      <div className={styles.midBar}>
        <p className={styles.midBar_text}>Integrated electronics</p>
      </div>
      <div className={styles.midSection}>
        <div className={styles.midSectionContent}>
          <div className={styles.midSectionContent_box}>25.2°C</div>
          <p className={styles.midSectionContent_text}>Temperature</p>
        </div>
        <div className={styles.midSectionContent}>
          <div className={styles.midSectionContent_box}>03 h 47 min</div>
          <p className={styles.midSectionContent_text}>Operating hours</p>
        </div>
      </div>
      <div className={styles.midBar}>
        <p className={styles.midBar_text}>Operational characteristics</p>
      </div>
      <div className={styles.info}>
        <p className={styles.info_text}>
          <span className={styles.info_primary}>Analog input value:</span> 15.7
          mA
        </p>
        <p className={styles.info_text}>
          <span className={styles.info_primary}>Spool position: </span>68.4 %
        </p>
        <p className={styles.info_text}>
          <span className={styles.info_primary}>Pressure (P): </span>35.2 bar
        </p>
        <p className={styles.info_text}>
          <span className={styles.info_primary}>Flow torque: </span>520 mNm
        </p>
      </div>
      <div className={styles.midBar}>
        <p className={styles.midBar_text}>Chart</p>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.chartContainer_chart}>
          <Chart />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductOneDetails;
