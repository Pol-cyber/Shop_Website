import { useIterateList } from "../../../components/model/use-iterate-list";
import { SectionHeader } from "../../../components/section/section-header";
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


export function BrowseCategory({itemsPerLine}) {
  const { indexCurrentElement, moveList } = useIterateList(
    itemsPerLine,
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
        itemsPerLine={itemsPerLine}
      ></CategoryCardGrid>
    </div>
  );
}
