import { FC } from "react";
// import HomePage from "./Pages/HomePage/HomePage";
import ProductList from "./Pages/ProductList/ProductList";

export interface PageSet {
  setPage: string;
}

const DominApplication: FC = () => {
  // const [page, setPage] = useState<string>("homePage");

  // console.log(page);

  return (
    <div>
      {/* <HomePage setPage={setPage} /> */}
      <ProductList />
    </div>
  );
};

export default DominApplication;
