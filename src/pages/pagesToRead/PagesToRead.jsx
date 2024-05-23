import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,ResponsiveContainer } from 'recharts';
import CustomBarShape from '../../utility/CustomBarShape';
import { useLoaderData } from 'react-router-dom';
import { getStoreBooklist } from '../../utility/localstorage';
import './pagesToRead.css'


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
        <div className="pages-to-read-container">
        <h1>Pages to Read</h1>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                className="bar-chart"
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pages" fill="#8884d8" shape={<CustomBarShape />} />
            </BarChart>
        </ResponsiveContainer>
    </div>
    );
};

export default PagesToRead;
