import React, { useState, useEffect } from 'react';

import { fetchSource } from '../../api';

export default ({ onSourceChangeHandler }) => {
  const [fetchedSource, setFetchedSource] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedSource(await fetchSource());
    };
    fetchAPI();
  }, [setFetchedSource]);
  return (
    <select className="m-2" aria-labelledby="navbarDropdownMenuLink" onChange={(e) => onSourceChangeHandler(e.target.value)}>
      <option value="">News Channels</option>
      {fetchedSource.map((source, key) => <option key={key} className="dropdown-item" value={source.id}>{source.name}</option>)}
    </select>
  );
}