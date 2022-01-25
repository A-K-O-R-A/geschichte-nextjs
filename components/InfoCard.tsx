import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import tooltips from '../public/tooltips';
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';

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
  tooltips.map((t) => `(${t.keyword})`).join('|'),
  'gi'
);
console.log(tooltipRegExp);

function addTooltips(str: string) {
  let a = [],
    arr = str.split(tooltipRegExp),
    matches = tooltipRegExp.exec(str);
  console.log(arr);
  console.log(matches);
  if (matches === null) return <React.Fragment>{str}b</React.Fragment>;
str.search
  for (let i = 0; i < matches.length - 1; i++) {
    let text = arr[i],
      tipTitle = matches[i],
      tag = <React.Fragment>{tipTitle}aaa</React.Fragment>;

    console.log(text, tipTitle);

    a.push(text);
    a.push(tag);
  }
  a.push(<React.Fragment>{arr[arr.length - 1]}</React.Fragment>);
  console.log(a);
  return a;
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
