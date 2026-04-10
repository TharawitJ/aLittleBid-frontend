import React from "react"
import AppRouter from "./routes/AppRouter.jsx";
import { RouterProvider } from "react-router"

function App() {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  )};

  export default App
