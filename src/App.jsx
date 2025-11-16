import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css'
import Layout from "./components/Layout";

// الصفحات/Sections
import Hero from "./components/Hero";
import Report from "./components/Report";
import Timeline from "./components/Timeline";
import Missing from "./components/Missing";

// صفحات منفصلة
import About from "./pages/About";
import MissingSec from "./pages/Missing";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound";

function Home() {
  return (
    <>
      <Hero />
      <Report />
      <Timeline />
      <Missing />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true); // حالة التحميل

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white"
        style={{ transition: "0.3s ease" }}
      >
        <div
          className="spinner-border text-success mb-3"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        ></div>
        <h5 className="text-success fw-bold">جارٍ التحميل...</h5>
      </div>
    );
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout>
                <Home />
              </Layout>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/report"
          element={
            <>
              <Layout showFooter={false}>
                <Form />
              </Layout>
            </>
          }
        />
        <Route
          path="/missing"
          element={
            <>
              <Layout showFooter={false}>
                <MissingSec />
              </Layout>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Layout>
                <Contact />
              </Layout>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router >
  );
}

export default App;
