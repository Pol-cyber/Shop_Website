import { AdvertiseBoard } from "./advertise-board";
import { DropLeft } from "./svgIcon/dop-right";

const listCategory = [
  { name: "Woman’s Fashion", children: "hs" },
  { name: "Men’s Fashion", children: "hs" },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby’s & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

export function ProductCategories() {
  return (
    <div className="w-screen px-[135px] pb-10 flex">
      <div className="pt-10 mr-4">
        <ul className="w-[217px]">
          {listCategory.map((value, index) => {
            return (
              <li key={index} className="flex items-center justify-between last:pb-0 pb-4">
                {value.name}
                {value.children && <DropLeft className="p-1"></DropLeft>}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[1px] bg-black/30"></div>
      <AdvertiseBoard className="mt-10 ml-11"></AdvertiseBoard>
    </div>
  );
}
