import { Outlet } from "react-router";
import { ShopHeader } from "./components/layout/header/shop-header";
import { MainPage } from "./pages/main-page";

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <ShopHeader></ShopHeader>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
