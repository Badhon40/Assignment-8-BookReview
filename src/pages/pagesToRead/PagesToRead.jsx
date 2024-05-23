import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import CustomBarShape from '../../utility/CustomBarShape';
import { useLoaderData } from 'react-router-dom';
import { getStoreBooklist } from '../../utility/localstorage';


const PagesToRead = () => {
    const [readList, setReadList] = useState([]);

    const books=useLoaderData()
    useEffect(() => {
        const getBooks=getStoreBooklist()
        if(books.length>0){
            const readBooks=[];

            for(const id of getBooks){
                const book=books.find(book=>book.id===id);
                if(book){
                    readBooks.push(book)
                }
            }
            setReadList(readBooks)
        }

    }, []);

    const data = readList.map(book => ({
        name: book.bookName,
        pages: book.totalPages,
    }));

    return (
        <div>
            <BarChart
                width={600}
                height={400}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pages" fill="#8884d8" shape={CustomBarShape} />
            </BarChart>
        </div>
    );
};

export default PagesToRead;
