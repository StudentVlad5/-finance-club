import React, { useState, useEffect, useContext } from 'react';
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
import { reloadValue } from 'redux/reload/selectors';
import { fetchData, deleteData } from 'services/APIservice';
import { getFromStorage } from 'services/localStorService';
import { PaginationBlock } from 'helpers/Pagination/Pagination';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { BackButton } from 'helpers/BackLink/BackLink';
import { CreatePackageModal } from 'components/Admin/PackageModal/CreatePackageModal';
import { EditPackageModal } from 'components/Admin/PackageModal/EditPackageModal';
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
import { addReload } from 'redux/reload/slice';

const initialState = {
  filterTitle: '',
  filterPrice: '',
  filterContent: '',
  filterFeatures: '',
};

const AdminPackagesPage = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);

  const [filterPackages, setFilterPackages] = useState([]);
  const [filters, setFilters] = useState(initialState);

  const { selectedLanguage } = useContext(StatusContext);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData('/admin/packages');
        setPackages(data);
        setFilterPackages(data);
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

  async function deletePackage(id) {
    setIsLoading(true);
    try {
      const { date } = await deleteData(`/admin/packages/${id}`);
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
      .querySelector(`button[id='${name}'][name='startFilterPackages']`)
      .classList.remove('active');
    document
      .querySelector(`button[id='${name}'][name='cleanFilterPackages']`)
      .classList.add('active');
  };
  
  const handleFilterPackages = (filterOfPackage) => {
    const peremOfFilter = [];
    packages.map(item => {
      if (
        item[selectedLanguage]?.title
          .toString()
          .toLowerCase()
          .includes(filterOfPackage['filterTitle'].toLowerCase()) &&
        item[selectedLanguage]?.price
          .toString()
          .toLowerCase()
          .includes(filterOfPackage['filterPrice'].toLowerCase()) &&
        item[selectedLanguage]?.content
          .toString()
          .toLowerCase()
          .includes(filterOfPackage['filterContent'].toLowerCase()) &&
        item[selectedLanguage]?.features
          .join('; ')
          .toString()
          .toLowerCase()
          .toString()
          .includes(filterOfPackage['filterFeatures']) 
      ) {
        peremOfFilter.push(item);
      }
    });
    setCurrent(1);
    setFilterPackages(peremOfFilter);
  };

  const startFilterPackages = e => {
    e.preventDefault();
    handleFilterPackages(filters);
  };

  const cleanFilterPackages = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    const deletedFilters = {
      ...filters,
      [id]: '',
    };
    setFilters(deletedFilters);
    document
      .querySelector(`button[id='${id}'][name='startFilterPackages']`)
      .classList.add('active');
    document
      .querySelector(`button[id='${id}'][name='cleanFilterPackages']`)
      .classList.remove('active');
    handleFilterPackages(deletedFilters);
  };

  const clearAllFilters = () => {
    setFilters(initialState);
    const listOfStartFilterPackages = document.querySelectorAll(
      `button[name='startFilterPackages']`,
    );
    listOfStartFilterPackages.forEach(item => item.classList.add('active'));

    const listOfCleanFilterPackages = document.querySelectorAll(
      `button[name='cleanFilterPackages']`,
    );
    listOfCleanFilterPackages.forEach(item => item.classList.remove('active'));
    setFilterPackages(packages);
  };

  const handleSearchOnEnter = e => {
    if (e.key == 'Enter') {
      startFilterPackages(e);
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
      <SEO title="Administration" description="Packages Administration" />
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
                    name="startFilterPackages"
                    onClick={e => startFilterPackages(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterTitle"
                    name="cleanFilterPackages"
                    onClick={e => {
                      cleanFilterPackages(e);
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterPrice"
                  placeholder="Price"
                  value={filters['filterPrice']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    className="active"
                    type="button"
                    id="filterPrice"
                    name="startFilterPackages"
                    onClick={e => startFilterPackages(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterPrice"
                    name="cleanFilterPackages"
                    onClick={e => {
                      cleanFilterPackages(e);
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterContent"
                  placeholder="Content"
                  value={filters['filterContent']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    className="active"
                    type="button"
                    id="filterContent"
                    name="startFilterPackages"
                    onClick={e => startFilterPackages(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterContent"
                    name="cleanFilterPackages"
                    onClick={e => {
                      cleanFilterPackages(e);
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              {!isLearnMore && (<>
              <TableHead>
                <input
                  type="text"
                  name="filterFeatures"
                  placeholder="Features"
                  value={filters['filterFeatures']}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    className="active"
                    type="button"
                    id="filterFeatures"
                    name="startFilterPackages"
                    onClick={e => startFilterPackages(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterFeatures"
                    name="cleanFilterPackages"
                    onClick={e => {
                      cleanFilterPackages(e);
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
               </> )}
              <TableHead>
                <IconBtn
                  type="button"
                  aria-label="Create packages"
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
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Content</TableHead>
              {!isLearnMore && (
                <>
                  <TableHead>Features</TableHead>
                </>
              )}
              <TableHead>Action</TableHead>
            </TableRow>
            {filterPackages.length > 0 &&
              !error &&
              filterPackages
                .slice((current - 1) * size, current * size)
                .map(it => (
                  <TableRow key={it._id}>
                    <TableData>{it[selectedLanguage]?.title}</TableData>
                    <TableData>{it[selectedLanguage]?.price}</TableData>
                    <TableData>{it[selectedLanguage]?.content}</TableData>
                    {!isLearnMore && (
                      <>
                        <TableData>
                          {it[selectedLanguage].features.join('; ')}
                        </TableData>
                      </>
                    )}
                    <TableData>
                      <IconBtn
                        type="button"
                        aria-label="Edit package"
                        onClick={e => {
                          openModal(e);
                        }}
                        data-modal="admin"
                        data-id={it._id}
                      >
                        <MdEdit size={15} />
                      </IconBtn>
                      <IconBtn
                        type="button"
                        aria-label="Delete package"
                        onClick={() => {
                          deletePackage(it._id);
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
          items={filterPackages}
          size={size}
          setSize={setSize}
          current={current}
          setCurrent={setCurrent}
        />
      </AdminContainer>
      <EditPackageModal selectedLanguage={selectedLanguage}/>
      <CreatePackageModal selectedLanguage={selectedLanguage}/>
    </>
  );
};

export default AdminPackagesPage;
