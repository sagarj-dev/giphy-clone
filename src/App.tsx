import "./App.css";
import Login from "./components/Login/login";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks/redux-hooks";
import Home from "./components/Home/home";
import Category from "./components/Category/Category";
import { createTheme, ThemeProvider, PaletteMode } from "@mui/material";

const PrivateRoutes = () => {
  return useAppSelector((state) => state.Auth.api_key) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  const mode = useAppSelector((state) => state.settings.theme);

  const theme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:cat" element={<Category />} />
          {/* <Route path="/products" element={<Products />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
