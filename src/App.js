import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import DirectoryPage from "./pages/DirectoryPage";
import Footer from "./components/Footer";

function App() {
  const routes = [
    {
      path: "/",
      title: "All Employees",
    },

    {
      path: "/executive",
      title: "Executives",
    },

    {
      path: "/mid",
      title: "Mid Managements",
    },

    {
      path: "/junior",
      title: "Juniors",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              index={index}
              path={route.path}
              element={
                <Banner title={route.title}>
                  <DirectoryPage routes={routes} currRoute={route.path} />
                  <Footer />
                </Banner>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
