import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventsBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';

export const App = () => {
  return (
    <div>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </div>
  );
};
