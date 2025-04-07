


export function CategoryCard({categoryInfo}){

    return( <div className="h-[145px] border gap-4 border-black/30 rounded-[4px] flex flex-col items-center justify-center hover:bg-[#DB4444] cursor-pointer">
        <img className="w-[56px] h-[56px]" src={`category/${categoryInfo.titleImage}`}></img>
        <span className="text-center">{categoryInfo.title}</span>
    </div>)
}