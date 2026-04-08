import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Offline } from "react-detect-offline";
import './App.css'
import Layout from "./components/layout/Layout";

// Public Pages
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import MissingSec from "./pages/Missing";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import PersonDetails from "./pages/Details";
import ParentAwareness from "./pages/Awareness"
// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
// Alerts
import NotFound from "./pages/NotFound";
import OfflineAlert from "./components/OfflineAlert";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white">
        <div className="spinner-border text-success mb-3" role="status" style={{ width: "3rem", height: "3rem" }}></div>
        <h5 className="text-success fw-bold">جارٍ التحميل...</h5>
      </div>
    );
  }

  return (
    <>
      <Offline>
        <OfflineAlert />
      </Offline>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="report" element={<Form />} />
          <Route path="missing" element={<MissingSec />} />
          <Route path="details/:id" element={<PersonDetails />} />
          <Route path="parent-awareness" element={<ParentAwareness />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
