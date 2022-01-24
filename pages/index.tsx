import * as React from 'react';
import type { NextPage } from 'next';
import { Divider, Grid, Stack } from '@mui/material';
import TimelineComponent from '../components/Timeline';
import InfoCard from '../components/InfoCard';

import texts from '../public/texts';
import MediaCard from '../components/MediaCard';

const timeLineMap: string[] = [
  'Mitte 19. Jh. - Anfänge als Arbeiterbewegung',
  '1848/49 - Deutsche Revolution',
  '1863 - Gründung ADAV #Test',
  '1869 - Gründung SDAP / Gewerbefreiheit',
  '1875 - Zusammenschluss zu SAPD',
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
          <Grid container spacing={4}>
            {texts.map((text) => {
              if (text.imageURL) {
                return (
                  <Grid item xs>
                    <MediaCard
                      {...text}
                      imageURL={text.imageURL + ''}
                      variant="outlined"
                    >
                      {text.text}
                    </MediaCard>
                  </Grid>
                );
              } else
                return (
                  <Grid item xs>
                    <InfoCard
                      {...text}
                      variant="outlined"
                      box={{ maxWidth: 500 }}
                    >
                      {text.text}
                    </InfoCard>
                  </Grid>
                );
            })}
            <Grid item xs>
              <MediaCard
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
                nahh
              </MediaCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Landing;
