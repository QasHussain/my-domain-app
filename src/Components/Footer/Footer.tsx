import { FC } from "react";
import styles from "./Footer.module.scss";

import { IoCogOutline, IoSettingsOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { BsBell } from "react-icons/bs";

const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footer_imgSelected}>
          <IoCogOutline size={32} />
        </div>
        <div className={styles.footer_img}>
          <GoGraph size={25} />
        </div>
        <div className={styles.footer_img}>
          <BsBell size={25} />
        </div>
        <div className={styles.footer_img}>
          <IoSettingsOutline size={27} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
