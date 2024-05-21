import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Books = ({books}) => {
        const {image,bookName,author,category,tags,rating,id}=books
    return (
            <Link to={`/book/${id}`} className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <figure className="flex justify-center py-5 bg-gray-200 rounded-md">
                    <img src={image} alt="Shoes" className="rounded-xl h-72 " />
                </figure>
                <div className="mt-6 mb-2">
                    <span className="block text-xs mb-4 text-success">{
                        // eslint-disable-next-line react/prop-types
                        tags.map((tag)=><a key={tag} className="mr-4 bg-gray-200 font-bold px-2 rounded-lg ">{tag}</a>)
                    }</span>
                    <h2 className="text-xl font-bold tracking-wide">{bookName}</h2>
                </div>
                <p className="dark:text-gray-500">By : {author}</p>
                <br />
                <hr className="" />
                <br />
                <div className="flex justify-between">
                    <h1>{category}</h1>
                    <h1 className="flex items-center gap-3">{rating}<CiStar></CiStar></h1>
                </div>
            </Link>
    );
};

export default Books;