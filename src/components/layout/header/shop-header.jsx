import { useLocation } from "react-router";
import { MainHeader } from "./main-header";
import { TopHeader } from "./top-header";

export function ShopHeader() {
  const location = useLocation(); 
  const currentPath = location.pathname;

  return (
    <header>
      <TopHeader></TopHeader>
      <MainHeader currentPath={currentPath}></MainHeader>
    </header>
  );
}
