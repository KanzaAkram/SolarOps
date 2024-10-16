

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import { themeSettings } from "./theme";

// Import components
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

// Import dashboard components
import Layout from "./scenes/Layout";
import UserManual from "./scenes/UserManual";
import Admin from "./scenes/Admin";
// import Weather from "./scenes/PowerPrediction";
// import CO2Emission from "./scenes/CO2Emission";
// import TrafficFlowMap from "./scenes/Heatmap";
// import WaterUsage from "./scenes/Fault";
// import EnergyConsumption from "./scenes/EnergyConsumption";
// import ParkingAvailability from "./scenes/ParkingAvailability";
// import UserManual from "./scenes/UserManual";
import Heatmap from "./scenes/Heatmap";
import PowerPrediction from "./scenes/PowerPrediction";
import Fault from "./scenes/Fault";

// Landing page component
const LandingPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

// Define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<UserManual />} />
        <Route path="/heatmap" element={<Heatmap />} />
        <Route path="/powerprediction" element={<PowerPrediction />} />
        <Route path="/fault" element={<Fault />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </>
  )
);

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

