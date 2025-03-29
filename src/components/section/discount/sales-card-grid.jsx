import clsx from "clsx";
import { SalesCard } from "./sales-card";


export function SalesCardGrid({ className, indexCurrentElement, saleCard, itemsPerSlide}) {
  return (
    <div
      className={clsx(`grid grid-rows-1 gap-[30px]`,className)}
      style={{ gridTemplateColumns: `repeat(${itemsPerSlide}, 1fr)` }}
    >
      {saleCard
        .slice(indexCurrentElement, indexCurrentElement + (itemsPerSlide || 1))
        .map((element, index) => {
          return <SalesCard key={index} cardInfo={element}></SalesCard>;
        })}
    </div>
  );
}

