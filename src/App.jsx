import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Background from "./components/Background";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Background",
    element: <Background />,
  },
]);
function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
