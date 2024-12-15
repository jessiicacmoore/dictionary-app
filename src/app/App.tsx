import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppProvider from "@app/Provider";
import { PageLayout } from "@features/layout";

const router = createBrowserRouter([{ path: "/", element: <PageLayout /> }]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
