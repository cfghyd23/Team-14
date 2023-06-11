import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import Header from "components/header/Header";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Testinomial from "components/testinomial/Testinomial";
import Login from './components/Login'
import { Dashboard } from "@mui/icons-material";
import Dashboard2 from './components/Dashboard'
import OtherPage from './components/OtherPage'
import Profile from './components/Profile'
import DownloadCertificate from "components/DownloadCertificate";
import Payment from "components/Payment";
import Admin from './components/Admin'
import Dashboard3 from "./scenes/dashboard";
import Bar from "./scenes/bar";
import Charts from "Charts";
function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">

      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/other-page" element={<OtherPage />} />
            <Route path="/my-profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard2 />} />
            <Route path="/my-payment" element={<Payment />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="my-achieve" element={<DownloadCertificate />} />
            <Route path='/admin' element={<Charts/>}/>
            <Route path="/charts" element={<Dashboard3 />} />
            <Route path="/bar" element={<Bar />} />
           
            < Route path="/testinomial" element={<Testinomial />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
