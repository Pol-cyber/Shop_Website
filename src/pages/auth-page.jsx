import { Link } from "react-router";
import { GoogleIcon } from "../components/svgIcon/google";

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

