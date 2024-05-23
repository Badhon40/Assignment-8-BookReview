 import { toast } from "react-toastify";
  import 'react-toastify/dist/ReactToastify.css';

 const getStoreBooklist=()=>{
    const storeBookList=localStorage.getItem('book-store');

    if(storeBookList){
        return JSON.parse(storeBookList)
    }
    return []
 }
 
 
 const saveBookList=(id)=>{
        const storeBookLists=getStoreBooklist();
        const exists =storeBookLists.find((bookId)=>bookId===id);
        if(!exists){
            storeBookLists.push(id);
            localStorage.setItem('book-store',JSON.stringify(storeBookLists))
            toast("Add to Read list");
        }
        else
        toast('You add already');
 }


//  for wish list

const getStoreWishlist=()=>{
    const storeWishList=localStorage.getItem('Wish-store');

    if(storeWishList){
        return JSON.parse(storeWishList)
    }
    return []
 }
 
 
 const saveWishList = (id) => {
    const storeBookLists = getStoreBooklist();
    const storeWishLists = getStoreWishlist();

    const existsInReadList = storeBookLists.find((bookId) => bookId === id);
    if (existsInReadList) {
        toast('Cannot add to Wishlist, already in Read list');
        return;
    }

    const existsInWishList = storeWishLists.find((wishId) => wishId === id);
    if (!existsInWishList) {
        storeWishLists.push(id);
        localStorage.setItem('Wish-store', JSON.stringify(storeWishLists));
        toast("Added to Wishlist");
    } else {
        toast('Already added to Wishlist');
    }
}

 export {getStoreBooklist,saveBookList,getStoreWishlist,saveWishList}