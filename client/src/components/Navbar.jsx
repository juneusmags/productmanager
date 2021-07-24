import React from 'react';
import {Link} from '@reach/router';

const Navbar = props => {
    return(
        <div>
            <Link to ="/">Home</Link>
            <Link to ="/add">Add</Link>
        </div>
    );
}

export default Navbar;