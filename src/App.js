import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import DirectoryPage from "./pages/DirectoryPage";

function App() {
  const routes = [
    {
      path: "/",
      level: "all",
      title: "All Employees",
    },

    {
      path: "/executives",
      level: "executives",
      title: "Executives",
    },

    {
      path: "/mids",
      level: "mids",
      title: "Mid Managements",
    },

    {
      path: "/juniors",
      level: "juniors",
      title: "Juniors",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes[0].path}
          element={
            <Banner title={routes[0].title}>
              <DirectoryPage routes={routes} currRoute={routes[0]} />
            </Banner>
          }
        />
        <Route
          path={routes[1].path}
          element={
            <Banner title={routes[1].title}>
              <DirectoryPage routes={routes} currRoute={routes[1]} />
            </Banner>
          }
        />
        <Route
          path={routes[2].path}
          element={
            <Banner title={routes[2].title}>
              <DirectoryPage routes={routes} currRoute={routes[2]} />
            </Banner>
          }
        />
        <Route
          path={routes[3].path}
          element={
            <Banner title={routes[3].title}>
              <DirectoryPage routes={routes} currRoute={routes[3]} />
            </Banner>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
