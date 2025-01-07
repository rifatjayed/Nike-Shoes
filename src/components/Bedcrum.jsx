import { ChevronRight } from "lucide-react";
import React from "react";

const Bedcrum = (props) => {
  const { product } = props;
  return (
    <div>
      HOME <ChevronRight>SHOP</ChevronRight>
      {product.category} <ChevronRight></ChevronRight>
      {product.name}
    </div>
  );
};

export default Bedcrum;
