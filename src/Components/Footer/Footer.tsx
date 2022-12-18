import { FC } from "react";
import styles from "./ProductHeader.module.scss";

export interface PageSet {
  setPage: string;
}

const ProductHeader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <img className={styles.header_icon} alt="Logo" src={Logo} /> */}

        <p className={styles.header_text}>business</p>
      </div>

      <div className={styles.title}>
        <p className={styles.title_text}>Sign Up</p>
      </div>
    </div>
  );
};

export default ProductHeader;
