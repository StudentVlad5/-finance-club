
import {
  MeetingEventSection,
  MeetingEventContainer,
  ListItemsContainer,
  SubTitle,
  ListItemsUppertitle,
  ListItems,
  EventImages,
  EventContentData,
  EventContentDesc,
  EventCalendarBtn
} from './MeetingEvents.styled';

const data = [{
id: 1,
event: "Expert discussion of current issues of VAT administration",
dataBegin: "2023-11-16",
time: "12.00 (Kyiv)",
type: "Zoom"},
{
id: 2,
event: "Expert discussion of current issues of VAT administration",
dataBegin: "2023-11-16",
time: "12.00 (Kyiv)",
type: "Zoom"},
]

const MeetingEvents = () => {
  // const { t } = useTranslation();

  return (
    <MeetingEventSection>
      <MeetingEventContainer>
          <ListItemsUppertitle
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
            Upcoming club meetings
          </ListItemsUppertitle>
          <SubTitle
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque
          </SubTitle>
            <ListItemsContainer>
            {data.map(it=><ListItems key={it.id}>
              <EventImages/>
              <EventContentData>
                <span>{it.dataBegin}</span>
                <span>{it.type}</span>
              </EventContentData>
              <EventContentDesc>
                <span>{it.time}, {it.event}</span>
              </EventContentDesc>
            </ListItems>)}
            </ListItemsContainer>
            <EventCalendarBtn type='button' aria-label='EVENTS CALENDAR'>EVENTS CALENDAR</EventCalendarBtn>
      </MeetingEventContainer>
    </MeetingEventSection>
  );
};

export default MeetingEvents;
