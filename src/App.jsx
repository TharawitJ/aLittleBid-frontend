import React from "react";
import { RouterProvider } from "react-router";
import Router from "./routes/AppRouter.jsx";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
