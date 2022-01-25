import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import tooltips from './tooltips';
import Tooltip from '@mui/material/Tooltip';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Button, Container, Fade } from '@mui/material';

interface TextCardProps {
  topic?: string;
  title: string;
  subtitle?: string;
  text?: string;
  id?: string;
  imageURL?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  variant?: 'elevation' | 'outlined';
}

const tooltipRegExp = new RegExp(
  Object.keys(tooltips)
    .map((t) => `(${t})`)
    .join('|'),
  'gi'
);
console.log(tooltipRegExp);

function addTooltips(str: string) {
  if (!tooltipRegExp.test(str))
    //No Tooltip found
    return <React.Fragment>{str}baaa</React.Fragment>;

  tooltipRegExp.test(str);
  let parts = str.split(tooltipRegExp),
    elements: EmotionJSX.Element[] = [];

  let matches = tooltipRegExp.exec(str) as RegExpExecArray,
    i = 0;
  do {
    let tipTitle = matches[0],
      tipContent = tooltips[tipTitle];
    console.log(
      `Found ${tipTitle}. Next starts at ${tooltipRegExp.lastIndex}.`
    );
    elements.push(<React.Fragment>{parts[i]}</React.Fragment>);
    elements.push(
      <Tooltip
        title={tipContent}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <a style={{ color: 'teal' }}>{tipTitle}</a>
      </Tooltip>
    );

    //Prepare next
    matches = tooltipRegExp.exec(str) as RegExpExecArray;
    i++;
  } while (matches !== null);
  elements.push(<React.Fragment>{parts[i + 1]}</React.Fragment>);

  return elements;
}

export function textTransform(str: string) {
  let a = [],
    arr = str.split('\n');
  for (let i = 0; i < arr.length - 1; i++) {
    let text = addTooltips(arr[i]),
      tag = <React.Fragment>{text}</React.Fragment>;

    a.push(tag);
    a.push(<br></br>);
  }
  a.push(<React.Fragment>{addTooltips(arr[arr.length - 1])}</React.Fragment>);
  return a;
}

const TextCard: React.FC<TextCardProps> = (props) => {
  return (
    <Card
      variant={props.variant}
      id={props.id ?? props.title.replace(/ +/g, '_')}
    >
      <Stack direction={props.direction ?? 'column'}>
        {props.imageURL ? (
          <CardMedia
            component="img"
            height="140"
            image={props.imageURL}
            alt="green iguana"
          />
        ) : undefined}
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.topic}
          </Typography>

          <Typography variant="h5" component="div">
            {props.title}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.subtitle}
          </Typography>
          <Typography
            variant="body2"
            textAlign="justify"
            color="text.secondary"
          >
            {props.text ? textTransform(props.text + '') : props.children}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};

type InfoCardProps = {
  box?: { minWidth?: number; maxWidth?: number };
} & TextCardProps;

const InfoCard: React.FC<InfoCardProps> = (props) => {
  if (props.box) {
    return (
      <Box sx={{ ...props.box }}>
        <TextCard {...props}>{props.children}</TextCard>
      </Box>
    );
  }

  return <TextCard {...props}>{props.children}</TextCard>;
};

export default InfoCard;
