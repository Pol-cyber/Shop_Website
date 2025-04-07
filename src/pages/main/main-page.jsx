import { SectionLayout } from "../../components/section/section-layout";
import { BrowseCategory } from "./category";
import { Divider } from "../../components/uikit/ui-divider";
import { ExploreProduct } from "./explore-product";
import { ProductTypes } from "./poroduct-types";
import { BestSale } from "./best-sale";
import { AdvertiseBoard } from "./advertise-board";
import { NewArrival } from "./new-arrival";
import { StoreService } from "../../components/section/storeService";
import { HotDiscount } from "./hot-discount";
import { useMainPageMedia } from "./use-main-media";
import { AboveButton } from "../../components/uikit/ui-to-above-button";

export function MainPage() {
  const {itemsPerLine} = useMainPageMedia()

  return (
    <main className="relative pb-[140px]">
      <SectionLayout
        mainContent={<ProductTypes></ProductTypes>}
      ></SectionLayout>
      <SectionLayout
        className={"mt-[100px]"}
        mainContent={<HotDiscount itemsPerLine={itemsPerLine}></HotDiscount>}
      ></SectionLayout>
      <Divider></Divider>
      <SectionLayout
        mainContent={
          <BrowseCategory itemsPerLine={itemsPerLine + 2}></BrowseCategory>
        }
      ></SectionLayout>
      <Divider></Divider>
      <SectionLayout
        mainContent={<BestSale itemsPerLine={itemsPerLine}></BestSale>}
      ></SectionLayout>
      <SectionLayout
        className={"mt-[140px]"}
        mainContent={<AdvertiseBoard></AdvertiseBoard>}
      ></SectionLayout>
      <SectionLayout
        className={"mt-[70px]"}
        mainContent={
          <ExploreProduct
            itemsPerLine={itemsPerLine}
            countRow={2}
          ></ExploreProduct>
        }
      ></SectionLayout>
      <SectionLayout
        className={"mt-[140px]"}
        mainContent={<NewArrival></NewArrival>}
      ></SectionLayout>
      <SectionLayout
        className={"mt-[140px]"}
        mainContent={<StoreService></StoreService>}
      ></SectionLayout>
      <AboveButton/>
    </main>
  );
}
