import { Event } from 'components/Event/Event';
import css from './EventBoard.module.css';

export const EventBoard = ({ events }) => {
  console.log(events);
  return (
    <div className={css.eventBoard}>
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
    </div>
  );
};
