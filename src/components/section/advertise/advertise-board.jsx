import { UiButtonLink } from "../../uikit/ui-button-link";

const timeData = {
  Days: 3,
  Hours: 23,
  Minutes: 19,
  Seconds: 56,
};

export function AdvertiseBoard() {
  const timeKeys = timeData && Object.keys(timeData);

  return (
    <div className="relative">
      <div className="bg-black flex px-11 py-10 gap-7 items-center">
        {/* Блок із текстом (40%) */}
        <div className="flex flex-col pl-2 py-5 text-green-400 flex-[4] gap-10 justify-between">
          <div className="flex flex-col justify-start gap-8">
            <span className="font-semibold">Categories</span>
            <div className="overflow-hidden ">
              <span className="text-5xl font-semibold leading-tight">
                Enhance Your Music Experience
              </span>
            </div>
            {timeData && (
              <div className="flex gap-4 items-end">
                {timeKeys.map((key, index) => {
                  return (
                    <div
                      className=" text-black flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-4xl"
                      key={index}
                    >
                      <div className="flex items-center">
                        <span className="text-[22px] leading-[20px] font-bold">
                          {String(timeData[key]).padStart(2, "0")}
                        </span>
                      </div>
                      <span
                        className="text-black/80 text-[11px] font-medium"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {key}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex items-start">
            <UiButtonLink
              className="bg-green-400 hover:bg-green-300 w-auto px-6 py-2"
              text="Buy Now!"
              link=""
            />
          </div>
        </div>

        {/* Блок із зображенням (60%) */}
        <div className="px-4 py-11 flex h-[420px] items-center justify-end flex-[6]">
          <img className="max-w-[700px] w-[96%] z-10" src="bussAdv.png" />
        </div>
      </div>
      <svg
        width="818"
        height="100%"
        viewBox="0 0 818 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0"
      >
        <g opacity="0.3" filter="url(#filter0_f_79_1203)">
          <ellipse cx="452" cy="250" rx="252" ry="250" fill="#D9D9D9" />
        </g>
        <defs>
          <filter
            id="filter0_f_79_1203"
            x="0"
            y="-200"
            width="904"
            height="900"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_79_1203"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
