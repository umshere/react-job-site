import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout></MainLayout>}>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="/jobs" element={<JobsPage></JobsPage>}></Route>
      <Route path="/*" element={<NotFound></NotFound>}></Route>
    </Route>
  )
);
function App() {
  Route;
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
