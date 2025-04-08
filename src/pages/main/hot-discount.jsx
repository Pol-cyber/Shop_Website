import { SalesCardGrid } from "../../components/section/shopCards/sales-card-grid";
import { UiButtonLink } from "../../components/uikit/ui-button-link";
import { SectionHeader } from "../../components/section/section-header";
import { useIterateList } from "../../components/model/use-iterate-list";
import { useMyTimer } from "../../components/model/use-mytimer";

const saleDuration = {
  endDate: 1744809638639
}

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
  const {duration, timeData} = useMyTimer(saleDuration.endDate)

  if(duration <= 0){
    return
  }

  return (
    <div>
      <SectionHeader
        moveList={moveList}
        title="Flash Sales"
        topTitle="Today’s"
        timeData={timeData}
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
