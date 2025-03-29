import { useState } from "react";


export function useIterateList(itemsPerSlide, list){
      const [indexCurrentElement, setIndexCurrentElement] = useState(0);
    
      function moveList(number) {
        setIndexCurrentElement((prev) => {
          const newIndex = prev + number;
          if ((newIndex + itemsPerSlide) % (list.length + 1) === 0) {
            return prev;
          }
          if (newIndex < 0) {
            return 0;
          }
          return newIndex;
        });
      }

      return {indexCurrentElement, moveList}
}