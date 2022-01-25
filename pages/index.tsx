import * as React from 'react';
import type { NextPage } from 'next';
import { Divider, Grid, Box, useTheme, IconButton, Stack } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import TimelineComponent from '../components/Timeline';
import InfoCard from '../components/InfoCard';

import texts from '../components/texts';
import { ColorModeContext } from './_app';
import tooltips from '../components/tooltips';

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
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Grid container columns={20} spacing={6}>
      <Grid item xs={5}>
        <Stack direction="column">
          <TimelineComponent timeLineMap={timeLineMap} />
          <Divider orientation="horizontal" />
          <Grid container ml={3} mt={3}>
            {Object.keys(tooltips).map((t) => (
              <Grid item>
                <InfoCard title={t} text={tooltips[t]} variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={0.5}>
        <Divider orientation="vertical" />
      </Grid>
      <Grid item xs={14}>
        <h1>Soziale Frage</h1>
        <Grid container spacing={4} columns={20}>
          {texts.map((text) => (
            <Grid item xs={text.size ?? 10}>
              <InfoCard {...text} variant="outlined" />
            </Grid>
          ))}
          <Grid item xs={10}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
