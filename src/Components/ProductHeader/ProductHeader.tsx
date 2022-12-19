import { FC, useEffect, useState } from "react";
import styles from "./ProductHeader.module.scss";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";

import Logo from "../../assets/logo-1.png";
import Add from "../../assets/Add.png";

export interface PageSet {
  setPage: string | any;
}

const ProductHeader: FC<PageSet> = ({ setPage }) => {
  const [move, handleMove] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleMove(true);
      } else handleMove(false);
    });
  }, []);

  const onClick = () => {
    setPage("homePage");
  };

  return (
    <div className={styles.container}>
      <div className={move ? styles.topBar_move : styles.topBar}>
        <div className={styles.header}>
          <img
            className={styles.header_icon}
            alt="Logo"
            src={Logo}
            onClick={onClick}
          />
          <p className={styles.header_text}>ASCEND</p>
        </div>
        <div className={styles.plus}>
          <img className={styles.plus_icon} alt="Logo" src={Add} />
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

      <div className={styles.selectBar}>
        <div className={styles.selectBar_bar}>
          <p className={styles.selectBar_text}>Product Type</p>
          <AiOutlineCaretDown />
        </div>
        <div className={styles.selectBar_bar}>
          <p className={styles.selectBar_text}>Location</p>
          <AiOutlineCaretDown />
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
