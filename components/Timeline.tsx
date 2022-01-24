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
      {props.timeLineMap.map((k, i) => {
        const parts = k.split(/ ?[-#] ?/g);
        return (
          <TimelineItem key={i}>
            <TimelineOppositeContent color="text.secondary">
              {parts[0]}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {parts[2] ? (
                <a
                  href={'/#' + parts[2]}
                  style={{ textDecoration: 'none', color: 'teal' }}
                >
                  {parts[1]}
                </a>
              ) : (
                parts[1]
              )}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default TimelineComponent;
