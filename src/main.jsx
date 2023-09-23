import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componenets/Root/Root';
import Home from './componenets/Home/Home';
import AppliedJobs from './componenets/AppliedJobs/AppliedJobs';
import Blogs from './componenets/Blogs/Blogs';
import Statistics from './componenets/Statistics/Statistics';
import ErrorPage from './componenets/ErrorPage/ErrorPage';
import JobDetails from './componenets/JobDetails/JobDetails';
// import Jobs from './componenets/Jobs/Jobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      // {
      //   path: '/jobs',
      //   element:<Jobs></Jobs>
      // },
      {
        path: '/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader:()=>fetch('../jobs.json')
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader:()=>fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
