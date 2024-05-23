import { useEffect, useState } from 'react';


const User = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        bio: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch profile data from an API or localStorage
        const fetchProfile = async () => {
            const storedProfile = localStorage.getItem('user-profile');
            if (storedProfile) {
                setProfile(JSON.parse(storedProfile));
            } else {
                // Fetch from an API endpoint if needed
                // const response = await fetch('/api/profile');
                // const data = await response.json();
                // setProfile(data);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile, 
            [name]: value
        }));
    };

    const handleSave = () => {
        // Save the updated profile data to localStorage or send it to an API
        localStorage.setItem('user-profile', JSON.stringify(profile));
        setIsEditing(false);
    };

    return (
        <div className='grid justify-center '>
            <h2 className='text-2xl font-bold my-5'>Profile</h2>
            {isEditing ? (
                <div>
                    <label>
                        Name: 
                        <input className='px-3 border-2'
                            placeholder='Name'
                            type="text" 
                            name="name" 
                            value={profile.name} 
                            onChange={handleChange} 
                        />
                    </label>
                    <br />
                    <label>
                        Email: 
                        <input  className='px-3 border-2'
                            placeholder='Email'
                            type="email" 
                            value={profile.email} 
                            onChange={handleChange} 
                        />
                    </label>
                    <br />
                    <label>
                        Bio: 
                        <textarea  className='px-3 border-2'
                            placeholder='About you'
                            name="bio" 
                            value={profile.bio} 
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <button className='btn btn-success mr-4 my-3' onClick={handleSave}>Save</button>
                    <button  className="btn btn-info "onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Bio:</strong> {profile.bio}</p>
                    <button onClick={() => setIsEditing(true)} >Edit Profile</button>
                </div>
            )}
        </div>
    );
};

export default User;