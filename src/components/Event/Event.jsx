import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { iconSize } from 'constants';
import { formatEventDuration, formatEventStart } from 'utils';
import { Card, Chip, EventName, Info } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt size={iconSize.md} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.md} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.md} />
        {formattedStart}
      </Info>
      <Info>
        <FaClock size={iconSize.md} />
        {duration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};
