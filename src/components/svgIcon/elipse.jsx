/**
 * 
 * @param {type: df | pick} props 
 * @returns 
 */
export function Elipse({type, onClick}) {

    const ElipseType = {
        df: DefaultElipse,
        pick: PickElipse
    }[type] ?? DefaultElipse

  return (
    <ElipseType onClick={onClick}></ElipseType>
  );
}


function DefaultElipse({onClick}){
    return (
        <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <circle opacity="0.5" cx="6" cy="6" r="6" fill="white" />
      </svg>
    )
}


function PickElipse(){
    return (
        <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="2" fill="#DB4444"/>
      </svg>
    )
}