import clsx from "clsx";
import { Link } from "react-router";

/**
 * 
 * @param {{
 *  className: string,
 *  text: string,
 *  link: string,
 * }} props 
 * @returns 
 */
export function UiButtonLink({className, text,link}){

    return(
        <Link to={`${link}`} className={clsx(className, " rounded-[4px] bg-[#DB4444] hover:bg-[#E07575] cursor-pointer text-white py-4 px-12")}>
            {text}
        </Link>
    )

}