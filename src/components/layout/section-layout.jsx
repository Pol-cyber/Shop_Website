import clsx from "clsx"


export function SectionLayout({className, mainContent}){

    return (
        <div className={clsx(className, "px-[135px] flex flex-col gap-10")}>
            {mainContent}
        </div>
    )
}