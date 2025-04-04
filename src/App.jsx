import { Outlet } from "react-router";
import { ShopHeader } from "./components/layout/header/shop-header";
import { ShopFooter } from "./components/layout/footer/shop-footer";

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <ShopHeader></ShopHeader>
      <Outlet></Outlet>
      <ShopFooter></ShopFooter>
    </div>
  );
}

export default App;
