import { SalesCardGrid } from "../sales-card-grid";
import { UiButtonLink } from "../../../uikit/ui-button-link";
import { SectionHeader } from "../../section-header";
import { useIterateList } from "../../../model/use-iterate-list";

const timeData = {
  Days: 3,
  Hours: 23,
  Minutes: 19,
  Seconds: 56,
};

const saleCards = [
  {
    name: "HAVIT HV-G92 Gamepad",
    images: ["stick.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
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
    name: "Hello",
    images: ["stick.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "Hello",
    images: ["stick.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "Hello",
    images: ["stick.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "Hello",
    images: ["stick.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "Hello",
    images: ["stick.png"],
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
];


export function HotDiscount({itemsPerLine}) {
  const {indexCurrentElement, moveList} = useIterateList(itemsPerLine, saleCards)

  return (
    <div>
      <SectionHeader
        timeData={timeData}
        moveList={moveList}
        title="Flash Sales"
        topTitle="Today’s"
      ></SectionHeader>
      <div className="mt-7">
        <SalesCardGrid
          indexCurrentElement={indexCurrentElement}
          saleCard={saleCards}
          itemsPerLine={itemsPerLine}
        ></SalesCardGrid>
        <div className="flex justify-center mt-[64px]">
          <UiButtonLink text="View All Products" link="saleProduct"></UiButtonLink>
        </div>
      </div>
    </div>
  );
}
