import * as React from 'react';
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
  timeLineMap: string[];
  position?: 'left' | 'right' | 'alternate';
}

const TimelineComponent: React.FC<TimelineProps> = (props) => {
  return (
    <Timeline position={props.position ?? 'right'}>
      {props.timeLineMap.map((k, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent color="text.secondary">
            {k.split('-')[0]}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {k.split('-')[2] ? (
              <a
                href={'/#' + k.split('-')[2]}
                style={{ textDecoration: 'none', color: 'teal' }}
              >
                {k.split('-')[1]}
              </a>
            ) : (
              k.split('-')[1]
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineComponent;
