import { useEffect, useState } from "react";

export function useMainPageMedia(){
    const [itemsPerLine, setItemsPerSlide] = useState(getItemsPerLine());
    
      useEffect(() => {
        const handleResize = () => {
          setItemsPerSlide(getItemsPerLine());
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      function getItemsPerLine() {
        const width = window.innerWidth;
        if (width >= 1200) return 4;
        if (width >= 992) return 3;
        if (width >= 768) return 2;
        return 2;
      }

    return {itemsPerLine}
}