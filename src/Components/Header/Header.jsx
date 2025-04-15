import React from 'react';
import { Link ,NavLink} from 'react-router';
import App from '../../App';

const Header = () => {
    return (
        <div>
            <p>this is header</p>
            <nav className='space-x-8'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/mobile'}>Mobile</NavLink>
                <NavLink to={'/user'}>User</NavLink>
            </nav>
        </div>
    );
};

export default Header;