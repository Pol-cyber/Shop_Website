import { SalesCardGrid } from "./sales-card-grid";
import { UiButton } from "../../uikit/ui-button";
import { SectionHeader } from "../section-header";
import { useIterateList } from "../../model/use-iterate-list";

const timeData = {
  Days: 3,
  Hours: 23,
  Minutes: 19,
  Seconds: 56,
};

const saleCards = [
  {
    name: "HAVIT HV-G92 Gamepad",
    image: "stick.png",
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "AK-900 Wired Keyboard",
    image: "keyboard.png",
    salePrice: "960",
    defaultPrice: "1160",
    rating: "4.44",
    countRaters: "75",
    discount: "35",
  },
  {
    name: "Hello",
    image: "stick.png",
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "Hello",
    image: "stick.png",
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "Hello",
    image: "stick.png",
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "Hello",
    image: "stick.png",
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
  {
    name: "Hello",
    image: "stick.png",
    salePrice: "120",
    defaultPrice: "160",
    rating: "4.77",
    countRaters: "88",
    discount: "40",
  },
];

const itemsPerSlide = 4;

export function HotSales() {
  const {indexCurrentElement, moveList} = useIterateList(itemsPerSlide, saleCards)

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
          itemsPerSlide={itemsPerSlide}
        ></SalesCardGrid>
        <div className="flex justify-center mt-[64px]">
          <UiButton text="View All Products"></UiButton>
        </div>
      </div>
    </div>
  );
}
