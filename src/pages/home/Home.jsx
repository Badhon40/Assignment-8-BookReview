import { Link, useLoaderData } from "react-router-dom";
import Books from "../../components/books/Books";


const Home = () => {
    const cards=useLoaderData()

    // console.log(cards)
    return (
        <div className="lg:px-20">
            <section className="dark:bg-gray-100 dark:text-gray-800 rounded-2xl px-5">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-10 justify-center p-6 text-center rounded-sm lg:max-w-lg lg:text-left">
                    <h1 className="text-5xl leading-normal font-bold">Books to freshen up your bookshelf
                    </h1>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='/listedbook' className="px-8 py-3 text-lg font-semibold rounded dark:bg-success dark:text-gray-50">View The List</Link>
                        
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/yhwk4YL/7c3e9e4b91fd2400775bddd825c08f72-removebg-preview.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>

        <section>
            <div className="text-center pt-10">
                <h1 className="text-3xl font-bold">BOOKS</h1>
            </div>
            <br />
            <div className="grid px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {
                cards.map((card)=><Books key={card.id} books={card}></Books>)
            }
            </div>
        </section>
        </div>
    );
};

export default Home;