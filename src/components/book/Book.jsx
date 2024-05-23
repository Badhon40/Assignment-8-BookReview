import {  useLoaderData, useParams} from "react-router-dom";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveBookList, saveWishList } from "../../utility/localstorage";



const Book = () => {
    const books=useLoaderData()
    const {id}=useParams()
    const intId=parseInt(id)
    const book=books.find(book=>book.id==intId)
    // console.log(book)
    

    const handleReadBook=()=>{
        saveBookList(intId)
        
    }


    const handleWishList=()=>{
        saveWishList(intId)
    }



    return (
        <div>
           <section>
            <div className="container flex flex-col justify-center mx-auto lg:py-24 lg:flex-row lg:gap-5">
                <div className="flex items-center max-w-sm bg-gray-200 p-20 justify-center rounded-xl mt-8 lg:mt-0 ">
                    <img src={book.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm md:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-4xl">{book.bookName}</h1>
                    <p className="py-4">By : {book.author}</p>
                    <hr className="" />
                    <p className="py-4">{book.category}</p>
                    <hr />
                    <p className="mt-4 mb-8 text-lg text-gray-500 sm:mb-8"><span className="font-bold text-xl text-black">Review :</span> {book.review}
                    </p>
                    <div className=" mb-2">
                    <span className="block mb-4"><span className="font-bold">Tag :</span>  {
                        book.tags.map((tag)=><a key={tag} className="mr-4 text-xs  text-success bg-gray-200 font-bold px-2 rounded-lg ">{tag}</a>)
                    }</span>

                    <hr />
                    <section>
                    <div className="container mx-au overflow-x-auto py-3">
                        <table className="w-full">
                            <tbody className="">
                                <tr>
                                    <td scope="row">
                                        <h3 className=" text-gray-500">Number of Pages :</h3>
                                    </td>
                                    <td>
                                        <span className="font-bold">{book.totalPages}</span>
                                    </td>
                                   
                                </tr>
                                
                                <tr>
                                    <td scope="row" className="text-left">
                                        <h3 className=" text-gray-500">Publisher :</h3>
                                    </td>
                                    <td>
                                        <span className="font-bold">{book.publisher}</span>
                                    </td>
                                   
                                </tr>
                                <tr>
                                    <td scope="row" className="text-left">
                                        <h3 className=" text-gray-500">Year of Publishing :</h3>
                                    </td>
                                    <td>
                                        <span className="font-bold">{book.yearOfPublishing}</span>
                                    </td>
                                   
                                </tr>
                                <tr>
                                    <td scope="row" className="text-left">
                                        <h3 className=" text-gray-500">Rating :</h3>
                                    </td>
                                    <td>
                                        <span className="font-bold">{book.rating}</span>
                                    </td>
                                   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                                    
                </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button onClick={handleReadBook} className="btn btn-success text-white">Read</button>
                        <ToastContainer></ToastContainer>
                        <button onClick={handleWishList} className="btn btn-info  text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </section>

        </div>
    );
};

export default Book;