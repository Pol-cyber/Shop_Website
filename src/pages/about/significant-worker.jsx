import { useState } from "react";
import { TabSwitcher } from "../../components/uikit/ui-tab-switcher";
import { SIGNIFICANT_WORKERS } from "./constants";
import { Link } from "react-router";
import { TwitterIcon } from "./icon/twitter";
import { InstagramIcon } from "./icon/instagram";
import { LinkedInIcon } from "./icon/linkedin";

export function SignificantWorkers() {
  const [indexCurrentItem, setIndexCurrentitem] = useState(0);


  return (
    <div className="relative pb-15">
      <div className="flex justify-between ">
        {SIGNIFICANT_WORKERS[indexCurrentItem].map((value, index) => {
          return (
            <div key={index} className="w-[30%]">
              <div className="bg-[#F5F5F5] w-[100%] h-[430px] flex items-center justify-center">
                <img src={value.image} className="h-[100%]"></img>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex  flex-col gap-2">
                  <p className="text-[32px] font-medium">{value.name}</p>
                  <p>{value.role}</p>
                </div>
                <div className="flex gap-4">
                  <Link to={value.twitter}>
                    <TwitterIcon></TwitterIcon>
                  </Link>
                  <Link to={value.instagramm}>
                    <InstagramIcon></InstagramIcon>
                  </Link>
                  <Link to={value.linkedin}>
                    <LinkedInIcon></LinkedInIcon>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <TabSwitcher
        list={SIGNIFICANT_WORKERS}
        indexCurrentItem={indexCurrentItem}
        setIndexCurrentitem={setIndexCurrentitem}
      ></TabSwitcher>
    </div>
  );
}
