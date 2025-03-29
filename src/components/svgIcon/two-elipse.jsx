import clsx from "clsx";

export function TwoElipse({ className }) {
  return (
    <svg
      className={clsx(className)}
      width="4"
      height="16"
      viewBox="0 0 4 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill="#E07575" />
      <circle cx="2" cy="14" r="2" fill="#E07575" />
    </svg>
  );
}
