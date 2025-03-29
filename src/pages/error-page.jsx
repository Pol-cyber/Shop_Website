import { Link } from "react-router";
import { ShopFooter } from "../components/layout/footer/shop-footer";
import { ShopHeader } from "../components/layout/header/shop-header";
import { Breadcrumbs } from "../components/uikit/ui-breadcrumbs";
import { UiButton } from "../components/uikit/ui-button";

export function ErrorPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col">
      <ShopHeader></ShopHeader>
      <div className=" w-full flex-grow flex-col">
        <div className="ml-[135px] mt-[80px]">
          <Breadcrumbs errorPage></Breadcrumbs>
        </div>
        <div className="mt-[140px] mx-auto flex flex-col">
          <div className="flex flex-col gap-10">
            <span className="text-center font-medium text-[110px] leading-[115px]">
              404 Not Found
            </span>
            <span className="text-center">
              Your visited page not found. You may go home page.
            </span>
          </div>
          <Link to={"/"} className="mt-20 mx-auto">
            <UiButton text="Back to home page"></UiButton>
          </Link>
        </div>
      </div>
      <ShopFooter></ShopFooter>
    </div>
  );
}
