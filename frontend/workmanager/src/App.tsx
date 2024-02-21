import React from 'react';
import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './views/login/login';
import './App.css';
import AuthProvider from './components/auth/auth_context'
import Work from './views/work/work'
import ProtectedRoutes from './components/auth/protected_routes';
import MainLayout from './views/layout/main_layout'
import RequestPage from './views/request/request'
import DashBoard from './views/dashboard/dash_board';
import ServicePage from './views/service/service';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Using the element property you are creating the component. For the component property react creates the component. You only want to
            use component if its not nested in a <Routes> <Route> structure because react cant optimize */}
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/work"
              element={
                <MainLayout>
                  <Work />
                </MainLayout>
              } />
            <Route path="/request"
              element={
                <MainLayout>
                  <RequestPage />
                </MainLayout>
              } />
            <Route path="/dashboard"
              element={
                <MainLayout>
                  <DashBoard />
                </MainLayout>
              } />
            <Route path="/service"
              element={
                <MainLayout>
                  <ServicePage />
                </MainLayout>
              } />
          </Route>
          {/* <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
          {/* Other routes */}
          {/* Default route should be pointing to dashboard. If the user isnt logged in. The Auth Provider should redirect to login screen.
            Can change it once a dashboard component is created */}
          <Route
            path="*"
            element={<Navigate to="/login" />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
