import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

interface MediaCardProps {
  title: string;
  imageURL: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  variant?: 'elevation' | 'outlined';
}

const MediaCard: React.FC<MediaCardProps> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} variant={props.variant}>
      <Stack direction={props.direction ?? 'column'}>
        <CardMedia
          component="img"
          height="140"
          image={props.imageURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.children}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default MediaCard;
