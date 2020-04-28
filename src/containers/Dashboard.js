import React from 'react';

import Card from '../Components/Card/Card';
import Chart from '../Components/Chart/Chart';
import CountryPiker from '../Components/CountryPiker/CountryPiker';
import { fetchData } from '../api';

import Style from './Dashboard.module.css';

class Dashboard extends React.Component {

  state = {
    data:{},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
  }

  render() {

    const { data, country } = this.state;
    // const { data } = this.state.data;
    // console.log(this.state);
    return (
      <div className={ Style.container }>
        <Card data={data}/>
        <CountryPiker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/> 
      </div>
    );
  }

}

export default Dashboard;
