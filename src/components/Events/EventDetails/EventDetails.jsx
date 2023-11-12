import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addModal } from 'redux/modal/operation';
import { openModalWindow } from 'hooks/modalWindow';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { BackButton } from 'helpers/BackLink/BackLink';
import { BtnLight } from 'components/baseStyles/Button.styled';
import { RegisterModal } from '../RegisterModal/RegisterModal';
import {
  EventDescr,
  EventDescrBox,
  EventHeading,
  EventImage,
  EventPlan,
  EventSpeaker,
  EventTextWrapper,
  EventTitle,
  HeadingItem,
  HeadingItemData,
  HeadingItemTitle,
} from './EventDetails.styled';

import { BASE_URL_IMG } from 'helpers/constants';
import defaultImg from 'images/events/default.jpg';
import { ReactComponent as Knob } from 'images/svg/knob.svg';
import { EventsSection } from '../Events.styled';

export const EventDetails = ({ event }) => {
  const {
    date,
    time,
    location,
    title,
    description,
    plan,
    packages,
    speakers,
    moderator,
    image,
  } = event;

  const dispatch = useDispatch();
  const openModal = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'event') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
        }),
      );
      setTimeout(() => openModalWindow(e, null), 200);
    }
  };

  return (
    <>
      <EventsSection>
        <Container>
          <EventTitle>
            {new Date(date).toLocaleDateString()} | {title}
          </EventTitle>
          <BackButton to="/events">Back</BackButton>
          <EventHeading>
            <HeadingItem>
              <HeadingItemTitle>Package</HeadingItemTitle>
              <HeadingItemData>{packages.join(', ')}</HeadingItemData>
            </HeadingItem>
            <HeadingItem>
              <HeadingItemTitle>Date</HeadingItemTitle>
              <HeadingItemData>
                {new Date(date).toLocaleDateString()}
              </HeadingItemData>
            </HeadingItem>
            <HeadingItem>
              <HeadingItemTitle>Time</HeadingItemTitle>
              <HeadingItemData>{time}</HeadingItemData>
            </HeadingItem>
            <HeadingItem>
              <HeadingItemTitle>Location</HeadingItemTitle>
              <HeadingItemData>{location}</HeadingItemData>
            </HeadingItem>
          </EventHeading>
          <EventImage
            // src={event.image ? BASE_URL_IMG + event.image : defaultImg}
            src={image ? image : defaultImg}
            alt={title}
            width="325"
            height="322"
            loading="lazy"
          />
          <EventTextWrapper>
            <EventSpeaker>
              <span>Speakers:</span>
              <ul>
                {speakers.map((speaker, i) => {
                  return (
                    <li key={i}>
                      {speaker.name +
                        ', ' +
                        speaker.company +
                        ', ' +
                        speaker.position}
                    </li>
                  );
                })}
              </ul>
            </EventSpeaker>
            <EventDescrBox>
              <EventDescr>{description}</EventDescr>
            </EventDescrBox>
            {plan.length !== 0 && (
              <EventDescrBox>
                <EventDescr>Plan of the event:</EventDescr>
                <EventPlan>
                  {plan.map((item, i) => {
                    return (
                      <li key={i}>
                        <Knob size={12} />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </EventPlan>
              </EventDescrBox>
            )}
            {moderator && (
              <EventDescrBox>
                <EventDescr>Moderator: {moderator}</EventDescr>
              </EventDescrBox>
            )}
            <EventDescrBox>
              <EventDescr $small>
                The meeting is part of the SoFi CLUB club programme.
                <br />
                If you are not a member of the club, you have a “Guest Visit”
                option. The organizers have the right to refuse to participate,
                as the number of guest places is limited.
                <br />
                We will be happy to answer your questions.
                <br />
                Call +1234567890, Mark Key
              </EventDescr>
            </EventDescrBox>
          </EventTextWrapper>
          <BtnLight
            type="button"
            aria-label="Register"
            onClick={e => {
              openModal(e);
            }}
            data-modal="event"
          >
            Register
          </BtnLight>
        </Container>
      </EventsSection>
      <RegisterModal event={event} />
    </>
  );
};

EventDetails.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    plan: PropTypes.any,
    speakers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        company: PropTypes.string,
        position: PropTypes.string,
      }),
    ).isRequired,
    moderator: PropTypes.string,
    packages: PropTypes.array.isRequired,
    image: PropTypes.string,
  }),
};
