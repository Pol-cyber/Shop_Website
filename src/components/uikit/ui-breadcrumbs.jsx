import clsx from "clsx";
import React from "react";
import { Link, useLoaderData, useLocation } from "react-router";

export function Breadcrumbs({ errorPage, className }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const { product } = useLoaderData() || {}; // Отримуємо товар через loader, якщо він є

  return (
    <div className={clsx(className, "breadcrumbs text-[15px]")}>
      {/* Статичні breadcrumbs */}
      <Link to="/" className="text-gray-500 hover:text-black">
        Home
      </Link>

      {pathnames.length > 0 && <span className="text-black/50"> / </span>}

      {errorPage && <span className="text-black font-semibold">404 Error</span>}

      {/* Динамічні breadcrumbs, що базуються на URL */}
      {!errorPage &&
        pathnames.map((part, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={to}>
              <span className={isLast ? "text-black" : "text-black/50"}>
                {index > 0 && <span> / </span>}
                <Link
                  to={to}
                  className={isLast ? "font-semibold" : "hover:text-black"}
                >
                  {part}
                </Link>
              </span>
            </React.Fragment>
          );
        })}

      {/* Якщо у нас є продукт, додаємо його назву в breadcrumbs */}
      {!errorPage && product && (
        <span className="text-black">
          {" / "}
          {product.name}
        </span>
      )}
    </div>
  );
}
