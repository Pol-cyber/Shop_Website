import clsx from "clsx";
import { SalesCard } from "./sales-card";


export function SalesCardGrid({ className, indexCurrentElement = 0, saleCard, itemsPerLine, countRow = 1}) {
  return (
    <div
      className={clsx(`grid grid-rows-1 gap-[30px]`,className)}
      style={{ gridTemplateColumns: `repeat(${itemsPerLine}, 1fr)`, gridTemplateRows: `repeat(${countRow},1fr)` }}
    >
      {saleCard
        .slice(indexCurrentElement, indexCurrentElement + (itemsPerLine * countRow || 1))
        .map((element, index) => {
          return <SalesCard key={index} cardInfo={element}></SalesCard>;
        })}
    </div>
  );
}

