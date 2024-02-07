import { useState } from "react";
import { IBrand } from "../../model/IBrand";
import { IBrandListProps } from "./IBrandListProps";
import { BrandItem } from "../brandItem/BrandItem";

export const BrandList: React.FC<IBrandListProps> = (props) => {
  const [brands, setBrands] = useState<IBrand[]>([]);

  const items = brands.map((brand) => (
    <div>
      <BrandItem brand={brand} name="" />
    </div>
  ));

  return <>My brand list</>;
};
