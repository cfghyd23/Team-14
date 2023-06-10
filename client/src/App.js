import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider, buttonBaseClasses } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Payment from './components/Payment'
import PDFFile from './components/GenerateCertificate'
import {PDFDownloadLink} from '@react-pdf/renderer'
function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <PDFDownloadLink document={<PDFFile/>} fileName="Certificate">
        {({loading})=>(loading? <button>Loading Documnet..</button> :"Download")}
      </PDFDownloadLink>
      <PDFFile/>
    </div>
  );
}

export default App;
