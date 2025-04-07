import clsx from "clsx"

export function StoryShop({className}) {
  return (
    <section className={clsx(className, "min-h-[350px] max-h-[800px] h-full pt-[60px] ml-[135px] mb-[140px] w-full flex gap-12")}>
      <div className="flex flex-[4] items-center justify-end py-[130px]">
        <div className="w-[65%] flex flex-col gap-12">
          <div className="flex flex-col gap-10">
            <h1 className="text-[54px] font-semibold">Our Story</h1>
            <div className="flex flex-col gap-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[6] flex items-center justify-end">
        <img src="shopStory.png" className="h-full"></img>
      </div>
    </section>
  );
}
