import { FC } from "react";
import styles from "./HomePage.module.scss";
import Logo from "../../assets/DominLogo.png";

type HomePageProp = {
  setPage: string | any;
};

const HomePage: FC<HomePageProp> = ({ setPage }) => {
  const onClick = () => {
    setPage("productList");
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.midSection}>
          <div className={styles.image}>
            <img src={Logo} className={styles.image_src} alt="logo" />
          </div>
          <div className={styles.title}>
            <p className={styles.title_text}>DOMIN</p>
          </div>
          <div className={styles.ascend}>
            <p className={styles.ascend_text}>ASCEND</p>
          </div>
        </div>

        <div className={styles.lowSection}>
          <div className={styles.subHeader}>
            <p className={styles.subHeader_text}>
              Connect to all your Domin products
            </p>
          </div>

          <div className={styles.message}>
            <p className={styles.message_text}>
              Configure and access data from your devices remotely, in a secure
              manner
            </p>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.buttons_start} onClick={onClick}>
            Get Started
          </button>
          <button className={styles.buttons_logIn}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
