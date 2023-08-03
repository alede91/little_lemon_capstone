import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

const LazySharedPage = React.lazy(() => import("./pages/SharedPage"));
const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyMenu = React.lazy(() => import("./pages/Menu"));
const LazyReserve = React.lazy(() => import("./pages/Reserve"));
const LazyError = React.lazy(() => import("./pages/Error"));

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense >
                <LazySharedPage />
              </React.Suspense>
            }
          >
            <Route
              index
              element={
                <React.Suspense >
                  <LazyHome />
                </React.Suspense>
              }
            />
            <Route
              path="menu"
              element={
                <React.Suspense >
                  <LazyMenu />
                </React.Suspense>
              }
            />
            <Route
              path="reserve"
              element={
                <React.Suspense >
                  <LazyReserve />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense >
                  <LazyError />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
