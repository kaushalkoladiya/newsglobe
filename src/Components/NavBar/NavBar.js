import React from 'react';
import { NavLink } from 'react-router-dom';

import Source from '../Dropdown/Source';
import Category from '../Dropdown/Category';
import Country from '../Dropdown/Country';

export default (props) => {

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <NavLink to="/" exact>
        <span className="navbar-brand">News</span>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <NavLink to="/dashboard" exact>
              <span className="nav-link">Covid-19</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.who.int/" rel="noopener noreferrer" target="_blank">WHO guidlines</a>
          </li>
          <li className="nav-item dropdown">
            <Source
              onSourceChangeHandler={props.onSourceChangeHandler}
            />
          </li>
          <li className="nav-item dropdown">
            <Category
              onCategoryChangeHandler={props.onCategoryChangeHandler}
            />
          </li>
          <li className="nav-item dropdown">
            <Country
              onCountryChangeHandler={props.onCountryChangeHandler}
            />
          </li>
          <li className="nav-item">
            <div className="form-inline justify-content-center align-items-center">
              <input className="form-control-sm my-2 mr-2" onChange={e => props.inputChangeHandler(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success btn-sm my-2 my-sm-0" onClick={props.onSearchHandler}>Search</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}