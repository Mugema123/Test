import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Nav() {
    
  return (
    <nav >
      <div className='nav-link'>
 <ul className='tab-group'>
     <Link  to='/'>
     <li className="tab-active1">SignUp</li>
     </Link>
     <Link  to='/signin'>
     <li className="tab">SignIn</li>
     </Link>
    
 </ul>
 </div>
    </nav>
  );
}

export default Nav;
