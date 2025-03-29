
import { SectionLayout } from "../components/layout/section-layout";
import { BrowseCategory } from "../components/section/category/browse-category";
import { ProductCategories } from "../components/product-categories";
import { Divider } from "../components/uikit/ui-divider";
import { HotSales } from "../components/section/discount";


export function MainPage() {
  return (
    <main>
      <ProductCategories></ProductCategories>
      <SectionLayout
        className={"mt-[100px]"}
        mainContent={<HotSales></HotSales>}
      ></SectionLayout>
      <Divider></Divider>
      <SectionLayout
        mainContent={<BrowseCategory></BrowseCategory>}
      ></SectionLayout>
      <Divider></Divider>
    </main>
  );
}
