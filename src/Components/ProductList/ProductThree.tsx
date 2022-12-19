import { FC } from "react";
import styles from "./ProductList.module.scss";

import product2 from "../../assets/2.png";

type ProductProp = {
  setPage: string | any;
};

const ProductThree: FC<ProductProp> = ({ setPage }) => {
  const onClick = () => {
    setPage("productOne");
  };
  return (
    <div className={styles.container}>
      <div className={styles.cardOutline} onClick={onClick}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img className={styles.cardImg_src2} alt="item" src={product2} />
          </div>
          <div className={styles.cardList}>
            <p className={styles.cardList_one}>
              <span className={styles.primary}>S/N:</span> SN0000h56
            </p>
            <p className={styles.cardList_two}>
              <span className={styles.primary}>Type:</span> S4 Pro
            </p>
            <p className={styles.cardList_three}>
              <span className={styles.primary}>Location:</span> Vehicle1,
              Chester, UK
            </p>
            <p className={styles.cardList_four}>
              <span className={styles.primary}>Status:</span>
              <span className={styles.active}> Active</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductThree;
