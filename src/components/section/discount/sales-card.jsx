export function SalesCard({ cardInfo }) {
  return (
    <div className="flex justify-center items-start flex-col gap-4">
      <div className="w-full group h-[250px] bg-[#F5F5F5] flex items-center justify-center relative">
        <div className="text-[#FAFAFA] rounded-[4px] text-center w-[55px] h-[26px] absolute top-3 left-3 bg-[#DB4444]">
          {`-${cardInfo.discount}%`}
        </div>
        <img
          src={cardInfo.image}
          className="w-[65%] h-[61%] max-w-[212px] max-h-[192px]"
        ></img>
        <div className="w-[34px] h-[76px] flex flex-col gap-2 absolute top-3 right-3">
          <div className="rounded-4xl w-[34px] h-[34px] flex items-center justify-center transition-colors bg-white hover:bg-red-300">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="rounded-4xl w-[34px] h-[34px] flex items-center justify-center transition-colors bg-white hover:bg-green-200">
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <button className="absolute cursor-pointer bottom-0 left-0 w-full bg-black text-white text-center py-2 opacity-0 transition-all duration-300 group-hover:opacity-100 ">
          Add to Cart
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[18px] font-medium">{cardInfo.name}</div>
        <div className="flex gap-3">
          <span className="text-[#DB4444]">{`$${cardInfo.salePrice}`}</span>
          <span
            className="font-medium line-through text-black/50"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >{`$${cardInfo.defaultPrice}`}</span>
        </div>
        <div className="flex items-center gap-2">
          {Array(5)
            .fill(null)
            .map((value, index) => {
              return (
                <svg
                  key={index}
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="#FFAD33"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                    fill={
                      Math.round(cardInfo.rating) > index
                        ? "#FFAD33"
                        : "rgba(0, 0, 0, 0.25)"
                    }
                  />
                </svg>
              );
            })}
          <span>{`(${cardInfo.countRaters})`}</span>
        </div>
      </div>
    </div>
  );
}
