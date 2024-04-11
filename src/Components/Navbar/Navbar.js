import React,{useState} from 'react'
import './Navbar.css'
const Navbar = () => {

    const [expanded, setExpanded] = useState(false);

    const handleNavCollapse = () => {
      setExpanded(!expanded);
    };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">Your Brand</a>
        <button className="navbar-toggler" type="button" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#"
                id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#action/3.1">Action</a>
                <a className="dropdown-item" href="#action/3.2">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#action/3.3">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar