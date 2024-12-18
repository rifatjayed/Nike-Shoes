import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
