import { Link } from "react-router";
import { ShopFooter } from "../components/layout/footer/shop-footer";
import { ShopHeader } from "../components/layout/header/shop-header";
import { Breadcrumbs } from "../components/uikit/ui-breadcrumbs";
import { UiButtonLink } from "../components/uikit/ui-button-link";

export function ErrorPage() {
  return (
    <div className="min-h-[696px] w-full overflow-hidden flex flex-col">
      <div className="w-full flex-grow flex-col">
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
          <UiButtonLink
            className="mt-20 mx-auto"
            text="Back to home page"
            link=""
          ></UiButtonLink>
        </div>
      </div>
    </div>
  );
}
