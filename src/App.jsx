import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { UpdateFollower } from "react-mouse-follower";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

function App() {
  return (
    <>
      <main className="overflow-hidden">
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            zIndex: 10,
            followSpeed: 1.5,
          }}
        >
          <RouterProvider router={router} />
        </UpdateFollower>
      </main>
    </>
  );
}

export default App;
