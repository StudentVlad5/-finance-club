import React, { useState, useEffect } from 'react';
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

const initialState = {
  filterName: '',
  filterSurname: '',
  filterEmail: '',
  filterPhone: '',
  filterCompany: '',
  filterPosition: '',
  filterBirthday: '',
  filterEvents: '',
  filterPackages: '',
  filterAvatar: '',
  filterStatus: '',
  filterRole: '',
};

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);

  const [filterUsers, setFilterUsers] = useState([]);
  const [filters, setFilters] = useState(initialState);

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
    const { name, value } = e.currentTarget;
    const selectedFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(selectedFilters);

    document
      .querySelector(`button[id='${name}'][name='startFilterUsers']`)
      .classList.remove('active');
    document
      .querySelector(`button[id='${name}'][name='cleanFilterUsers']`)
      .classList.add('active');
  };

  const startFilterUsers = e => {
    e.preventDefault();
    const peremOfFilter = [];
    users.map(item => {
      let isAvatar = item.avatar && item.avatar !== '' ? 'yes' : 'no';
      if (
        item.name.toString().toLowerCase().includes(filters['filterName']) &&
        item.surname
          .toString()
          .toLowerCase()
          .includes(filters['filterSurname']) &&
        item.email.toString().toLowerCase().includes(filters['filterEmail']) &&
        item.phone.toString().toLowerCase().includes(filters['filterPhone']) &&
        item.company
          .toString()
          .toLowerCase()
          .includes(filters['filterCompany']) &&
        item.position.toString().includes(filters['filterPosition']) &&
        moment(item.birthday)
          .format('DD.MM.YYYY')
          .includes(filters['filterBirthday']) &&
        item.events
          .join(', ')
          .toString()
          .toLowerCase()
          .includes(filters['filterEvents']) &&
        item.packages
          .flatMap(pack => pack.name)
          // .join(', ')
          .toString()
          .toLowerCase()
          .includes(filters['filterPackages']) &&
        isAvatar.toString().toLowerCase().includes(filters['filterAvatar']) &&
        item.status
          .toString()
          .toLowerCase()
          .includes(filters['filterStatus']) &&
        item.role.toString().toLowerCase().includes(filters['filterRole'])
      ) {
        peremOfFilter.push(item);
      }
    });
    setCurrent(1);
    setFilterUsers(peremOfFilter);
  };

  const cleanFilterUsers = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    const deletedFilters = {
      ...filters,
      [id]: '',
    };
    setFilters(deletedFilters);

    document
      .querySelector(`button[id='${id}'][name='startFilterUsers']`)
      .classList.add('active');
    document
      .querySelector(`button[id='${id}'][name='cleanFilterUsers']`)
      .classList.remove('active');

    startFilterUsers(e);
  };

  const clearAllFilters = () => {
    reload === true ? dispatch(addReload(false)) : dispatch(addReload(true));
    setFilters(initialState);
    const listOfStartFilterUsers = document.querySelectorAll(
      `button[name='startFilterUsers']`,
    );
    listOfStartFilterUsers.forEach(item => item.classList.add('active'));

    const listOfCleanFilterUsers = document.querySelectorAll(
      `button[name='cleanFilterUsers']`,
    );
    listOfCleanFilterUsers.forEach(item => item.classList.remove('active'));
  };

  const handleSearchOnEnter = e => {
    if (e.key == 'Enter') {
      startFilterUsers(e);
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
                  value={filters['filterName']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterName"
                    name="startFilterUsers"
                    className="active"
                    onClick={e => startFilterUsers(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterName"
                    name="cleanFilterUsers"
                    onClick={e => {
                      cleanFilterUsers(e);
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
                  value={filters['filterSurname']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterSurname"
                    name="startFilterUsers"
                    className="active"
                    onClick={e => startFilterUsers(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterSurname"
                    name="cleanFilterUsers"
                    onClick={e => {
                      cleanFilterUsers(e);
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
                  value={filters['filterEmail']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterEmail"
                    name="startFilterUsers"
                    className="active"
                    onClick={e => startFilterUsers(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterEmail"
                    name="cleanFilterUsers"
                    onClick={e => {
                      cleanFilterUsers(e);
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
                  value={filters['filterPhone']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterPhone"
                    name="startFilterUsers"
                    className="active"
                    onClick={e => startFilterUsers(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterPhone"
                    name="cleanFilterUsers"
                    onClick={e => {
                      cleanFilterUsers(e);
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
                  value={filters['filterStatus']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterStatus"
                    name="startFilterUsers"
                    className="active"
                    onClick={e => startFilterUsers(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterStatus"
                    name="cleanFilterUsers"
                    onClick={e => {
                      cleanFilterUsers(e);
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
                      value={filters['filterCompany']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterCompany"
                        name="startFilterUsers"
                        className="active"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterCompany"
                        name="cleanFilterUsers"
                        onClick={e => {
                          cleanFilterUsers(e);
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
                      value={filters['filterPosition']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterPosition"
                        name="startFilterUsers"
                        className="active"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterPosition"
                        name="cleanFilterUsers"
                        onClick={e => {
                          cleanFilterUsers(e);
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
                      value={filters['filterBirthday']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterBirthday"
                        name="startFilterUsers"
                        className="active"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterBirthday"
                        name="cleanFilterUsers"
                        onClick={e => {
                          cleanFilterUsers(e);
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
                      value={filters['filterEvents']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterEvents"
                        name="startFilterUsers"
                        className="active"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterEvents"
                        name="cleanFilterUsers"
                        onClick={e => {
                          cleanFilterUsers(e);
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
                        type="button"
                        id="filterPackages"
                        name="startFilterUsers"
                        className="active"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterPackages"
                        name="cleanFilterUsers"
                        onClick={e => {
                          cleanFilterUsers(e);
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
                      value={filters['filterAvatar']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterAvatar"
                        name="startFilterUsers"
                        className="active"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterAvatar"
                        name="cleanFilterUsers"
                        onClick={e => {
                          cleanFilterUsers(e);
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
                      value={filters['filterRole']}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterRole"
                        name="startFilterUsers"
                        className="active"
                        onClick={e => startFilterUsers(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterRole"
                        name="cleanFilterUsers"
                        onClick={e => {
                          cleanFilterUsers(e);
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
                        <TableData>
                          {moment(user.birthday).format('DD.MM.YYYY')}
                        </TableData>
                        <TableData>{user.events.join(', ')}</TableData>
                        <TableData>
                          {user.packages.flatMap(pack => pack.name)}
                        </TableData>
                        <TableData>
                          {user.avatar && user.avatar !== '' ? 'yes' : 'no'}
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
