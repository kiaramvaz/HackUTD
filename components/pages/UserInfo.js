import React from 'react'
import { Link } from 'react-router-dom';
import './Pages.css';

import Home from './Home';

export default function UserInfo() {
    return (
        <div className='Background'>
            <input type="text" placeholder="Major" />
            <input type="text" placeholder="Interest 1" />
            <input type="text" placeholder="Interest 2" />
            <input type="text" placeholder="Interest 3" />
            <Link to='/search'>CREATE ACCOUNT!</Link>
            
        </div>
    )
}
