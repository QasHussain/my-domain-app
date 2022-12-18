import { FC } from "react";
import styles from "./ProductHeader.module.scss";
import { BsSearch } from "react-icons/bs";

export interface PageSet {
  setPage: string;
}

const ProductHeader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.header}>
          {/* <img className={styles.header_icon} alt="Logo" src={Logo} /> */}
          <p className={styles.header_text}>ASCEND</p>
        </div>

        <div className={styles.plus}>
          <p className={styles.plus_icon}>Sign Up</p>
        </div>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.searchBar_icon}>
          <BsSearch />
        </div>

        <input
          className={styles.searchBar_bar}
          type="text"
          placeholder="Search.."
          id="inputID"
        />
      </div>
    </div>
  );
};

export default ProductHeader;
