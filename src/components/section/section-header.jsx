import { TwoElipse } from "../svgIcon/two-elipse";

export function SectionHeader({timeData, moveList, title, topTitle}) {

    
  const timeKeys = timeData && Object.keys(timeData);

  return (
    <div className="flex justify-between items-end">
      <div className="w-[600px] flex justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex gap-[10px] items-center">
            <div className="w-5 h-10 bg-[#DB4444]"></div>
            <span className="text-[#DB4444]">{topTitle}</span>
          </div>
          <span className="text-4xl font-semibold">{title}</span>
        </div>
        {timeData && <div className="flex gap-4 items-end">
          {timeKeys.map((key, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <span className="text-xs font-medium">{key}</span>
                <div className="flex gap-4 items-center">
                  <span className="text-[32px] font-bold leading-8">
                    {String(timeData[key]).padStart(2, "0")}
                  </span>
                  {timeKeys.length - 1 !== index && <TwoElipse></TwoElipse>}
                </div>
              </div>
            );
          })}
        </div> }
      </div>
      {moveList && <div className="flex gap-2">
        <div
          onClick={() => moveList(-1)}
          className="transition-colors flex items-center justify-center w-[46px] h-[46px] rounded-4xl bg-[#F5F5F5] hover:bg-[#e2e0e0]"
        >
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1L1 8L8 15M1 8H17"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          onClick={() => moveList(1)}
          className="transition-colors flex items-center justify-center w-[46px] h-[46px] rounded-4xl bg-[#F5F5F5] hover:bg-[#e2e0e0]"
        >
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 8H18M18 8L11 1M18 8L11 15"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>}
    </div>
  );
}
