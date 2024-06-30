import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductView from "./pages/ProductView";
import { ProductDataProvider } from "./context/ProductContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>error</div>,
    },
    {
      path: "/:product",
      element: <ProductView />,
      errorElement: <div>error</div>,
    },
    {
      path: "/cats",
      element: <Category />,
      errorElement: <div>error</div>,
    },
    {
      path: "/dogs",
      element: <Category />,
      errorElement: <div>error</div>,
    },
  ]);
  return (
    <ProductDataProvider>
      <RouterProvider router={router} />
    </ProductDataProvider>
  );
}

export default App;
