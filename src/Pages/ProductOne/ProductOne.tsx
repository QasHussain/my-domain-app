import { FC } from "react";

import ProductOneDetails from "../../Components/ProductOneDetails/ProductOneDetails";

type ProductProp = {
  setPage: string | any;
};
const ProductOne: FC<ProductProp> = ({ setPage }) => {
  return (
    <div>
      <ProductOneDetails setPage={setPage} />
    </div>
  );
};

export default ProductOne;
