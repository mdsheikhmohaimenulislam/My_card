import React, { use} from 'react';
import DisplayData from '../DisplayData/DisplayData.jsx';
import Details from '../Details/Details.jsx';



// import { useLoaderData } from 'react-router';

const User = ({userPromise}) => {

    // const users = useLoaderData()
    // console.log(users);

    const u = use(userPromise)




    return (
        <div className='space-y-5 border-blue-800 border-2 p-5 m-5'>
            {
                u.map(use => <DisplayData key={use.id} use={use}></DisplayData> )
            }
     
        </div>
    );
};

export default User;