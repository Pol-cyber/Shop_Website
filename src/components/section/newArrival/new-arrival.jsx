import clsx from "clsx";
import { SectionHeader } from "../section-header";
import { Link } from "react-router";

const items = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "ps.png",
    category: "gaming",
  },
  {
    id: 2,
    title: "Women’s Collections",
    description: "Featured woman collections that give you another vibe.",
    image: "woman.png",
  },
];

export function NewArrival() {
  return (
    <div >
      <SectionHeader topTitle="Featured" title="New Arrival"></SectionHeader>
      <div className=" grid gap-8 grid-cols-2 grid-rows-1  mt-[60px] max-h-[600px] ">
        <ArrivalItems
          position="bottom"
          item={items.at(0)}
          className="bg-black "
        ></ArrivalItems>

        <div className="grid grid-cols-1 grid-rows-2 gap-8">
          <ArrivalItems
            position="left"
            item={items.at(1)}
            className="bg-[#0D0D0D]"
          ></ArrivalItems>
          <div className="grid grid-cols-2 grid-rows-1 gap-8 ">
            <ArrivalItems
              position="center"
              item={items.at(1)}
              className="bg-[#0D0D0D]"
            ></ArrivalItems>
            <ArrivalItems
              position="center"
              item={items.at(1)}
              className="bg-[#0D0D0D]"
            ></ArrivalItems>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrivalItems({ item, className, position }) {
  return (
    <LayoutArrival position={position} className={className}>
      <img
        src={item.image}
        className="max-h-full object-contain"
        alt="description"
      />
      <div className="max-w-[250px] text-white flex flex-col z-10 absolute left-[30px] gap-4 bottom-8">
        <span className="text-2xl font-semibold">{item.title}</span>
        <span className="text-[#FAFAFA] text-[14px]">{item.description}</span>
        <Link to={`${item.category}/${item.id}`}>
          <span className="font-medium border-b border-slate-200/70">Shop Now</span>
        </Link>
      </div>
    </LayoutArrival>
  );
}

function LayoutArrival({ children, position, className }) {
  const PositionLayout =
    {
      bottom: PositionImageBottom,
      left: PositionImageLeft,
      center: PositionImageCenter,
    }[position] ?? PositionImageBottom;

  return <PositionLayout className={className}>{children}</PositionLayout>;
}

function PositionImageBottom({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        " relative flex justify-center items-center pt-[90px] px-[30px]"
      )}
    >
      {children}
    </div>
  );
}

function PositionImageLeft({ children, className }) {
  return (
    <div className={clsx(className, "relative flex justify-end pl-[25%]")}>
      {children}
    </div>
  );
}

function PositionImageCenter({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "relative flex justify-center items-center max-h-full max-w-full px-[5%] py-[5%]"
      )}
    >
      {children}
    </div>
  );
}
