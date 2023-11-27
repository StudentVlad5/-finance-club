import { ArchiveEventsList } from "components/Events/ArchiveEventsList/ArchiveEventList";
import { EventsSection } from "components/Events/Events.styled";
import { EventsList } from "components/Events/EventsList/EventList";
import { Container } from "components/baseStyles/CommonStyle.styled";
import { onLoaded, onLoading } from "helpers/Loader/Loader";
import { onFetchError } from "helpers/Messages/NotifyMessages";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { getUser } from "redux/auth/selectors";
import { fetchData } from "services/APIservice";
import { HeaderText } from "./Events.styled";


export const Events = () => {
    const eventsOfUser = useSelector(getUser).events;
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
 
    useEffect(() => {
      (async function getData() {
        let eventsList = [];
        setIsLoading(true);
        try {
          const { data } = await fetchData(`/events`);
          if (!data) {
            return onFetchError('Whoops, something went wrong');
          }
          setEvents(data);
          data.map(it=>eventsOfUser.map(item=>{if(item === it._id){
            eventsList.push(it)}
            setEvents(eventsList);
          }));
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }, []);

    return(
      <EventsSection>
      <Container>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        <HeaderText>Upcoming club meetings</HeaderText>
        {events.length > 0 && !error && <EventsList events={events} />}
        <HeaderText>Archive of past events</HeaderText>
        {events.length > 0 && !error && <ArchiveEventsList events={events} />}
      </Container>
    </EventsSection>
    )
}