import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { AuthContext } from "./contexts/auth.context";

import router from "./Router/route";

function App() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
