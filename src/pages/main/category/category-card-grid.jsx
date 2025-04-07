import clsx from "clsx";
import { CategoryCard } from "./category-card";

export function CategoryCardGrid({ className, indexCurrentElement, category, itemsPerLine}) {
  return (
    <div
      className={clsx(`grid grid-rows-1 gap-[30px]`,className)}
      style={{ gridTemplateColumns: `repeat(${itemsPerLine}, 1fr)` }}
    >
      {category
        .slice(indexCurrentElement, indexCurrentElement + (itemsPerLine || 1))
        .map((element, index) => {
          return <CategoryCard key={index} categoryInfo={element}></CategoryCard>;
        })}
    </div>
  );
}