import { useState } from "react";

export function useIterateList(itemsPerLine, list, countRow = 1) {
  const [indexCurrentElement, setIndexCurrentElement] = useState(0);

  const countItem =
    itemsPerLine * countRow > list.length
      ? list.length
      : itemsPerLine * countRow;

  function moveList(number) {
    setIndexCurrentElement((prev) => {
      const newIndex = prev + number;
      if ((newIndex + countItem) % (list.length + 1) === 0) {
        return prev;
      }
      if (newIndex < 0) {
        return 0;
      }
      return newIndex;
    });
  }

  return { indexCurrentElement, moveList };
}
