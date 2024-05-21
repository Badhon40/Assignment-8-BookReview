import { createBrowserRouter } from "react-router-dom";
import LayOut from "../layOut/LayOut";
import Error from "../../pages/error/Error";
import Home from "../../pages/home/Home";
import ListedPage from './../../pages/listedPage/ListedPage';
import ReadPage from './../../pages/readPage/ReadPage';

 

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/listedbook',
            element:<ListedPage></ListedPage>
        },
        {
            path:'/readpage',
            element:<ReadPage></ReadPage>
        }
      ]
    },
  ]);