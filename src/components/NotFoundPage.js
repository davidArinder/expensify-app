import React from 'react';
import { Link } from 'react-router-dom';

// Link prevents page refresh because it's client-side
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link> 
    </div>
)

export default NotFoundPage