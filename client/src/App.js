import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import RootAuth from "./components/auth/rootAuth/RootAuthComponent.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./redux/slices/auth/authSlice";
import { useMode } from "./theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext } from "./theme/theme";
import Layout from "./components/layout/Layout";
import { Settings } from "@mui/icons-material";
import Marketing from "./components/marketing/Marketing";
import PrivetRoute from "./utils/routes/PrivetRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route element={<PrivetRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/marketing" element={<Marketing />} />
            </Route>
            <Route path="/register" element={<RootAuth />} />
            <Route path="/login" element={<RootAuth />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
