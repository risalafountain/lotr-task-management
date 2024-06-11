import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="navBar">
            <h1> Fellowship of the Things </h1>
                 <Link to={'/'} className='button'><button>Home</button></Link>
                 <Link to={'/favorites'} className='button'><button>My Precious Tasks</button></Link>
                 <Link to = {'/resources'} className='button'><button>Resources</button></Link>
        </div>
    )
}