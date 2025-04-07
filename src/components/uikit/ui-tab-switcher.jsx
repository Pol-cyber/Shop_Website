import clsx from "clsx";
import { Elipse } from "../svgIcon/elipse";

export function TabSwitcher({className,list,indexCurrentItem,setIndexCurrentitem}) {
  return (
    <div className={clsx(className,"flex absolute bottom-3 left-1/2 transform -translate-x-1/2 gap-3")}>
      {list.map((value, index) => {
        return (
          <Elipse
            key={index}
            type={index === indexCurrentItem ? "pick" : "df"}
            height={index === indexCurrentItem ? "14" : "12"}
            width={index === indexCurrentItem ? "14" : "12"}
            onClick={() => setIndexCurrentitem(index)}
          />
        );
      })}
    </div>
  );
}

