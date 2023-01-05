import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeliveryPage from "./pages/delivery/DeliveryPage";
import LoginPage from "./pages/login/LoginPage";
import MaterialsPage from "./pages/materials/MaterialsPage";
import OrderPage from "./pages/order/OrderPage";
import ReportPage from "./pages/report/ReportPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
