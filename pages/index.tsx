import * as React from 'react';
import type { NextPage } from 'next';
import {
  Divider,
  Grid,
  useTheme,
  Button,
  Drawer,
  Typography,
} from '@mui/material';
import TimelineComponent from '../components/Timeline';
import InfoCard from '../components/InfoCard';

import texts from '../components/texts';
import { ColorModeContext } from './_app';

const timeLineMap: string[] = [
  'Erste Hälfte 19. Jh - Sozialen Frage',
  'Mitte 19. Jh. - Anfänge als Arbeiterbewegung / Arbeiterverein',
  '1848 - Allgemeine Deutsche Arbeiterverbrüderung',
  '1848/49 - Deutsche Revolution',
  '1862 - Bismarck preußischer Ministerpräsident',
  '1863 - Gründung ADAV #ADAV',
  '1869 - Gründung SDAP #SDAP',
  '1875 - Zusammenschluss zu SAPD #SAPD',
  '1878 - Bismarcks Reaktion / Sozialistengesetz',
  '1890 - Aufhebung Sozialistengesetz',
  '1890 - Gründung SDP #SPD',
];

const Landing: NextPage = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Grid container columns={10.2} spacing={3} className="flex-section">
      <Grid item xs={2.7}>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '27%',
            },
          }}
          open
        >
          <TimelineComponent timeLineMap={timeLineMap} />
          <Button href="/sources">
            <Typography color="text.secondary" align="center">
              Quellen
            </Typography>
          </Button>
        </Drawer>
      </Grid>
      <Grid item xs={0.01}>
        <Divider orientation="vertical" />
      </Grid>
      <Grid item xs={7.29}>
        <h1>Soziale Frage</h1>
        <Grid container spacing={4} columns={27} mb={10}>
          {texts.map((text) => {
            if (text.divider) return;
            <Grid item xs={10}>
              <Divider />
            </Grid>;
            return (
              <Grid item xs={text.size ?? 10}>
                <InfoCard {...text} variant="outlined" />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
