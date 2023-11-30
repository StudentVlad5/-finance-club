import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdClose,
  MdFilterAltOff,
  MdEdit,
  MdAddCard,
  MdFilterAlt,
} from 'react-icons/md';
import moment from 'moment';
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
import { StatusContext } from 'components/ContextStatus/ContextStatus';
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

const initialState = {
  filterDate: '',
  filterTime: '',
  filterDuration: '',
  filterLocation: '',
  filterDescription: '',
  filterPlan: '',
  filterSpeakers: '',
  filterModerator: '',
  filterPackages: '',
  filterImage: '',
};

const AdminEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);

  const [filterEvents, setFilterEvents] = useState([]);
  const [filters, setFilters] = useState(initialState);

  const { selectedLanguage } = useContext(StatusContext);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData('/admin/events');
        setEvents(data);
        setFilterEvents(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [reload, selectedLanguage]);

  async function deleteEvent(id) {
    setIsLoading(true);
    try {
      const { date } = await deleteData(`/events/${id}`);
      return date;
    } catch (error) {
      setError(error);
    } finally {
      reload === true ? dispatch(addReload(false)) : dispatch(addReload(true));
      setIsLoading(false);
    }
  }

  const handleChangeFilter = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    const selectedFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(selectedFilters);
    document
      .querySelector(`button[id='${name}'][name='startFilterEvents']`)
      .classList.remove('active');
    document
      .querySelector(`button[id='${name}'][name='cleanFilterEvents']`)
      .classList.add('active');
  };

  const startFilterEvents = e => {
    e.preventDefault();
    const peremOfFilter = [];
    events.map(item => {
      let isImage =
        item[selectedLanguage].image && item[selectedLanguage].image !== ''
          ? 'yes'
          : 'no';
      if (
        moment(item[selectedLanguage].date)
          .format('DD.MM.YYYY')
          .includes(filters['filterDate']) &&
        item[selectedLanguage].time
          .split(':')
          .join('')
          .includes(filters['filterTime']) &&
        item[selectedLanguage].duration
          .toString()
          .toLowerCase()
          .includes(filters['filterDuration']) &&
        item[selectedLanguage].location
          .toString()
          .toLowerCase()
          .includes(filters['filterLocation']) &&
        item[selectedLanguage].title
          .toString()
          .toLowerCase()
          .includes(filters['filterTitle']) &&
        item[selectedLanguage].description
          .toString()
          .toLowerCase()
          .includes(filters['filterDescription']) &&
        item[selectedLanguage].plan
          .join('; ')
          .toString()
          .toLowerCase()
          .includes(filters['filterPlan']) &&
        item[selectedLanguage].speakers
          .join('; ')
          .toString()
          .toLowerCase()
          .includes(filters['filterSpeakers']) &&
        item[selectedLanguage].moderator
          .toString()
          .toLowerCase()
          .includes(filters['filterModerator']) &&
        item[selectedLanguage].packages
          .join(', ')
          .toString()
          .toLowerCase()
          .includes(filters['filterPackages']) &&
        isImage.includes(filters['filterImage'])
      ) {
        peremOfFilter.push(item);
      }
    });
    setCurrent(1);
    setFilterEvents(peremOfFilter);
  };

  const cleanFilterEvents = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    const deletedFilters = {
      ...filters,
      [id]: '',
    };

    setFilters(deletedFilters);
    document
      .querySelector(`button[id='${id}'][name='startFilterEvents']`)
      .classList.add('active');
    document
      .querySelector(`button[id='${id}'][name='cleanFilterEvents']`)
      .classList.remove('active');

    startFilterEvents(e);
  };

  const clearAllFilters = () => {
    setFilters(initialState);
    const listOfStartFilterEvents = document.querySelectorAll(
      `button[name='startFilterEvents']`,
    );
    listOfStartFilterEvents.forEach(item => item.classList.add('active'));

    const listOfCleanFilterEvents = document.querySelectorAll(
      `button[name='cleanFilterEvents']`,
    );
    listOfCleanFilterEvents.forEach(item => item.classList.remove('active'));

    reload === true ? dispatch(addReload(false)) : dispatch(addReload(true));
  };

  const handleSearchOnEnter = e => {
    if (e.key == 'Enter') {
      startFilterEvents(e);
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
            aria-label="Clear all filters"
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
                  value={filters['filterDate']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    className="active"
                    type="button"
                    id="filterDate"
                    name="startFilterEvents"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterDate"
                    name="cleanFilterEvents"
                    onClick={e => {
                      cleanFilterEvents(e);
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
                  value={filters['filterTime']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    className="active"
                    type="button"
                    id="filterTime"
                    name="startFilterEvents"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterTime"
                    name="cleanFilterEvents"
                    onClick={e => {
                      cleanFilterEvents(e);
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
                  value={filters['filterDuration']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    className="active"
                    type="button"
                    id="filterDuration"
                    name="startFilterEvents"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterDuration"
                    name="cleanFilterEvents"
                    onClick={e => {
                      cleanFilterEvents(e);
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
                  value={filters['filterLocation']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    className="active"
                    type="button"
                    id="filterLocation"
                    name="startFilterEvents"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterLocation"
                    name="cleanFilterEvents"
                    onClick={e => {
                      cleanFilterEvents(e);
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
                  value={filters['filterTitle']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    className="active"
                    type="button"
                    id="filterTitle"
                    name="startFilterEvents"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterTitle"
                    name="cleanFilterEvents"
                    onClick={e => {
                      cleanFilterEvents(e);
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
                      value={filters['filterDescription']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        className="active"
                        type="button"
                        id="filterDescription"
                        name="startFilterEvents"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterDescription"
                        name="cleanFilterEvents"
                        onClick={e => {
                          cleanFilterEvents(e);
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
                      value={filters['filterPlan']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        className="active"
                        type="button"
                        id="filterPlan"
                        name="startFilterEvents"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterPlan"
                        name="cleanFilterEvents"
                        onClick={e => {
                          cleanFilterEvents(e);
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
                      value={filters['filterSpeakers']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        className="active"
                        type="button"
                        id="filterSpeakers"
                        name="startFilterEvents"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterSpeakers"
                        name="cleanFilterEvents"
                        onClick={e => {
                          cleanFilterEvents(e);
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
                      value={filters['filterModerator']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        className="active"
                        type="button"
                        id="filterModerator"
                        name="startFilterEvents"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterModerator"
                        name="cleanFilterEvents"
                        onClick={e => {
                          cleanFilterEvents(e);
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
                      value={filters['filterPackages']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        className="active"
                        type="button"
                        id="filterPackages"
                        name="startFilterEvents"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterPackages"
                        name="cleanFilterEvents"
                        onClick={e => {
                          cleanFilterEvents(e);
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
                      value={filters['filterImage']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        className="active"
                        type="button"
                        id="filterImage"
                        name="startFilterEvents"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterImage"
                        name="cleanFilterEvents"
                        onClick={e => {
                          cleanFilterEvents(e);
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
                    <TableData>
                      {moment(event[selectedLanguage].date).format(
                        'DD.MM.YYYY',
                      )}
                    </TableData>
                    <TableData>{event[selectedLanguage].time}</TableData>
                    <TableData>{event[selectedLanguage].duration}</TableData>
                    <TableData>{event[selectedLanguage].location}</TableData>
                    <TableData>{event[selectedLanguage].title}</TableData>
                    {!isLearnMore && (
                      <>
                        <TableData>
                          {event[selectedLanguage].description}
                        </TableData>
                        <TableData>
                          {event[selectedLanguage].plan
                            ? event[selectedLanguage].plan.join('; ')
                            : ''}
                        </TableData>
                        <TableData>
                          {event[selectedLanguage].speakers.join('; ')}
                        </TableData>
                        <TableData>
                          {event[selectedLanguage].moderator}
                        </TableData>
                        <TableData>
                          {event[selectedLanguage].packages.join(', ')}
                        </TableData>
                        <TableData>
                          {event[selectedLanguage].image &&
                          event[selectedLanguage].image !== 'none'
                            ? 'yes'
                            : 'no'}
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
