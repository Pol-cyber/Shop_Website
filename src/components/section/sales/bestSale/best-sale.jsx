import { SectionHeader } from "../../section-header";
import { SalesCardGrid } from "../sales-card-grid";

const saleCards = [
  {
    name: "HAVIT HV-G92 Gamepad",
    images: ["stick.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
  },
  {
    name: "Gucci duffle bag",
    images: ["guci.png"],
    salePrice: "960",
    defaultPrice: "1160",
    rating: "4.56",
    countRaters: "65",
  },
  {
    name: "Hello",
    images: ["stick.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
  },
  {
    name: "Hello",
    images: ["stick.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
  },
];

export function BestSale({ itemsPerLine }) {
  return (
    <div>
      <SectionHeader
        topTitle="This Month"
        title="Best Selling Products"
        link="bestSale"
        linkText={"View All"}
      ></SectionHeader>
      <div className="mt-[60px]">
        <SalesCardGrid
          saleCard={saleCards}
          itemsPerLine={itemsPerLine}
        ></SalesCardGrid>
      </div>
    </div>
  );
}
