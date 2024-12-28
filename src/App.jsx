import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { MouseFollower, UpdateFollower } from "react-mouse-follower";
import ProductList from "./components/ProductList";
import SingleProducts from "./components/SingleProducts";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/mens",
    element: <ProductList category="men"></ProductList>,
  },
  {
    path: "/womens",
    element: <ProductList category="women"></ProductList>,
  },
  {
    path: "/kids",
    element: <ProductList category="kids"></ProductList>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/products/:productId",
    element: <SingleProducts></SingleProducts>,
  },
  {
    path: "cart",
    element: <SingleProducts></SingleProducts>,
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
