import { FC } from "react";
import Footer from "../../Components/Footer/Footer";
import ProductHeader from "../../Components/ProductHeader/ProductHeader";
import ProductList from "../../Components/ProductList/ProductList";

type ProductProp = {
  setPage: string | any;
};

const ProductListPage: FC<ProductProp> = ({ setPage }) => {
  return (
    <div>
      <ProductHeader setPage={setPage} />
      <ProductList setPage={setPage} />
      <Footer />
    </div>
  );
};

export default ProductListPage;
