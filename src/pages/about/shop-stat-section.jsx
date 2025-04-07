import clsx from "clsx";
import { CountSellerIcon } from "./icon/count-seller";
import { ProductSaleIcon } from "./icon/product-sale";
import { CountActiveCustomer } from "./icon/active-customer";
import { AnualGrassSale } from "./icon/anual-grass-sale";
import { createNumberKString } from "../../components/model/create-number-kstring";

const shopstatistics = [
  {
    id: 1,
    SvgComponent: CountSellerIcon,
    numberStat: 10500,
    description: "Sallers active our site",
  },
  {
    id: 2,
    SvgComponent: ProductSaleIcon,
    numberStat: 33000,
    description: "Mopnthly Produduct Sale",
  },
  {
    id: 3,
    SvgComponent: CountActiveCustomer,
    numberStat: 45500,
    description: "Customer active in our site",
  },
  {
    id: 4,
    SvgComponent: AnualGrassSale,
    numberStat: 25000,
    description: "Anual gross sale in our site",
  },
];

export function ShopStat({ className }) {

  return (
    <div className={clsx(className, "flex gap-[30px] justify-between")}>
      {shopstatistics.map((value) => {
        return (
          <div
            key={value.id}
            className="border group border-black/40 py-[30px] px-[30px] flex flex-col gap-6 items-center rounded-[4px] transition-all hover:bg-[#DB4444] hover:shadow-[0_2px_20px_rgba(0,_0,_0,_0.2)] hover:text-white"
          >
            <value.SvgComponent width={80} height={80}></value.SvgComponent>
            <div className="flex flex-col gap-3 items-center text-center">
              <p className="text-[32px] font-bold">
                {createNumberKString(value.numberStat)}
              </p>
              <p>{value.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
