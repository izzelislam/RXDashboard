import { Route, Routes } from "react-router-dom";
import DashboardPage from "../views/dashboard";
import LoginPage from "../views/pages/auth/login";
import ButtonPage from "../views/pages/ui/button";
import StarterPage from "../views/pages/page/starter";
import CardPage from "../views/pages/ui/card";
import ToastPage from "../views/pages/ui/toast";


const RouteApp: React.FC = () => {
  return (
    <Routes>
      {/* you can define your route here */}

      {/* end your route */}

      {/* page routes */}
      <Route path="/" element={<DashboardPage />} />
      <Route path="/login-one" element={<LoginPage />} />
      <Route path="/starter-page" element={<StarterPage />} />
      {/* end page routes */}

      {/* ui routes */}
      <Route path="/button" element={<ButtonPage />} />
      <Route path="/card" element={<CardPage />} />
      <Route path="/toast" element={<ToastPage />} />
      {/* end ui routes */}
    </Routes>
  )
}

function AppRoutes() {
  return (
    <RouteApp />
  )
}

export default AppRoutes