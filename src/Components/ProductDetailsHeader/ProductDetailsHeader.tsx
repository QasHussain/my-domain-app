import { FC } from "react";
import styles from "./ProductDetailsHeader.module.scss";

import Back from "../../assets/Back.png";

type ProductProp = {
  setPage: string | any;
};

const ProductDetailsHeader: FC<ProductProp> = ({ setPage }) => {
  const onClick = () => {
    setPage("productList");
  };
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.header}>
          <img
            className={styles.header_icon}
            alt="Logo"
            src={Back}
            onClick={onClick}
          />
          <p className={styles.header_text}>SN0000f43</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsHeader;
