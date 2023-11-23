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
import { EditUserModal } from 'components/Admin/UsersModal/EditUserModal';
import { CreateUserModal } from 'components/Admin/UsersModal/CreateUserModal';
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

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);

  const [filterUsers, setFilterUsers] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterSurname, setFilterSurname] = useState('');
  const [filterEmail, setFilterEmail] = useState('');
  const [filterPhone, setFilterPhone] = useState('');
  const [filterCompany, setFilterCompany] = useState('');
  const [filterPosition, setFilterPosition] = useState('');
  const [filterBirthday, setFilterBirthday] = useState('');
  const [filterEvents, setFilterEvents] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPackages, setFilterPackages] = useState('');
  const [filterAvatar, setFilterAvatar] = useState('');
  const [filterRole, setFilterRole] = useState('');

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData('/admin/users');
        setUsers(data);
        setFilterUsers(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [reload]);

  async function deleteUser(id) {
    setIsLoading(true);
    try {
      const { date } = await deleteData(`/users/${id}`);
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
    switch (e.currentTarget.name) {
      case 'filterName':
        setFilterName(e.currentTarget.value);
        break;
      case 'filterSurname':
        setFilterSurname(e.currentTarget.value);
        break;
      case 'filterEmail':
        setFilterEmail(e.currentTarget.value);
        break;
      case 'filterPhone':
        setFilterPhone(e.currentTarget.value);
        break;
      case 'filterCompany':
        setFilterCompany(e.currentTarget.value);
        break;
      case 'filterPosition':
        setFilterPosition(e.currentTarget.value);
        break;
      case 'filterBirthday':
        setFilterBirthday(e.currentTarget.value);
        break;
      case 'filterEvents':
        setFilterEvents(e.currentTarget.value);
        break;
      case 'filterStatus':
        setFilterStatus(e.currentTarget.value);
        break;
      case 'filterPackages':
        setFilterPackages(e.currentTarget.value);
        break;
      case 'filterAvatar':
        setFilterAvatar(e.currentTarget.value);
        break;
      case 'filterRole':
        setFilterRole(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const startFilterUsers = e => {
    e.preventDefault();
    const peremOfFilter = [];
    users.map(item => {
      if (
        item.name.toString().toLowerCase().includes(filterName) &&
        item.surname.toString().toLowerCase().includes(filterSurname) &&
        item.email.toString().toLowerCase().includes(filterEmail) &&
        item.phone.toString().toLowerCase().includes(filterPhone) &&
        item.company.toString().toLowerCase().includes(filterCompany) &&
        item.position.toString().includes(filterPosition) &&
        item.birthday.toString().toLowerCase().includes(filterBirthday) &&
        item.events.join(',').toString().toLowerCase().includes(filterEvents) &&
        item.status.toString().toLowerCase().includes(filterStatus) &&
        item.packages.join(',').toString().includes(filterPackages) &&
        item.avatar.toString().toLowerCase().includes(filterAvatar) &&
        item.role.toString().toLowerCase().includes(filterRole)
      ) {
        peremOfFilter.push(item);
      }
    });

    setFilterUsers(peremOfFilter);
  };

  const cleanFilterUsers = e => {
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
    let filterR = '';

    e.currentTarget.name === 'clearFilterName'
      ? setFilterName(filterPr)
      : (filterPr = filterName);
    e.currentTarget.name === 'clearFilterSurname'
      ? setFilterSurname(filterCa)
      : (filterCa = filterSurname);
    e.currentTarget.name === 'clearFilterEmail'
      ? setFilterEmail(filterDu)
      : (filterDu = filterEmail);
    e.currentTarget.name === 'clearFilterPhone'
      ? setFilterPhone(filterLn)
      : (filterLn = filterPhone);
    e.currentTarget.name === 'clearFilterCompany'
      ? setFilterCompany(filterA)
      : (filterA = filterCompany);
    e.currentTarget.name === 'clearFilterPosition'
      ? setFilterPosition(filterD)
      : (filterD = filterPosition);
    e.currentTarget.name === 'clearFilterBirthday'
      ? setFilterBirthday(filterS)
      : (filterS = filterBirthday);
    e.currentTarget.name === 'clearFilterEvents'
      ? setFilterEvents(filterU)
      : (filterU = filterEvents);
    e.currentTarget.name === 'clearFilterStatus'
      ? setFilterStatus(filterP)
      : (filterP = filterStatus);
    e.currentTarget.name === 'clearFilterPackages'
      ? setFilterPackages(filterC)
      : (filterC = filterPackages);
    e.currentTarget.name === 'clearFilterAvatar'
      ? setFilterAvatar(filterI)
      : (filterI = filterAvatar);
    e.currentTarget.name === 'clearFilterRole'
      ? setFilterRole(filterR)
      : (filterR = filterRole);

    const peremOfFilter = [];
    users.map(item => {
      if (
        item.name?.toString().toLowerCase().includes(filterPr) &&
        item.surname?.toString().toLowerCase().includes(filterCa) &&
        item.email?.toString().toLowerCase().includes(filterDu) &&
        item.phone?.toString().toLowerCase().includes(filterLn) &&
        item.company?.toString().toLowerCase().includes(filterA) &&
        item.position?.toString().toLowerCase().includes(filterD) &&
        item.birthday?.toString().toLowerCase().includes(filterS) &&
        item.events?.toString().toLowerCase().includes(filterU) &&
        item.status?.toString().toLowerCase().includes(filterP) &&
        item.packages?.toString().toLowerCase().includes(filterC) &&
        item.avatar?.toString().toLowerCase().includes(filterI) &&
        item.role?.toString().toLowerCase().includes(filterR)
      ) {
        peremOfFilter.push(item);
      }
      return peremOfFilter;
    });

    setFilterUsers(peremOfFilter);
  };

  const clearAllFilters = () => {
    reload === true ? dispatch(addReload(false)) : dispatch(addReload(true));
    setFilterName('');
    setFilterSurname('');
    setFilterEmail('');
    setFilterPhone('');
    setFilterCompany('');
    setFilterPosition('');
    setFilterBirthday('');
    setFilterEvents('');
    setFilterStatus('');
    setFilterPackages('');
    setFilterAvatar('');
    setFilterRole('');
  };

  const handleSearchOnEnter = e => {
    if (e.key == 'Enter') {
      setUsers(e);
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
      <SEO Company="Administration" Position="Users Administration" />
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
                  name="filterName"
                  placeholder="Name"
                  value={filterName}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterName"
                    onClick={e => startFilterUsers(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterName"
                    name="clearFilterName"
                    onClick={e => {
                      cleanFilterUsers(e);
                      setFilterName('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterSurname"
                  placeholder="Surname"
                  value={filterSurname}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterSurname"
                    onClick={e => startFilterUsers(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterSurname"
                    name="clearFilterSurname"
                    onClick={e => {
                      cleanFilterUsers(e);
                      setFilterSurname('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="email"
                  name="filterEmail"
                  placeholder="Email"
                  value={filterEmail}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterEmail"
                    onClick={e => startFilterUsers(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterEmail"
                    name="clearFilterEmail"
                    onClick={e => {
                      cleanFilterUsers(e);
                      setFilterEmail('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="phone"
                  name="filterPhone"
                  placeholder="Phone"
                  value={filterPhone}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterPhone"
                    onClick={e => startFilterUsers(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterPhone"
                    name="clearFilterPhone"
                    onClick={e => {
                      cleanFilterUsers(e);
                      setFilterPhone('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterStatus"
                  placeholder="Status"
                  value={filterStatus}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterStatus"
                    onClick={e => startFilterUsers(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterStatus"
                    name="clearFilterStatus"
                    onClick={e => {
                      cleanFilterUsers(e);
                      setFilterStatus('');
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
                      name="filterCompany"
                      placeholder="Company"
                      value={filterCompany}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterCompany"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterCompany"
                        name="clearFilterCompany"
                        onClick={e => {
                          cleanFilterUsers(e);
                          setFilterCompany('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterPosition"
                      placeholder="Position"
                      value={filterPosition}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterPosition"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterPosition"
                        name="clearFilterPosition"
                        onClick={e => {
                          cleanFilterUsers(e);
                          setFilterPosition('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterBirthday"
                      placeholder="Birthday"
                      value={filterBirthday}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterBirthday"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterBirthday"
                        name="clearFilterBirthday"
                        onClick={e => {
                          cleanFilterUsers(e);
                          setFilterBirthday('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterEvents"
                      placeholder="Events"
                      value={filterEvents}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterEvents"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterEvents"
                        name="clearFilterEvents"
                        onClick={e => {
                          cleanFilterUsers(e);
                          setFilterEvents('');
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
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterPackages"
                        name="clearFilterPackages"
                        onClick={e => {
                          cleanFilterUsers(e);
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
                      name="filterAvatar"
                      placeholder="Avatar"
                      value={filterAvatar}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterAvatar"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterAvatar"
                        name="clearFilterAvatar"
                        onClick={e => {
                          cleanFilterUsers(e);
                          setFilterAvatar('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterRole"
                      placeholder="Role"
                      value={filterRole}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterRole"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterRole"
                        name="clearFilterRole"
                        onClick={e => {
                          cleanFilterUsers(e);
                          setFilterRole('');
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
                  aria-label="Create user"
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
              <TableHead>Name</TableHead>
              <TableHead>Surname</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              {!isLearnMore && (
                <>
                  <TableHead>Company</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Birthday</TableHead>
                  <TableHead>Events</TableHead>
                  <TableHead>Packages</TableHead>
                  <TableHead>Avatar</TableHead>
                  <TableHead>Role</TableHead>
                </>
              )}
              <TableHead>Action</TableHead>
            </TableRow>
            {filterUsers.length > 0 &&
              !error &&
              filterUsers
                .slice((current - 1) * size, current * size)
                .map(user => (
                  <TableRow key={user._id}>
                    <TableData>{user.name}</TableData>
                    <TableData>{user.surname}</TableData>
                    <TableData>{user.email}</TableData>
                    <TableData>{user.phone}</TableData>
                    <TableData>{user.status}</TableData>

                    {!isLearnMore && (
                      <>
                        <TableData>{user.company}</TableData>
                        <TableData>{user.position}</TableData>
                        <TableData>{user.birthday}</TableData>
                        <TableData>{user.events.join(', ')}</TableData>
                        <TableData>{user.packages.join(', ')}</TableData>
                        <TableData>
                          {user.avatar && user.avatar !== 'none' ? 'yes' : 'no'}
                        </TableData>
                        <TableData>{user.role}</TableData>
                      </>
                    )}
                    <TableData>
                      <IconBtn
                        type="button"
                        aria-label="Edit user"
                        onClick={e => {
                          openModal(e);
                        }}
                        data-modal="admin"
                        data-id={user._id}
                      >
                        <MdEdit size={15} />
                      </IconBtn>
                      <IconBtn
                        type="button"
                        aria-label="Delete user"
                        onClick={() => {
                          deleteUser(user._id);
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
          items={filterUsers}
          size={size}
          setSize={setSize}
          current={current}
          setCurrent={setCurrent}
        />
      </AdminContainer>
      <EditUserModal />
      <CreateUserModal />
    </>
  );
};

export default AdminUsersPage;
