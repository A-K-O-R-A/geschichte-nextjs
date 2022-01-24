import * as React from 'react';
import type { NextPage } from 'next';
import { Divider, Grid } from '@mui/material';
import TimelineComponent from '../components/Timeline';
import InfoCard from '../components/InfoCard';

const timeLineMap: {
  [key: string]: string;
} = {
  'Mitte 19. Jh.': 'Anfänge als Arbeiterbewegung',
  '1848/49': 'Deutsche Revolution',
  '1863': 'ADAV',
  '1869': 'SDAP',
  '1875': 'Zusammenschluss zu SAPD',
  '1878': 'Sozialistengesetz',
  '1890': 'Sozialistengesetz aufgehoben',
};

const Landing: NextPage = () => {
  return (
    <React.Fragment>
      <Grid container columns={20} spacing={6}>
        <Grid item xs={5}>
          <TimelineComponent timeLineMap={timeLineMap} />
        </Grid>
        <Grid item xs={0.5}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={14}>
          <h1>Soziale Frage</h1>
          <InfoCard
            title="My title is weird"
            subtitle="I have a cute subtitle"
            topic="But a weird topic"
            box={{ maxWidth: 500 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus
            veniam consequatur facere nisi explicabo commodi dolor, nulla
            voluptates. Saepe corporis fugit est ipsa velit harum tempora
            nesciunt. Quos porro amet quod? Quaerat suscipit placeat similique
            ipsa, doloremque nesciunt laudantium earum facere sapiente aut,
            eveniet reprehenderit, provident libero sunt ut. Modi quaerat vero
            maiores eum asperiores odio qui, ipsa magnam nostrum dolorum iure
            repudiandae aliquam animi quam neque eaque impedit dolores odit
            dolorem obcaecati tenetur rem repellat sint assumenda? Odit?
          </InfoCard>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Landing;
