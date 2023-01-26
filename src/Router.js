import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

function Router() {
  return (
    <Routes>
      <Route axact path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default Router;
