import * as React from 'react';
import type { NextPage } from 'next';
import { Divider, Grid, Stack } from '@mui/material';
import TimelineComponent from '../components/Timeline';
import InfoCard from '../components/InfoCard';

import texts from '../public/texts';

const timeLineMap: string[] = [
  'Mitte 19. Jh. - Anfänge als Arbeiterbewegung',
  '1848/49 - Deutsche Revolution',
  '1863 - Gründung ADAV #ADAV',
  '1869 - Gründung SDAP #SDAP',
  '1875 - Zusammenschluss zu SAPD #SAPD',
  '1878 - Sozialistengesetz',
  '1890 - Sozialistengesetz aufgehoben',
];

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
          <Grid container spacing={4} columns={30}>
            {texts.map((text) => (
              <Grid item xs={text.size ?? 10}>
                <InfoCard {...text} variant="outlined" />
              </Grid>
            ))}
            <Grid item xs={10}>
              <InfoCard
                title="Pauperismus"
                variant="outlined"
                imageURL="https://www.hanisauland.de/sites/default/files/styles/article_1180/public/1779513-161311-2020-05/soziale-Frage-kinderarbeit-49823249.jpg.jpeg"
              >
                Oh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh
                heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh h
                eelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh
                heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahh Oh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh
                heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh h
                eelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh
                heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahh Oh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh
                heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh h
                eelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh
                heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahh Oh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh
                heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh h
                eelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh
                heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahh Oh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh
                heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh h
                eelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh
                heelll nahhOh heelll nahhOh heelll nahhOh heelll nahhOh heelll
                nahh
              </InfoCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Landing;
