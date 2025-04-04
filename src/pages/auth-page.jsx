import { Link } from "react-router";

export function AuthPage({ fields, title, type }) {
  const ListButtons =
    {
      register: RegisterButtons,
      login: LoginButtons,
    }[type] ?? RegisterButtons;

  return (
    <div className="min-h-[696px] h-full pt-[60px] pr-[135px] pb-[140px] w-full flex">
      <div className="flex-[6] bg-[#CBE4E8] flex items-center">
        <img src="registerPhoto.png"></img>
      </div>
      <div className="flex flex-[4] items-center justify-end py-[130px]">
        <div className="w-[65%] flex flex-col gap-12">
          <div className="pr-9 flex flex-col gap-2">
            <p className="text-[36px] font-medium">{title}</p>
            <p>Enter your details below</p>
          </div>
          <form className="flex flex-col gap-10">
            {fields.map((value, index) => {
              return (
                <input
                  key={index}
                  className="border-b border-b-[#7D8184] text-[#7D8184] pb-[8px] focus:outline-none"
                  placeholder={`${value.placeholder}`}
                  name={`${value.name}`}
                ></input>
              );
            })}
            <ListButtons></ListButtons>
          </form>
        </div>
      </div>
    </div>
  );
}

function LoginButtons() {
  return (
    <div className="flex justify-between">
      <button className="text-white bg-[#DB4444] rounded-[4px] py-4 px-12">
        Log In
      </button>
      <Link to={"/register"} className="flex items-center justify-center gap-4 text-[#DB4444]">Forget Password?</Link>
    </div>
  );
}

function RegisterButtons() {
  return (
    <div className="flex flex-col gap-4">
      <button className="text-white py-4 bg-[#DB4444] rounded-[4px]">
        Create Account
      </button>
      <div className="flex flex-col gap-8">
        <button className="py-4 border border-b-[#7D8184] rounded-[4px]">
          <p className="flex items-center justify-center gap-4">
            <GoogleIcon></GoogleIcon>
            Sign up with Google
          </p>
        </button>
        <p className="flex gap-4 items-center justify-center ">
          Already have account?{" "}
          <Link
            to={"/login"}
            className="font-medium -mb-[1px] border-b border-b-black/0 hover:border-b-black"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1914_3336)">
        <path
          d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
          fill="#4285F4"
        />
        <path
          d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
          fill="#34A853"
        />
        <path
          d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
          fill="#FBBC04"
        />
        <path
          d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_1914_3336">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
