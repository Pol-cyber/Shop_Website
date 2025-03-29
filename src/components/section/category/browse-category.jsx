import { useIterateList } from "../../model/use-iterate-list";
import { SectionHeader } from "../section-header";
import { CategoryCardGrid } from "./category-card-grid";

const categoryList = [
  {
    title: "Phones",
    titleImage: "phonIcon.png",
  },
  {
    title: "HAVIT HV-G92 Gamepad",
    titleImage: "phonIcon.png",
  },
  {
    title: "HAVIT HV-G92 Gamepad",
    titleImage: "phonIcon.png",
  },
  {
    title: "HAVIT HV-G92 Gamepad",
    titleImage: "phonIcon.png",
  },
  {
    title: "HAVIT HV-G92 Gamepad",
    titleImage: "phonIcon.png",
  },
  {
    title: "HAVIT HV-G92 Gamepad",
    titleImage: "phonIcon.png",
  },
  {
    title: "HAVIT HV-G92 Gamepad",
    titleImage: "phonIcon.png",
  },
];

const itemsPerSlide = 6;

export function BrowseCategory() {
  const { indexCurrentElement, moveList } = useIterateList(
    itemsPerSlide,
    categoryList
  );

  return (
    <div>
      <SectionHeader
        title="Browse By Category"
        topTitle="Categories"
        moveList={moveList}
      ></SectionHeader>
      <CategoryCardGrid
        className={"mt-[60px]"}
        indexCurrentElement={indexCurrentElement}
        category={categoryList}
        itemsPerSlide={itemsPerSlide}
      ></CategoryCardGrid>
    </div>
  );
}
