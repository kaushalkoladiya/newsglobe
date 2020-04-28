import React from 'react';

const categoties = [
  { id: 'business', name: 'Business' },
  { id: 'technology', name: 'Technology' },
  { id: 'sports', name: 'Sports' },
  { id: 'science', name: 'Science' },
  { id: 'health', name: 'Health' },
  { id: 'general', name: 'General' },
  { id: 'entertainment', name: 'Entertainment' },
];

export default ({ onCategoryChangeHandler }) =>
  (<select className="m-2" aria-labelledby="navbarDropdownMenuLink" onChange={(e) => onCategoryChangeHandler(e.target.value)}>
    <option value="">Categories</option>
    {categoties.map((source, key) => <option key={key} className="dropdown-item" value={source.id}>{source.name}</option>)}
  </select>)
