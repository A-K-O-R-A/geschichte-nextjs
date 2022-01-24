import * as React from 'react';
import type { NextPage } from 'next';
import { Divider, Grid } from '@mui/material';
import TimelineComponent from '../components/timeline';

const timeLineMap: {
  [key: string]: string;
} = {
  Eat: '09:30 AM',
  Code: '19:30 AM',
  Sleep: '09:30 PM',
  Repeat: '12:30 AM',
};

const Landing: NextPage = () => {
  return (
    <React.Fragment>
      <Grid container columns={20} spacing={6}>
        <Grid item xs={4}>
          <TimelineComponent timeLineMap={timeLineMap} />
        </Grid>
        <Grid item xs={0.5}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={15}>
          asd
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Landing;
