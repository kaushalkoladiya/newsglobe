import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import style from './CountryPiker.module.css';

import { fetchCountries } from '../../api';

export default ({ handleCountryChange }) => {

  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {

    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());

    }
    fetchAPI();
  }, [setFetchedCountries]);
  // 
  // console.log(fetchedCountries);

  return (
    <FormControl className={style.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Globle</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};