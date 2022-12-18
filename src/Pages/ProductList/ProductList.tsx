import { FC } from "react";
import ProductHeader from "../../Components/ProductHeader/ProductHeader";
import styles from "./ProductList.module.scss";

export interface PageSet {
  setPage: string;
}

const ProductList: FC = () => {
  return (
    <div className={styles.container}>
      <ProductHeader />
    </div>
  );
};

export default ProductList;
