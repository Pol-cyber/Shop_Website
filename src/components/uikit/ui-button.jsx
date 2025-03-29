import clsx from "clsx";


/**
 * 
 * @param {{
 *  className: string,
 *  text: string,
 * }} props 
 * @returns 
 */
export function UiButton({className, text}){

    return(
        <button className={clsx(className, " rounded-[4px] bg-[#DB4444] hover:bg-[#E07575] cursor-pointer text-white py-4 px-12")}>
            {text}
        </button>
    )

}