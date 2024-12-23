import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { MouseFollower, UpdateFollower } from "react-mouse-follower";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

function App() {
  return (
    <>
      <MouseFollower />
      <main className="overflow-x-hidden">
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
