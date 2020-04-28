import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Countup from 'react-countup';
import cx from 'classnames';
import Moment from 'react-moment';

import Style from './Card.module.css';

export default ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
  // console.log(confirmed, recovered, deaths, lastUpdate);
  if(!confirmed) {
    return (
      <h5>Loading...</h5>
    );
  }
  return (
    <div className={Style.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(Style.card, Style.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5"><Countup start={0} end={confirmed.value} duration={2.5} separator="," /></Typography>
            <Typography color="textSecondary"><Moment format="YYYY, MMM DD hh:mm a" date={ lastUpdate }/></Typography>
            <Typography variant="body2">Number of active cases of Covid-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(Style.card, Style.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5"><Countup start={0} duration={2.5} separator="," end={recovered.value} /></Typography>
            <Typography color="textSecondary"><Moment format="YYYY, MMM DD hh:mm a" date={ lastUpdate }/></Typography>
            <Typography variant="body2">Number of recovered from Covid-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(Style.card, Style.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5"><Countup start={0} end={deaths.value} duration={2.5} separator="," /></Typography>
            <Typography color="textSecondary"><Moment format="YYYY, MMM DD hh:mm a" date={ lastUpdate }/></Typography>
            <Typography variant="body2">Number of deaths caused by Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};