import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "routes/routes";

function App() {
  let RouteIntegration = () => {
    return useRoutes(routes);
  };
  return (
    <div>
      <RouteIntegration />
    </div>
  );
}

export default App;
