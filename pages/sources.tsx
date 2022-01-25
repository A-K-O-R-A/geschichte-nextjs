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

const imageSources = [
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
    name: 'Familie in Einzimmerwohnung',
    iconURL: '/Familie.jpg',
    source: 'Google Sites',
    sourceURL:
      'https://sites.google.com/site/geschichte9arsd/industrielle-revolution/wohnverhaeltnisse-im-19-jahrhundert',
  },
  {
    name: 'Meilenstein Sozialdemokratie',
    iconURL: '/Meilenstein.jpg',
    source: 'www.spd-leverkusen.de',
    sourceURL: 'https://www.spd-leverkusen.de/meilensteine-1863-1890/',
  },
];

const textSources = [
  {
    name: 'Lehrbuch',
    iconURL:
      'https://fonts.gstatic.com/s/i/materialiconsoutlined/menu_book/v12/24px.svg',
    source: 'Buchners Kolleg - Geschichte 11',
    sourceURL: '',
  },
  {
    name: 'AbiWissen Lösung Soziale Frage',
    iconURL:
      'https://fonts.gstatic.com/s/i/materialiconsoutlined/menu_book/v12/24px.svg',
    source: 'AbiWissen Lösung Soziale Frage',
    sourceURL: '',
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
        <Typography variant="h2" component="h2" mt={5}>
          Bildquellen
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {imageSources.map((s) => (
            <React.Fragment>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={s.name} src={s.iconURL} />
                </ListItemAvatar>
                <ListItemText
                  primary={s.name}
                  secondary={
                    <Typography
                      component="a"
                      href={s.sourceURL}
                      style={{ color: 'teal' }}
                    >
                      {s.source}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
        <Typography variant="h2" component="h2" mt={10}>
          Textquellen
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {textSources.map((s) => (
            <React.Fragment>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={s.name} src={s.iconURL} />
                </ListItemAvatar>
                <ListItemText
                  primary={s.name}
                  secondary={
                    <Typography
                      component="a"
                      href={s.sourceURL}
                      style={{ color: 'teal' }}
                    >
                      {s.source}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
        <Box maxWidth="sm" height={60} mt={5}>
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
