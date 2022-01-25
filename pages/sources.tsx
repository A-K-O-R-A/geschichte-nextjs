import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

const sources = [
  {
    name: 'Ferdinand Lassalle',
    iconURL: '/Ferdinand4.jpg',
    source: 'Wikipedia Commons',
    sourceURL:
      'https://commons.wikimedia.org/wiki/File:%D0%A4%D0%B5%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D0%BD%D0%B4_%D0%9B%D0%B0%D1%81%D1%81%D0%B0%D0%BB%D1%8C.jpg',
  },
  {
    name: 'Otto von Bismarck',
    iconURL: '/Bismarck2.jpg',
    source: 'Wikipedia Commons',
    sourceURL: 'https://commons.wikimedia.org/wiki/File:BismarckLandtag.jpg',
  },
  {
    name: 'Deutsche Revolution',
    iconURL: '/Bismarck2.jpg',
    source:
      'Bild einer Arbeiterwohnung im 19. Jahrhundert, aus: Asmus, Gesine (Hrsg.): Hinterhof, Keller und Mansarde-Einblicke in Berliner Wohnungselend 1901-1920, Reinbek 1982, S. 111.',
    sourceURL: 'http://grial4.usal.es/MIH/urbanAndRuralDev/activities.html',
  },
];

const About: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        height={'100%'}
      >
        <Typography variant="h2" component="h2" gutterBottom>
          Quellen
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {sources.map((s) => (
            <React.Fragment>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={s.name} src={s.iconURL} />
                </ListItemAvatar>
                <ListItemText
                  primary={s.name}
                  secondary={
                    <React.Fragment>
                      <a href={s.sourceURL}>{s.source}</a>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
        <Box maxWidth="sm" height={60}>
          <Button variant="outlined" component={Link} noLinkStyle href="/">
            Zurück
          </Button>
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
};

export default About;
