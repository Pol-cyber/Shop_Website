import { useIterateList } from "../../../model/use-iterate-list";
import { UiButtonLink } from "../../../uikit/ui-button-link";
import { SectionHeader } from "../../section-header";
import { SalesCardGrid } from "../sales-card-grid";

export function ExploreProduct({ itemsPerLine, countRow }) {
  const { indexCurrentElement, moveList } = useIterateList(
    itemsPerLine,
    saleCards,
    countRow
  );

  return (
    <div className="flex flex-col">
      <SectionHeader
        topTitle="Our Products"
        title="Explore Our Products"
        moveList={moveList}
      ></SectionHeader>
      <div className="mt-[60px]">
        <SalesCardGrid
          indexCurrentElement={indexCurrentElement}
          saleCard={saleCards}
          itemsPerLine={itemsPerLine}
          countRow={countRow}
        ></SalesCardGrid>
      </div>
      <div className="mt-[75px] flex justify-center items-center">
        <UiButtonLink
          text="View All Products"
          link="products"
        ></UiButtonLink>
      </div>
    </div>
  );
}

const saleCards = [
  {
    name: "HAVIT HV-G92 Gamepad",
    images: ["stick.png", "keyboard.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
    isNew: true,
  },
  {
    name: "AK-900 Wired Keyboard",
    images: ["keyboard.png"],
    salePrice: "960",
    defaultPrice: "1160",
    rating: "4.44",
    countRaters: "75",
    discount: "35",
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    images: ["stick.png", "keyboard.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    images: ["stick.png", "keyboard.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    images: ["stick.png", "keyboard.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    images: ["stick.png", "keyboard.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    images: ["stick.png", "keyboard.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    images: ["stick.png", "keyboard.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    images: ["stick.png", "keyboard.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
];
