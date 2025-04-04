/**
 * 
 * @param {type: df | pick} props 
 * @returns 
 */
export function Elipse({ type, onClick, fillColor, strokeColor, width = 12, height = 12  }) {
  const ElipseType = {
    df: DefaultElipse,
    pick: PickElipse,
  }[type] ?? DefaultElipse;

  return <ElipseType onClick={onClick} fillColor={fillColor} strokeColor={strokeColor} width={width} height={height}/>;
}

function DefaultElipse({ onClick, fillColor = "white", strokeColor="white", width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <circle opacity="0.5" cx="6" cy="6" r="5" stroke={strokeColor} fill={fillColor} />
    </svg>
  );
}


function PickElipse({ fillColor = "#DB4444", strokeColor = "white", width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="6" stroke={strokeColor} strokeWidth="1" fill={fillColor} />
    </svg>
  );
}