import React, {useEffect} from "react";
import { RouterProvider } from "react-router";
import AppRouter from "./routes/AppRouter.jsx";
import useUserStore from "./stores/user.store.js";  
import {connectSocket, disconnectSocket} from "./socket/socketService.js"; 

function App() {
  
  const token = useUserStore((state) => state.token);
  useEffect(() => {
    if (token) {
      connectSocket();
    } else {
      disconnectSocket();
    }
  }, [token]);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
