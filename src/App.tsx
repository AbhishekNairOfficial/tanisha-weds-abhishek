import { LazyMotion } from "framer-motion"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import React from "react";

const HomePage = React.lazy(() => import('./pages/Home/Home'));
const MemoriesPage = React.lazy(() => import("./pages/Memories/Memories"));
const GuestBookPage = React.lazy(() => import("./pages/GuestBook/GuestBookPage"));
const AdminPage = React.lazy(() => import("./pages/Admin/Admin"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/memories",
    element: <MemoriesPage />,
  },
  {
    path: "/guestbook",
    element: <GuestBookPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);


function App() {
  const loadFeatures = () => import("./utils/framer/features").then(res => res.default)

  return (
    <div className='bg-bg'>
      <React.Suspense>
        <LazyMotion strict features={loadFeatures}>
          <RouterProvider router={router} />
        </LazyMotion>
      </React.Suspense>
    </div>
  )
}

export default App
