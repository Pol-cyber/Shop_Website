import clsx from "clsx";
import { Link } from "react-router";
import { Elipse } from "./svgIcon/elipse";
import { useState } from "react";

const advertiseData = [
  {
    title: "iPhone 14 Series",
    itemInfo: "Up to 10% off Voucher",
    advertiseImage: "phon.png",
  },
  {title: "iPhone 13 Series", itemInfo:"Up to 10% off Voucher", advertiseImage: "phon.png"},
  {title: "iPhone 12 Series", itemInfo:"Up to 10% off Voucher", advertiseImage: "phon.png"},
  {title: "iPhone 11 Series", itemInfo:"Up to 10% off Voucher", advertiseImage: "phon.png"},
  {title: "iPhone 10 Series", itemInfo:"Up to 10% off Voucher", advertiseImage: "phon.png"}
];

export function AdvertiseBoard({ className }) {
  const [indexCurrentItem, setIndexCurrentitem] = useState(0)

  const currentElement = advertiseData[indexCurrentItem]
  
  return (
    <div
      className={clsx(
        className,
        "bg-black h-[344px] w-full flex justify-between relative"
      )}
    >
      <div className="mt-[58px] ml-[64px] text-white">
        <div className="flex items-center pb-5 gap-4">
          <img src="apple.png" className="w-10 h-12"></img>
          <span>{currentElement.title}</span>
        </div>
        <div className="text-5xl max-h-[120px] overflow-hidden mb-[22px] font-semibold leading-tight">
          {currentElement.itemInfo}
        </div>
        <Link className="ml-1 flex items-center gap-2">
          <span className="font-medium border-b border-b-white">Shop Now</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 12H20M20 12L13 5M20 12L13 19"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className="relative min-w-[496px] h-[352px] overflow-hidden">
        <img src={currentElement.advertiseImage} className="absolute top-4"></img>
      </div>
      <div className="flex absolute bottom-3 left-1/2 transform -translate-x-1/2 gap-3">
        {advertiseData.map((value, index) => {
          return <Elipse key={index} type={index === indexCurrentItem ? "pick" : "df"} onClick={() => setIndexCurrentitem(index)}/>;
        })}
      </div>
    </div>
  );
}
