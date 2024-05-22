import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, authProtected } from "./allRoutes";
import OpenRoute from "../Components/Core/OpenRoute";
import PrivateRoute from "../Components/Core/PrivateRoute";

const Index = () => {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route>
            {publicRoutes.map((r, id) => (
              <Route
                path={r.path}
                element={<OpenRoute>{r.component}</OpenRoute>}
                key={id}
                exact={true}
              />
            ))}
          </Route>

          <Route>
            {authProtected.map((r, id) => (
              <Route
                path={r.path}
                element={<PrivateRoute>{r.component}</PrivateRoute>}
                key={id}
                exact={true}
              />
            ))}
          </Route>
        </Routes>
      </React.Fragment>
    </Router>
  );
};

export default Index;
