import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface TextCardProps {
  topic?: string;
  title: string;
  subtitle?: string;
  variant?: 'elevation' | 'outlined';
}

const TextCard: React.FC<TextCardProps> = (props) => {
  return (
    <Card variant={props.variant} id={props.title.replace(/ +/g, '_')}>
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
        <Typography variant="body2" textAlign="justify">
          {props.children}
        </Typography>
      </CardContent>
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
