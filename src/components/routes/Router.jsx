import { createBrowserRouter } from "react-router-dom";
import LayOut from "../layOut/LayOut";
import Error from "../../pages/error/Error";
import Home from "../../pages/home/Home";
import ListedPage from './../../pages/listedPage/ListedPage';
import ReadPage from './../../pages/readPage/ReadPage';
import Book from "../book/Book";
import ReadBook from './../readBook/ReadBook';
import WishListed from "./wishListed/WishListed";

 

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
            element:<ReadPage></ReadPage>
        }
      ]
    },
  ]);