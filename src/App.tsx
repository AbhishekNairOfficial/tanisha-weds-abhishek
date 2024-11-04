import { LazyMotion } from "framer-motion"
import HomePage from './pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import MemoriesPage from "./pages/Memories/Memories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/memories",
    element: <MemoriesPage />,
  },
]);


function App() {
  const loadFeatures = () => import("./utils/framer/features").then(res => res.default)

  return (
    <div className='bg-bg'>
      <LazyMotion strict features={loadFeatures}>
        <RouterProvider router={router} />
      </LazyMotion>
    </div>
  )
}

export default App
