import * as React from 'react';
import type { NextPage } from 'next';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

interface TimelineProps {
  timeLineMap: {
    [key: string]: string;
  };
  position?: 'left' | 'right' | 'alternate';
}

const TimelineComponent: React.FC<TimelineProps> = (props) => {
  return (
    <Timeline position={props.position ?? 'right'}>
      {Object.keys(props.timeLineMap).map((k) => (
        <TimelineItem key={k}>
          <TimelineOppositeContent color="text.secondary">
            {k}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> {props.timeLineMap[k]}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineComponent;
