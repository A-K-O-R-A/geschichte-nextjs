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
}

const TimelineComponent: React.FC<TimelineProps> = (props) => {
  return (
    <React.Fragment>
      <Timeline position="right">
        {Object.keys(props.timeLineMap).map((k) => (
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              {props.timeLineMap[k]}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> {k}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </React.Fragment>
  );
};

export default TimelineComponent;
