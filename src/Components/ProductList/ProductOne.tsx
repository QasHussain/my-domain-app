import { FC } from "react";
import styles from "./ProductList.module.scss";

import product1 from "../../assets/1.png";

type ProductProp = {
  setPage: string | any;
};

const ProductOne: FC<ProductProp> = ({ setPage }) => {
  const onClick = () => {
    setPage("productOne");
  };
  return (
    <div className={styles.container}>
      <div className={styles.cardOutline} onClick={onClick}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img className={styles.cardImg_src} alt="item" src={product1} />
          </div>
          <div className={styles.cardList}>
            <p className={styles.cardList_one}>
              <span className={styles.primary}>S/N:</span> SN0000f43
            </p>
            <p className={styles.cardList_two}>
              <span className={styles.primary}>Type:</span> S4 Pro
            </p>
            <p className={styles.cardList_three}>
              <span className={styles.primary}>Location:</span> Site1, Cheddar,
              UK
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

export default ProductOne;
