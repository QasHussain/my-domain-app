import { FC, useState } from "react";
import ProductOneDetails from "./Components/ProductOneDetails/ProductOneDetails";
import HomePage from "./Pages/HomePage/HomePage";
import ProductList from "./Pages/ProductListPage/ProductListPage";

export interface PageSet {
  setPage: string;
}

const DominApplication: FC = () => {
  const [page, setPage] = useState<string>("homePage");

  console.log(page);

  return (
    <div>
      {page === "homePage" && <HomePage setPage={setPage} />}
      {page === "productList" && <ProductList setPage={setPage} />}
      {page === "productOne" && <ProductOneDetails setPage={setPage} />}
    </div>
  );
};

export default DominApplication;
