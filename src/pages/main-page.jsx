import { SectionLayout } from "../components/section/section-layout";
import { BrowseCategory } from "../components/section/category";
import { Divider } from "../components/uikit/ui-divider";
import { ExploreProduct, HotDiscount } from "../components/section/sales";
import { ProductTypes } from "../components/section/poroduct-types";
import { BestSale } from "../components/section/sales";
import { useEffect, useState } from "react";
import { AdvertiseBoard } from "../components/section/advertise";
import { NewArrival } from "../components/section/newArrival";
import { StoreService } from "../components/section/storeService";


export function MainPage() {
  const [itemsPerLine, setItemsPerSlide] = useState(getItemsPerLine());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerLine());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getItemsPerLine() {
    const width = window.innerWidth;
    if (width >= 1200) return 4;
    if (width >= 992) return 3;
    if (width >= 768) return 2;
    return 2;
  }

  return (
    <main>
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
      <SectionLayout className={"mt-[140px]"} mainContent={<NewArrival></NewArrival>}></SectionLayout>
      <SectionLayout className={"my-[140px]"} mainContent={<StoreService></StoreService>}></SectionLayout>
    </main>
  );
}
