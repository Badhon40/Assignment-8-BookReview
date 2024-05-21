import error from '../../assets/404.jpg'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='text-center'>
            <img src={error} alt="" />

            <Link className='btn '>Go to Home</Link>
            <br />
        </div>
    );
};

export default Error;