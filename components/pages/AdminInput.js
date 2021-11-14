import { Link } from 'react-router-dom';
import './Pages.css';

import React from 'react'

export default function AdminInput() {
    return (
        <div className = 'Background'>
            HEYYYYYYY ADMIN

            <input type="text" placeholder="Club Name" />
            <input type="text" placeholder="Club Leadership" />
            <input type="text" placeholder="Club Sponsor" />
            <input type="text" placeholder="Club Requirements" />
            <input type="text" placeholder="Tags" />
        </div>
    )
}