import "./App.css";
import Login from "./components/Login/login";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks/redux-hooks";
import Home from "./components/Home/home";

const PrivateRoutes = () => {
  return useAppSelector((state) => state.Auth.api_key) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
