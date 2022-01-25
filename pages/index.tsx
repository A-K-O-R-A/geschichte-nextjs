import * as React from 'react';
import type { NextPage } from 'next';
import { Divider, Grid, Box, useTheme, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import TimelineComponent from '../components/Timeline';
import InfoCard from '../components/InfoCard';

import texts from '../components/texts';
import { ColorModeContext } from './_app';

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
    <React.Fragment>
      <Grid container columns={20} spacing={6}>
        <Grid item xs={5}>
          <TimelineComponent timeLineMap={timeLineMap} />
        </Grid>
        <Grid item xs={0.5}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={14}>
          <Grid container>
            <Grid item>
              <h1>Soziale Frage</h1>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'background.default',
                  color: 'text.primary',
                  borderRadius: 1,
                  p: 3,
                }}
              >
                {theme.palette.mode} mode
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                >
                  {theme.palette.mode === 'dark' ? (
                    <Brightness7 />
                  ) : (
                    <Brightness4 />
                  )}
                </IconButton>
              </Box>
            </Grid>
          </Grid>
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
