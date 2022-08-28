import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import DashboardPage from "./pages";
import AttendanceData from "./pages/attendanceData";
import LateNotification from "./pages/lateNotification";
import Visitors from "./pages/visitors";
import LoginPage from "./pages/login";
import NotFound from "./pages/notFound";
import PageInternals from "./pages/internals";
import EmployeesPage from "./pages/employee";
import GatePage from "./pages/gate";
import CardPage from "./pages/card";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          }
        />
        <Route
          path="/late-notification"
          element={
            <Layout>
              <LateNotification />
            </Layout>
          }
        />
        <Route
          path="/attendance"
          element={
            <Layout>
              <AttendanceData />
            </Layout>
          }
        />
        <Route
          path="/visitors"
          element={
            <Layout>
              <Visitors />
            </Layout>
          }
        />
        <Route
          path="/internal"
          element={
            <Layout>
              <PageInternals />
            </Layout>
          }
        />
        <Route
          path="/employees"
          element={
            <Layout>
              <EmployeesPage />
            </Layout>
          }
        />
        <Route
          path="/gate"
          element={
            <Layout>
              <GatePage />
            </Layout>
          }
        />
        <Route
          path="/card"
          element={
            <Layout>
              <CardPage />
            </Layout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
