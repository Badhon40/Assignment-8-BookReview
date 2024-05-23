import { createBrowserRouter } from "react-router-dom";
import LayOut from "../layOut/LayOut";
import Error from "../../pages/error/Error";
import Home from "../../pages/home/Home";
import ListedPage from './../../pages/listedPage/ListedPage';
import Book from "../book/Book";
import ReadBook from './../readBook/ReadBook';
import WishListed from "./wishListed/WishListed";
import PagesToRead from "../../pages/pagesToRead/PagesToRead";
import FeedBack from "../../pages/feedback/FeedBack";
import User from "../../pages/user/User";

 

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/data.json'),
        },
        {
            path:`/book/:id`,
            element:<Book></Book>,
            loader:()=>fetch(`../data.json`)
        },
        {
            path:'/listedbook',
            element:<ListedPage></ListedPage>,
            children:[
              {
                index:true,
                element:<ReadBook></ReadBook>,
                loader:()=>fetch('/data.json')
              },
              {
                path:`wishlist`,
                element:<WishListed></WishListed>,
                loader:()=>fetch('/data.json')
              }
            ]
        },
        {
            path:'/readpage',
            element:<PagesToRead></PagesToRead>,
            loader:()=>fetch('/data.json')
        },

        {
          path:'/feedback',
          element:<FeedBack></FeedBack>
        },
        {
          path:'/user',
          element:<User></User>
        }
      ]
    },
  ]);