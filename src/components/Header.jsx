import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav className="nav" >
            <h1>BookMarks</h1>
        <Link  to="/">
          <div>Bookmarks  App Home </div>
        </Link>
        <Link  to="/">
          <div>About</div>
        </Link>
        <Link  to="/">
          <div>Contact us</div>
        </Link>
      </nav>
      )
}

export default Header