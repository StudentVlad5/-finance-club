import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addModal } from 'redux/modal/operation';
import { openModalWindow } from 'hooks/modalWindow';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { BackButton } from 'helpers/BackLink/BackLink';
import { BtnLight } from 'components/baseStyles/Button.styled';
import { RegisterModal } from '../RegisterModal/RegisterModal';
import { BASE_URL_IMG } from 'helpers/constants';
import defaultImg from 'images/events/default.jpg';
import { ReactComponent as Knob } from 'images/svg/knob.svg';
import { EventsSection } from '../Events.styled';
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
import { useTranslation } from 'react-i18next';

export const EventDetails = ({ event }) => {
  const {
    date,
    time,
    duration,
    location,
    title,
    description,
    plan,
    packages,
    speakers,
    moderator,
    image,
  } = event;

  const { t } = useTranslation();

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
          <BackButton to="/events">{t('Back')}</BackButton>
          <EventHeading>
            <HeadingItem>
              <HeadingItemTitle>{t('Package')}</HeadingItemTitle>
              <HeadingItemData>{packages.join(', ')}</HeadingItemData>
            </HeadingItem>
            <HeadingItem>
              <HeadingItemTitle>{t('Date')}</HeadingItemTitle>
              <HeadingItemData>
                {new Date(date).toLocaleDateString()}
              </HeadingItemData>
            </HeadingItem>
            <HeadingItem>
              <HeadingItemTitle>{t('Start at')}</HeadingItemTitle>
              <HeadingItemData>{time}</HeadingItemData>
            </HeadingItem>
            <HeadingItem>
              <HeadingItemTitle>{t('Location')}</HeadingItemTitle>
              <HeadingItemData>{location}</HeadingItemData>
            </HeadingItem>
          </EventHeading>
          <EventImage
            src={image ? BASE_URL_IMG + image : defaultImg}
            alt={title}
            width="325"
            height="322"
            loading="lazy"
          />
          <EventTextWrapper>
            <EventSpeaker>
              <span>{t('Speakers')}:</span>
              <ul>
                {speakers.map((speaker, i) => {
                  return <li key={i}>{speaker}</li>;
                })}
              </ul>
            </EventSpeaker>
            <EventDescrBox>
              <EventDescr>
                {t('Duration of the event')}: {duration}
              </EventDescr>
            </EventDescrBox>
            <EventDescrBox>
              <EventDescr>{description}</EventDescr>
            </EventDescrBox>
            {plan.length !== 0 && (
              <EventDescrBox>
                <EventDescr>{t('Plan of the event')}:</EventDescr>
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
                <EventDescr>
                  {t('Moderator')}: {moderator}
                </EventDescr>
              </EventDescrBox>
            )}
            <EventDescrBox>
              <EventDescr $small>
                {t('The meeting is part of the SoFi CLUB club programme.')}
                <br />
                {t(
                  'If you are not a member of the club, you have a “Guest Visit” option. The organizers have the right to refuse to participate, as the number of guest places is limited.',
                )}
                <br />
                {t('We will be happy to answer your questions.')}
                <br />
                {t('Call')} +1234567890, Mark Key
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
            {t('Register')}
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
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    plan: PropTypes.any,
    speakers: PropTypes.array.isRequired,
    moderator: PropTypes.string,
    packages: PropTypes.array.isRequired,
    image: PropTypes.string,
  }),
};
