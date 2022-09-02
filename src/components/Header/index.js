import React from 'react';
import './Header.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Nav() {
  return(
    <div className="header">
      <Link className="nav-item" label="about" to="/"><h1 className="website-title">Henry's React corner!</h1></Link>
      <ul className={ListGroup} id='nav-list'>
        <li className={ListGroupItem} id='animate-one'>
          <Link className="nav-item" label="about" to="/">About</Link>
        </li>
        <li className={ListGroupItem} id='animate-one'>
          <Link className="nav-item" label="state" to="/state">useState</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;