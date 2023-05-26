import React, { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import CardsList from "./pages/CardsList";
import PrivateRoute from "./utils/PrivateRoutes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/list"
            element={
              <PrivateRoute>
                <CardsList />
              </PrivateRoute>
            }
          />

          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
