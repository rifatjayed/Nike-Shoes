import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { MouseFollower, UpdateFollower } from "react-mouse-follower";
import ProductList from "./components/ProductList";
import SingleProducts from "./components/SingleProducts";
import Contact from "./pages/Contact";
import Navbar2 from "./components/Navbar2";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/mens",
    element: (
      <>
        <Navbar2></Navbar2>
        <ProductList category="men"></ProductList>
      </>
    ),
  },
  {
    path: "/womens",
    element: (
      <>
        <Navbar2></Navbar2> <ProductList category="women"></ProductList>
      </>
    ),
  },
  {
    path: "/kids",
    element: (
      <>
        <Navbar2></Navbar2> <ProductList category="kid"></ProductList>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        {" "}
        <Navbar2></Navbar2>
        <Contact></Contact>
      </>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <>
        <Navbar2></Navbar2> <SingleProducts></SingleProducts>,
      </>
    ),
  },
  {
    path: "cart",
    element: (
      <>
        <Navbar2></Navbar2>
        <Cart></Cart>
      </>
    ),
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
