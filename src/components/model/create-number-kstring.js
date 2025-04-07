export function createNumberKString(number) {
  let result = (number / 1000).toFixed(1);
  result = result.endsWith(".0") ? result.slice(0, -2) : result;
  if (number > 1000) {
    result = result + "k";
  }
  return result;
}
