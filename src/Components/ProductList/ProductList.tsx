import { FC } from "react";

import ProductOne from "./ProductOne";
import ProductTwo from "./ProductTwo";
import ProductThree from "./ProductThree";

import styles from "./ProductList.module.scss";

type ProductProp = {
  setPage: string | any;
};

const ProductList: FC<ProductProp> = ({ setPage }) => {
  return (
    <>
      <div className={styles.backDrop}>
        <ProductOne setPage={setPage} />
        <ProductTwo setPage={setPage} />
        <ProductThree setPage={setPage} />
      </div>
    </>
  );
};

export default ProductList;
