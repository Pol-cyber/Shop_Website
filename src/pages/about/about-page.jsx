import { SectionLayout } from "../../components/section/section-layout";
import { StoreService } from "../../components/section/storeService";
import { Breadcrumbs } from "../../components/uikit/ui-breadcrumbs";
import { ShopStat } from "./shop-stat-section";
import { SignificantWorkers } from "./significant-worker";
import { StoryShop } from "./story-shop-section";

export function AboutPage() {
  return (
    <main className="w-full mt-[85px] mb-[140px]">
      <Breadcrumbs className="pl-[135px]" />
      <StoryShop />
      <SectionLayout
        className="mt-[140px]"
        mainContent={<ShopStat />}
      ></SectionLayout>
      <SectionLayout
        className="mt-[140px]"
        mainContent={<SignificantWorkers />}
      ></SectionLayout>
      <SectionLayout
        className="mt-[140px]"
        mainContent={<StoreService />}
      ></SectionLayout>
    </main>
  );
}
