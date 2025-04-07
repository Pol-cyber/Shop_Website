import { AboveArrow } from "../../components/svgIcon/arrow-above";

export function AboveButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="w-[46px] h-[46px] flex justify-center items-center transition-colors cursor-pointer hover:bg-[#ebe8e8] absolute rounded-4xl bg-[#F5F5F5] bottom-8 right-[90px]"
      onClick={scrollToTop}
    >
      <AboveArrow></AboveArrow>
    </button>
  );
}
