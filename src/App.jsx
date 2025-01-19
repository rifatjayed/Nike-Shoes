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
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home></Home> <Footer></Footer>
      </>
    ),
  },
  {
    path: "/mens",
    element: (
      <>
        <Navbar2></Navbar2>
        <ProductList category="men"></ProductList>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/womens",
    element: (
      <>
        <Navbar2></Navbar2> <ProductList category="women"></ProductList>{" "}
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/kids",
    element: (
      <>
        <Navbar2></Navbar2> <ProductList category="kid"></ProductList>{" "}
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        {" "}
        <Navbar2></Navbar2>
        <Contact></Contact> <Footer></Footer>
      </>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <>
        <Navbar2></Navbar2> <SingleProducts></SingleProducts>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "cart",
    element: (
      <>
        <Navbar2></Navbar2>
        <Cart></Cart>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar2></Navbar2>
        <LoginPage></LoginPage>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Navbar2></Navbar2>
        <Register></Register>,<Footer></Footer>
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
