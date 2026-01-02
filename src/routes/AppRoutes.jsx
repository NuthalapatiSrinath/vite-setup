import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Layouts
import Layout from "../layouts/Layout";

// Pages (We will create these next, placeholders for now)
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
// import Staff from "../pages/Staff";
// import Locations from "../pages/Locations";
// import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

// --- PROTECTED ROUTE COMPONENT ---
// This checks Redux state. If not logged in, redirects to /login
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// --- PUBLIC ROUTE COMPONENT ---
// If already logged in, prevent access to Login page and redirect to Dashboard
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* --- Public Routes --- */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* --- Protected Admin Routes --- */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        {/* <Route path="staff" element={<Staff />} />
        <Route path="locations" element={<Locations />} />
        <Route path="settings" element={<Settings />} /> */}
      </Route>

      {/* --- Catch All (404) --- */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
