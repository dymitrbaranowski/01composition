import { Event } from 'components/Event/Event';
import { Board } from './EventBoard.styled';

export const EventBoard = ({ events }) => {
  console.log(events);
  return (
    <Board>
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </Board>
  );
};
