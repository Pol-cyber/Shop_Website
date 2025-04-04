export function StoreService() {
  return (
    <div className="px-[115px] flex justify-between gap-2">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src="freeDeliv.png" className="w-[80px] h-[80px]"></img>
        <div className="flex flex-col gap-2 text-center">
          <span className="font-semibold text-[20px]">FREE AND FAST DELIVERY</span>
          <span className="text-[14px]">Free delivery for all orders over $140</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src="customerServ.png" className="w-[80px] h-[80px]"></img>
        <div className="flex flex-col gap-2 text-center">
          <span className="font-semibold text-[20px]">24/7 CUSTOMER SERVICE</span>
          <span className="text-[14px]">Friendly 24/7 customer support</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src="moneyBackGarant.png" className="w-[80px] h-[80px]"></img>
        <div className="flex flex-col gap-2 text-center">
          <span className="font-semibold text-[20px]">MONEY BACK GUARANTEE</span>
          <span className="text-[14px]">We reurn money within 30 days</span>
        </div>
      </div>
    </div>
  );
}
