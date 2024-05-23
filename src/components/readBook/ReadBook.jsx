import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreBooklist } from "../../utility/localstorage";
import { FaLocationDot } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReadBook = () => {

    const [showBook,setShowBook]=useState([])
    const [displayFilter, setDisplayFilter] = useState([]);
    const [sortBy, setSortBy] = useState("default"); // Initial sort state
  
    const handleSortChange = (event) => {
      const selectedField = event.target.value;
      setSortBy(selectedField);
  
      const sortedBooks = [...showBook].sort((bookA, bookB) => {
        switch (selectedField) {
          case "bookName":
            return bookA.bookName.localeCompare(bookB.bookName);
          case "yearOfPublishing":
            return bookB.yearOfPublishing - bookA.yearOfPublishing;
          case "rating":
            return bookB.rating - bookA.rating;
          case "totalPages":
            return bookA.totalPages - bookB.totalPages;
          default:
            return bookA.id - bookB.id; // Default to id for unexpected cases
        }
      });
  
      setDisplayFilter(sortedBooks);
    };
    
    const books=useLoaderData()
    useEffect(()=>{
        const getBooks=getStoreBooklist()
        if(books.length>0){
            const readBooks=[];

            for(const id of getBooks){
                const book=books.find(book=>book.id===id);
                if(book){
                    readBooks.push(book)
                }
            }
            setShowBook(readBooks)
            setDisplayFilter(readBooks)
        }
        
    },[])

    
    // console.log(books,showBook)
    return (
        <div className="mt-4" >
                <div className="flex justify-center ">
                <div className="flex mb-4 border-2 p-2 bg-success">
                    <select value={sortBy} onChange={handleSortChange}  className="bg-success text-white">
                    <option value="default">Sort By</option>
                    <option value="bookName">Book Name</option>
                    <option value="yearOfPublishing">Year Published</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Pages</option>
                    </select>
                </div>
                </div>
            <ul>
                {
                     displayFilter.map(book=><li key={book.id} className="mt-4">
                     <div className="card card-side border">
                      <figure className="w-44 ml-6"><img src={book.image} className="bg-gray-100 rounded-lg"  alt="Movie"/></figure>
                      <div className="card-body">
                          <h2 className="card-title">{book.bookName}</h2>
                          <p className="text-xs">By : {book.author}</p>
                          <span className="block mb-4"><span className="font-bold">Tag :</span>  {
                              book.tags.map((tag)=><a key={tag} className="mr-4 text-xs  text-success bg-gray-200 font-bold px-2 rounded-lg ">{tag}</a>)
                          } </span>
                         
                          <ul className="">
                              <li className="text-gray-600 flex items-center gap-4">
                              <FaLocationDot></FaLocationDot>Year Of Publishing: <span className="text-black font-bold">{book.yearOfPublishing}</span>
                              </li>
                              <li className="flex items-center gap-3 text-gray-600"><GrUserManager></GrUserManager>Publisher: <span className="text-black font-bold">{book.publisher}</span></li>
                              
                              <li className="flex items-center gap-3 text-gray-600"><FaBook></FaBook>Page : <span className="text-black font-bold">{book.totalPages}</span></li>
                          </ul>
                          <hr />
                          <div className="card-actions ">
                          <div className="flex gap-3">
                              <h1 className="inline-flex items-center justify-center w-full px-6 py-2 text-base font-bold leading-6 text-indigo-500 bg-indigo-300 border border-transparent rounded-full md:w-auto hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2">Catagory : {book.category}</h1>
                              <h1 className="inline-flex items-center justify-center w-full px-6 py-2 text-base font-bold leading-6 text-amber-500 bg-amber-200 border border-transparent rounded-full md:w-auto hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">Rating : {book.rating}</h1>
                              <Link to={`/book/${book.id}`} className="inline-flex items-center justify-center w-full px-6 py-2 text-base font-bold leading-6 text-white bg-green-400 border border-transparent rounded-full md:w-auto hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">View Details</Link>
                          </div>    
                         
                          </div>
                      </div>
                      </div>
                  </li>)
                }
            </ul>
            
        </div>
    );
};

export default ReadBook;