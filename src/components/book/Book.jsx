import { Link, useLoaderData, useParams} from "react-router-dom";


const Book = () => {
    const books=useLoaderData()
    const {id}=useParams()
    const intId=parseInt(id)
    const book=books.find(book=>book.id==intId)
    console.log(book)

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
                        <Link className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Read</Link>
                        <Link className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Wishlist</Link>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Book;