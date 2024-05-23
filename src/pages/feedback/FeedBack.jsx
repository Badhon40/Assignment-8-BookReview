import { useState } from 'react';

const FeedBack = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement logic to send feedback
        console.log('Feedback submitted:', feedback);
        setFeedback('');
    };

    return (
        <div className='grid justify-center'>
        <h2 className='text-2xl font-bold bg-success p-4 text-white rounded-xl my-10'>Feedback</h2>
        <form onSubmit={handleSubmit}>
            <textarea className='border p-2'
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback here..."
                rows={6}
                cols={50}
            />
            <br />
            <button type="submit" className='btn btn-info'>Submit Feedback</button>
        </form>
    </div>
    );
};

export default FeedBack;