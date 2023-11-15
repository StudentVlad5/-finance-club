import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdClose,
  MdFilterAltOff,
  MdEdit,
  MdAddCard,
  MdFilterAlt,
} from 'react-icons/md';
import { SEO } from 'utils/SEO';
import { openModalWindow } from 'hooks/modalWindow';
import { addModal } from 'redux/modal/operation';
import { addReload } from 'redux/reload/slice';
import { reloadValue } from 'redux/reload/selectors';
import { fetchData, deleteData } from 'services/APIservice';
import { getFromStorage } from 'services/localStorService';
import { PaginationBlock } from 'helpers/Pagination/Pagination';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { BASE_URL_IMG } from 'helpers/constants';
import { EditEventModal } from 'components/Admin/EventsModal/EditEventModal';
import { CreateEventModal } from 'components/Admin/EventsModal/CreateEventModal';
import { BackButton } from 'helpers/BackLink/BackLink';
import {
  AdminContainer,
  BtnWrapper,
  ClearFiltersBtn,
  IconBtn,
  LearnMoreBtn,
  Table,
  TableData,
  TableFilter,
  TableHead,
  TableRow,
} from 'components/Admin/Admin.styled';

import digitalMoney from 'images/events/DIGITAL MONEY.jpg';
import cybersecurity from 'images/events/cybersecurity.webp';
import cybersecurity2 from 'images/events/cybersecurity-2.webp';
import defi from 'images/events/defi.webp';
const eventsData = [
  {
    _id: '1sdghs',
    date: '2023/11/22',
    time: '17:30',
    duration: 3,
    location: 'New York, USA',
    title: 'Digital money and financial risks',
    description:
      'There is a challenge to ensuring a high level of security of the digital money function, namely the problem of digital currency fraud and CBDCs. CBDC is a new third form of fiat money. The difference between CBDCs and cryptocurrencies, is that the latter are forms of decentralized or private money. Today, the use of cryptocurrency requires full regulation comparable to the risks they already pose or may pose in the future.',
    plan: [
      '17:30 – 18:00 Welcome coffee break with a welcome session',
      '18:00 – 20:00 Lecture from the speaker',
      '20:00 – 20:30 Questions for the speaker',
    ],
    speakers: [
      'Den Braun, Bronx, CFO',
      'Joanne Walker, BDO, Global Partnership Director',
    ],
    moderator: 'Stew May',
    packages: ['pro', 'expert'],
    image: digitalMoney,
  },
  {
    _id: '2sgfhd',
    date: '2023/12/02',
    time: '19:00',
    duration: 2,
    location: 'ZOOM',
    title: 'TOP 10 cybersecurity trends in 2023',
    description:
      'Tendencies and trends of the current year • What hackers know about your business • Cloud migration and cyber security risks • Practical recommendations for building cyber defense in the context of military operations',
    plan: [],
    speakers: ['Joanne Walker, BDO, Global Partnership Director'],
    moderator: '',
    packages: ['expert'],
    image: cybersecurity,
  },
  {
    _id: '3xfgndf',
    date: '2023/12/15',
    time: '13:00',
    duration: 3,
    location: 'Miami, USA',
    title: 'DeFi: challenges of modern financial analytics',
    description:
      'The development of computing technologies and the emergence of cryptocurrencies have created the possibility of concluding direct smart contracts between economic agents, effectively redistributing risks between them and thereby creating prerequisites for further growth in economic efficiency in local markets, taking into account the local nature of their risks. To realize the new opportunities that new technologies give us, we need to create a simple and understandable decentralized platform for trading derivative financial instruments (smart derivatives) that can be initiated by each market participant, create analytical methods for the basic assessment of financial contracts, ensure their implementation by introducing certain algorithms into the corresponding smart contracts, using the mechanism of collateral by different parties to the transaction. Another important tool for the implementation of such agreements is the inclusion, by mutual agreement of the parties, in smart derivatives of reliable information flows that provide another participant in the platform – the oracle.',
    plan: [],
    speakers: ['Jane Pence, KBS, Professor of Finance and Economics'],
    moderator: 'Stew May',
    packages: ['pro', 'expert'],
    image: defi,
  },
  {
    _id: '4zfgxd',
    date: '2023/10/17',
    time: '14:00',
    duration: 3,
    location: 'ZOOM',
    title: 'Cybersecurity for Business',
    description:
      'How to protect your company from hackers, spyware and security forces? Cybersecurity for Business',
    plan: [],
    speakers: ['Mark Fray, HackControl, Cybersecurity specialist'],
    moderator: '',
    packages: ['basic', 'pro', 'expert'],
    image: cybersecurity2,
  },
  {
    _id: '5sfgnd',
    date: '2023/09/27',
    time: '14:30',
    duration: 4,
    location: 'ZOOM',
    title: 'Digital money and financial risks',
    description:
      'There is a challenge to ensuring a high level of security of the digital money function, namely the problem of digital currency fraud and CBDCs.CBDC is a new third form of fiat money. The difference between CBDCs and cryptocurrencies, is that the latter are forms of decentralized or private money. Today, the use of cryptocurrency requires full regulation comparable to the risks they already pose or may pose in the future.',
    plan: [],
    speakers: ['Den Braun, Bronx, CFO'],
    moderator: '',
    packages: ['pro', 'expert'],
    image: digitalMoney,
  },
  {
    _id: '6sfgcd',
    date: '2023/09/07',
    time: '13:00',
    duration: 3,
    location: 'New York, USA',
    title: 'Challenges of modern financial analytics',
    description:
      'The development of computing technologies and the emergence of cryptocurrencies have created the possibility of concluding direct smart contracts between economic agents, effectively redistributing risks between them and thereby creating prerequisites for further growth in economic efficiency in local markets, taking into account the local nature of their risks. To realize the new opportunities that new technologies give us, we need to create a simple and understandable decentralized platform for trading derivative financial instruments (smart derivatives) that can be initiated by each market participant, create analytical methods for the basic assessment of financial contracts, ensure their implementation by introducing certain algorithms into the corresponding smart contracts, using the mechanism of collateral by different parties to the transaction. Another important tool for the implementation of such agreements is the inclusion, by mutual agreement of the parties, in smart derivatives of reliable information flows that provide another participant in the platform – the oracle.',
    plan: [],
    speakers: ['Petter Ponn, JTLD, Professor of Finance and Economics'],
    moderator: 'Stew May',
    packages: ['pro', 'expert'],
    image: defi,
  },
  {
    _id: '7sfgcd',
    date: '2023-11-15',
    description: 'meeting',
    duration: 2,
    image: 'C:\\fakepath\\br-marketing.jpeg',
    location: 'Zoom',
    moderator: [],
    packages: ['pro'],
    plan: [],
    speakers: ['Jon, CFO'],
    time: '18:30',
    title: 'meeting',
  },
];

const AdminEventsPage = () => {
  const [events, setEvents] = useState(eventsData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);

  const [filterEvents, setFilterEvents] = useState(eventsData);
  const [filterDate, setFilterDate] = useState('');
  const [filterTime, setFilterTime] = useState('');
  const [filterDuration, setFilterDuration] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterTitle, setFilterTitle] = useState('');
  const [filterDescription, setFilterDescription] = useState('');
  const [filterPlan, setFilterPlan] = useState('');
  const [filterSpeakers, setFilterSpeakers] = useState('');
  const [filterModerator, setFilterModerator] = useState('');
  const [filterPackages, setFilterPackages] = useState('');
  const [filterImage, setFilterImage] = useState('');

  //   useEffect(() => {
  //     (async function getData() {
  //       setIsLoading(true);
  //       try {
  //         const { data } = await fetchData('/admin/events');
  //         setEvents(data);
  //         setFilterEvents(data);
  //         if (!data) {
  //           return onFetchError('Whoops, something went wrong');
  //         }
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     })();
  //   }, [reload]);

  //   async function deleteEvent(id) {
  //     setIsLoading(true);
  //     try {
  //       const { date } = await deleteData(`/events/${id}`);
  //       return date;
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       reload === true ? dispatch(addReload(false)) : dispatch(addReload(true));
  //       setIsLoading(false);
  //     }
  //   }

  const handleChangeFilter = e => {
    e.preventDefault();
    switch (e.currentTarget.name) {
      case 'filterDate':
        setFilterDate(e.currentTarget.value);
        break;
      case 'filterTime':
        setFilterTime(e.currentTarget.value);
        break;
      case 'filterDuration':
        setFilterDuration(e.currentTarget.value);
        break;
      case 'filterLocation':
        setFilterLocation(e.currentTarget.value);
        break;
      case 'filterTitle':
        setFilterTitle(e.currentTarget.value);
        break;
      case 'filterDescription':
        setFilterDescription(e.currentTarget.value);
        break;
      case 'filterPlan':
        setFilterPlan(e.currentTarget.value);
        break;
      case 'filterSpeakers':
        setFilterSpeakers(e.currentTarget.value);
        break;
      case 'filterModerator':
        setFilterModerator(e.currentTarget.value);
        break;
      case 'filterPackages':
        setFilterPackages(e.currentTarget.value);
        break;
      case 'filterImage':
        setFilterImage(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const startFilterEvents = e => {
    e.preventDefault();
    const peremOfFilter = [];
    events.map(item => {
      if (
        item.date.toString().toLowerCase().includes(filterDate) &&
        item.time.toString().toLowerCase().includes(filterTime) &&
        item.duration.toString().toLowerCase().includes(filterDuration) &&
        item.location.toString().toLowerCase().includes(filterLocation) &&
        item.title.toString().toLowerCase().includes(filterTitle) &&
        item.description.toString().includes(filterDescription) &&
        item.plan.join(',').toString().toLowerCase().includes(filterPlan) &&
        item.speakers
          .join(',')
          .toString()
          .toLowerCase()
          .includes(filterSpeakers) &&
        item.moderator.toString().toLowerCase().includes(filterModerator) &&
        item.packages.join(',').toString().includes(filterPackages) &&
        item.image.toString().toLowerCase().includes(filterImage)
      ) {
        peremOfFilter.push(item);
      }
    });

    setFilterEvents(peremOfFilter);
  };

  const cleanFilterEvents = e => {
    e.preventDefault();
    let filterPr = '';
    let filterCa = '';
    let filterDu = '';
    let filterLn = '';
    let filterA = '';
    let filterD = '';
    let filterS = '';
    let filterU = '';
    let filterP = '';
    let filterC = '';
    let filterI = '';

    e.currentTarget.name === 'clearFilterDate'
      ? setFilterDate(filterPr)
      : (filterPr = filterDate);
    e.currentTarget.name === 'clearFilterTime'
      ? setFilterTime(filterCa)
      : (filterCa = filterTime);
    e.currentTarget.name === 'clearFilterDuration'
      ? setFilterDuration(filterDu)
      : (filterDu = filterDuration);
    e.currentTarget.name === 'clearFilterLocation'
      ? setFilterLocation(filterLn)
      : (filterLn = filterLocation);
    e.currentTarget.name === 'clearFilterTitle'
      ? setFilterTitle(filterA)
      : (filterA = filterTitle);
    e.currentTarget.name === 'clearFilterDescription'
      ? setFilterDescription(filterD)
      : (filterD = filterDescription);
    e.currentTarget.name === 'clearFilterPlan'
      ? setFilterPlan(filterS)
      : (filterS = filterPlan);
    e.currentTarget.name === 'clearFilterSpeakers'
      ? setFilterSpeakers(filterU)
      : (filterS = filterSpeakers);
    e.currentTarget.name === 'clearFilterModerator'
      ? setFilterModerator(filterP)
      : (filterP = filterModerator);
    e.currentTarget.name === 'clearFilterPackages'
      ? setFilterPackages(filterC)
      : (filterC = filterPackages);
    e.currentTarget.name === 'clearFilterImage'
      ? setFilterImage(filterI)
      : (filterI = filterImage);

    const peremOfFilter = [];
    events.map(item => {
      if (
        item.date?.toString().toLowerCase().includes(filterPr) &&
        item.time?.toString().toLowerCase().includes(filterCa) &&
        item.duration?.toString().toLowerCase().includes(filterDu) &&
        item.location?.toString().toLowerCase().includes(filterLn) &&
        item.title?.toString().toLowerCase().includes(filterA) &&
        item.description?.toString().toLowerCase().includes(filterD) &&
        item.plan?.toString().toLowerCase().includes(filterS) &&
        item.speakers?.toString().toLowerCase().includes(filterU) &&
        item.moderator?.toString().toLowerCase().includes(filterP) &&
        item.packages?.toString().toLowerCase().includes(filterC) &&
        item.image?.toString().toLowerCase().includes(filterI)
      ) {
        peremOfFilter.push(item);
      }
      return peremOfFilter;
    });

    setFilterEvents(peremOfFilter);
  };

  const clearAllFilters = () => {
    reload === true ? dispatch(addReload(false)) : dispatch(addReload(true));
    setFilterDate('');
    setFilterTime('');
    setFilterDuration('');
    setFilterLocation('');
    setFilterTitle('');
    setFilterDescription('');
    setFilterPlan('');
    setFilterSpeakers('');
    setFilterModerator('');
    setFilterPackages('');
    setFilterImage('');
  };

  const handleSearchOnEnter = e => {
    if (e.key == 'Enter') {
      setEvents(e);
    }
  };

  // watch for view and toggle columns
  const viewWidth = window.screen.width;
  const [isLearnMore, setIsLearnMore] = useState(viewWidth <= 1536);
  const toggleLearnMore = () => setIsLearnMore(state => !state);

  // add edit modal
  const dispatch = useDispatch();
  const openModal = e => {
    e.preventDefault();
    e.stopPropagation();
    if (
      e.currentTarget.dataset.modal === 'admin' ||
      e.currentTarget.dataset.modal === 'admin_create'
    ) {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
          id: e.currentTarget.dataset.id,
        }),
      );
      setTimeout(() => openModalWindow(e, null), 200);
    }
  };

  // table pagination
  const [perPage] = useState(20);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(
    getFromStorage('page') ? getFromStorage('page') : 1,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO title="Administration" description="Events Administration" />
      <AdminContainer>
        <BackButton to="/admin">Back</BackButton>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <ClearFiltersBtn
            type="button"
            id="filters"
            name="clearFilters"
            onClick={e => {
              clearAllFilters(e);
            }}
          >
            Clear all filters
          </ClearFiltersBtn>
          {!isLearnMore ? (
            <LearnMoreBtn onClick={toggleLearnMore}>Less details</LearnMoreBtn>
          ) : (
            <LearnMoreBtn onClick={toggleLearnMore}>More details</LearnMoreBtn>
          )}
        </div>
        <Table>
          <TableFilter>
            <TableRow>
              <TableHead>
                <input
                  type="text"
                  name="filterDate"
                  placeholder="Date"
                  value={filterDate}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterDate"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterDate"
                    name="clearFilterDate"
                    onClick={e => {
                      cleanFilterEvents(e);
                      setFilterDate('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterTime"
                  placeholder="Time"
                  value={filterTime}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterTime"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterTime"
                    name="clearFilterTime"
                    onClick={e => {
                      cleanFilterEvents(e);
                      setFilterTime('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="number"
                  name="filterDuration"
                  placeholder="Duration"
                  value={filterDuration}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterDuration"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterDuration"
                    name="clearFilterDuration"
                    onClick={e => {
                      cleanFilterEvents(e);
                      setFilterDuration('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterLocation"
                  placeholder="Location"
                  value={filterLocation}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterLocation"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterLocation"
                    name="clearFilterLocation"
                    onClick={e => {
                      cleanFilterEvents(e);
                      setFilterLocation('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterTitle"
                  placeholder="Title"
                  value={filterTitle}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterTitle"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterTitle"
                    name="clearFilterTitle"
                    onClick={e => {
                      cleanFilterEvents(e);
                      setFilterTitle('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              {!isLearnMore && (
                <>
                  <TableHead>
                    <input
                      type="text"
                      name="filterDescription"
                      placeholder="Description"
                      value={filterDescription}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterDescription"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterDescription"
                        name="clearFilterDescription"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterDescription('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterPlan"
                      placeholder="Plan"
                      value={filterPlan}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterPlan"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterPlan"
                        name="clearFilterPlan"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterPlan('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterSpeakers"
                      placeholder="Speakers"
                      value={filterSpeakers}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterSpeakers"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterSpeakers"
                        name="clearFilterSpeakers"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterSpeakers('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterModerator"
                      placeholder="Moderator"
                      value={filterModerator}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterModerator"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterModerator"
                        name="clearFilterModerator"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterModerator('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterPackages"
                      placeholder="Packages"
                      value={filterPackages}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterPackages"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterPackages"
                        name="clearFilterPackages"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterPackages('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterImage"
                      placeholder="Image"
                      value={filterImage}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterImage"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterImage"
                        name="clearFilterImage"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterImage('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                </>
              )}
              <TableHead>
                <IconBtn
                  type="button"
                  aria-label="Create event"
                  onClick={e => {
                    openModal(e);
                  }}
                  data-modal="admin_create"
                >
                  <MdAddCard size={25} />
                </IconBtn>
              </TableHead>
            </TableRow>
          </TableFilter>
          <tbody>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Title</TableHead>
              {!isLearnMore && (
                <>
                  <TableHead>Description</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Speakers</TableHead>
                  <TableHead>Moderator</TableHead>
                  <TableHead>Packages</TableHead>
                  <TableHead>Image</TableHead>
                </>
              )}
              <TableHead>Action</TableHead>
            </TableRow>
            {filterEvents.length > 0 &&
              !error &&
              filterEvents
                .slice((current - 1) * size, current * size)
                .map(event => (
                  <TableRow key={event._id}>
                    <TableData>{event.date}</TableData>
                    <TableData>{event.time}</TableData>
                    <TableData>{event.duration} h</TableData>
                    <TableData>{event.location}</TableData>
                    <TableData>{event.title}</TableData>
                    {!isLearnMore && (
                      <>
                        <TableData>{event.description}</TableData>
                        <TableData>
                          {event.plan ? event.plan.join('; ') : ''}
                        </TableData>
                        <TableData>{event.speakers.join('; ')}</TableData>
                        <TableData>{event.moderator}</TableData>
                        <TableData>{event.packages.join(', ')}</TableData>
                        <TableData>
                          {event.image && event.image !== 'none' ? 'yes' : 'no'}
                        </TableData>
                      </>
                    )}
                    <TableData>
                      <IconBtn
                        type="button"
                        aria-label="Edit event"
                        onClick={e => {
                          openModal(e);
                        }}
                        data-modal="admin"
                        data-id={event._id}
                      >
                        <MdEdit size={15} />
                      </IconBtn>
                      <IconBtn
                        type="button"
                        aria-label="Delete event"
                        onClick={() => {
                          deleteEvent(event._id);
                        }}
                      >
                        <MdClose size={15} />
                      </IconBtn>
                    </TableData>
                  </TableRow>
                ))}
          </tbody>
        </Table>
        <PaginationBlock
          items={filterEvents}
          size={size}
          setSize={setSize}
          current={current}
          setCurrent={setCurrent}
        />
      </AdminContainer>
      <EditEventModal />
      <CreateEventModal />
    </>
  );
};

export default AdminEventsPage;
