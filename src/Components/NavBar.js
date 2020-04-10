import React from 'react';

const navBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">

      <a href="/" className="navbar-brand">News</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="https://www.who.int/" rel="noopener noreferrer" target="_blank">WHO guidlines</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default navBar;