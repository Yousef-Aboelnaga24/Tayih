import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css'
import Layout from "./components/layout/Layout";

// صفحات منفصلة
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import MissingSec from "./pages/Missing";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import PersonDetails from "./pages/Details";
import ParentAwareness from "./pages/Awareness"
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import OfflineAlert from "./pages/OfflineAlert";

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
      <OfflineAlert />
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/about" element={<Layout showFooter={false}><About /></Layout>} />
        <Route path="/report" element={<Layout showFooter={false}><Form /></Layout>} />
        <Route path="/missing" element={<Layout showFooter={false}><MissingSec /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/details/:id" element={<Layout showFooter={false}><PersonDetails /></Layout>} />
        <Route path="/parent-awareness" element={<Layout showFooter={false}><ParentAwareness /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
