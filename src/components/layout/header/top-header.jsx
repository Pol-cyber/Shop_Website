import { Link } from "react-router";

export function TopHeader() {
  return (
    <div className="w-screen bg-black">
      <div className="py-3 flex text-[#FAFAFA] text-[14px] justify-between pl-[31%] pr-[136px] gap-4">
        <div className="flex gap-2 items-center">
          <span className="min-w-[150px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <Link>
            <span className="font-semibold underline" style={{ fontFamily: 'Poppins, sans-serif' }}>ShopNow</span>
          </Link>
        </div>
        <div className="flex gap-1 items-center">
          <div className="py-[2px]">English</div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
