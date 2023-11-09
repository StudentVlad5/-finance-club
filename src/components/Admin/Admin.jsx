import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdEdit, MdAddCard, MdDone } from 'react-icons/md';
import { openModalWindow } from 'hooks/modalWindow';
import { addModal } from 'redux/modal/operation';
import { addReload } from 'redux/reload/slice';
import { reloadValue } from 'redux/reload/selectors';
import { logOut } from 'redux/auth/operations';
import { fetchData, deleteData } from 'services/APIservice';
import { getFromStorage } from 'services/localStorService';
import { PaginationBlock } from 'helpers/Pagination/Pagination';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { EditModal } from 'components/Admin/Modal/EditModal';
import { CreateModal } from 'components/Admin/Modal/CreateModal';
// import logo from 'images/';
import {
  AdminContainer,
  BtnWrapper,
  Heading,
  IconBtn,
  LearnMoreBtn,
  LogoutBtn,
  LogoutIcon,
  LogoutLabel,
  Table,
  TableData,
  TableFilter,
  TableHead,
  TableRow,
  ClearFiltersBtn,
} from './Admin.styled';

export const Admin = () => {
  const [positions, setPositions] = useState([]);
  const [lastArticle, setLastArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);

  const [filterPositions, setFilterPositions] = useState([]);
  const [filterProduct, setFilterProduct] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterName, setFilterName] = useState('');
  const [filterLatinName, setFilterLatinName] = useState('');
  const [filterAlcohol, setFilterAlcohol] = useState('');
  const [filterDetails, setFilterDetails] = useState('');
  const [filterSize, setFilterSize] = useState('');
  const [filterUnit, setFilterUnit] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [filterCurrency, setFilterCurrency] = useState('');
  const [filterImage, setFilterImage] = useState('');
  const [filterActive, setFilterActive] = useState('');
  const [filterAdmin, setFilterAdmin] = useState('');

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData('/admin');
        setPositions(data);
        setFilterPositions(data);
        const max = Math.max.apply(
          Math,
          data.flatMap(product => product.article),
        );
        setLastArticle(max);
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

  async function deletePosition(id) {
    setIsLoading(true);
    try {
      const { date } = await deleteData(`/admin/${id}`);
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
      case 'filterProduct':
        setFilterProduct(e.currentTarget.value);
        break;
      case 'filterCategory':
        setFilterCategory(e.currentTarget.value);
        break;
      case 'filterName':
        setFilterName(e.currentTarget.value);
        break;
      case 'filterLatinName':
        setFilterLatinName(e.currentTarget.value);
        break;
      case 'filterAlcohol':
        setFilterAlcohol(e.currentTarget.value);
        break;
      case 'filterDetails':
        setFilterDetails(e.currentTarget.value);
        break;
      case 'filterSize':
        setFilterSize(e.currentTarget.value);
        break;
      case 'filterUnit':
        setFilterUnit(e.currentTarget.value);
        break;
      case 'filterPrice':
        setFilterPrice(e.currentTarget.value);
        break;
      case 'filterCurrency':
        setFilterCurrency(e.currentTarget.value);
        break;
      case 'filterImage':
        setFilterImage(e.currentTarget.value);
        break;
      case 'filterActive':
        setFilterActive(e.currentTarget.value);
        break;
      case 'filterAdmin':
        setFilterAdmin(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const startFilterPositions = e => {
    e.preventDefault();
    const peremOfFilter = [];
    // eslint-disable-next-line array-callback-return
    positions.map(item => {
      if (
        item.product.toString().toLowerCase().includes(filterProduct) &&
        item.category.toString().toLowerCase().includes(filterCategory) &&
        item.name.toString().toLowerCase().includes(filterName) &&
        item.latin_name.toString().toLowerCase().includes(filterLatinName) &&
        item.alcohol
          .join(',')
          .toString()
          .toLowerCase()
          .includes(filterAlcohol) &&
        item.details
          .join(',')
          .toString()
          .toLowerCase()
          .includes(filterDetails) &&
        item.size.value.toString().toLowerCase().includes(filterSize) &&
        item.size.mesure.toString().toLowerCase().includes(filterUnit) &&
        item.price.toString().toLowerCase().includes(filterPrice) &&
        item.currency.toString().toLowerCase().includes(filterCurrency) &&
        item.images.toString().toLowerCase().includes(filterImage) &&
        item.active.toString().toLowerCase().includes(filterActive) &&
        item.admin.toString().toLowerCase().includes(filterAdmin)
      ) {
        peremOfFilter.push(item);
      }
    });

    setFilterPositions(peremOfFilter);
  };

  const cleanFilterPositions = e => {
    e.preventDefault();
    let filterPr = '';
    let filterCa = '';
    let filterN = '';
    let filterLn = '';
    let filterA = '';
    let filterD = '';
    let filterS = '';
    let filterU = '';
    let filterP = '';
    let filterC = '';
    let filterI = '';
    let filterAct = '';
    let filterAd = '';

    e.currentTarget.name === 'clearFilterProduct'
      ? setFilterProduct(filterPr)
      : (filterPr = filterProduct);
    e.currentTarget.name === 'clearFilterCategory'
      ? setFilterCategory(filterCa)
      : (filterCa = filterCategory);
    e.currentTarget.name === 'clearFilterName'
      ? setFilterName(filterN)
      : (filterN = filterName);
    e.currentTarget.name === 'clearFilterLatinName'
      ? setFilterLatinName(filterLn)
      : (filterLn = filterLatinName);
    e.currentTarget.name === 'clearFilterAlcohol'
      ? setFilterAlcohol(filterA)
      : (filterA = filterAlcohol);
    e.currentTarget.name === 'clearFilterDetails'
      ? setFilterDetails(filterD)
      : (filterD = filterDetails);
    e.currentTarget.name === 'clearFilterSize'
      ? setFilterSize(filterS)
      : (filterS = filterSize);
    e.currentTarget.name === 'clearFilterUnit'
      ? setFilterUnit(filterU)
      : (filterS = filterUnit);
    e.currentTarget.name === 'clearFilterPrice'
      ? setFilterPrice(filterP)
      : (filterP = filterPrice);
    e.currentTarget.name === 'clearFilterCurrency'
      ? setFilterCurrency(filterC)
      : (filterC = filterCurrency);
    e.currentTarget.name === 'clearFilterImage'
      ? setFilterCurrency(filterI)
      : (filterI = filterImage);
    e.currentTarget.name === 'clearFilterActive'
      ? setFilterCurrency(filterAct)
      : (filterAct = filterActive);
    e.currentTarget.name === 'clearFilterAdmin'
      ? setFilterCurrency(filterAd)
      : (filterAd = filterAdmin);

    const peremOfFilter = [];
    positions.map(item => {
      if (
        item.product?.toString().toLowerCase().includes(filterPr) &&
        item.category?.toString().toLowerCase().includes(filterCa) &&
        item.name?.toString().toLowerCase().includes(filterN) &&
        item.latin_name?.toString().toLowerCase().includes(filterLn) &&
        item.alcohol?.toString().toLowerCase().includes(filterA) &&
        item.details?.toString().toLowerCase().includes(filterD) &&
        item.size?.value?.toString().toLowerCase().includes(filterS) &&
        item.size?.mesure?.toString().toLowerCase().includes(filterU) &&
        item.price?.toString().toLowerCase().includes(filterP) &&
        item.currency?.toString().toLowerCase().includes(filterC) &&
        item.images?.toString().toLowerCase().includes(filterI) &&
        item.active?.toString().toLowerCase().includes(filterAct) &&
        item.admin?.toString().toLowerCase().includes(filterAd)
      ) {
        peremOfFilter.push(item);
      }
      return peremOfFilter;
    });

    setFilterPositions(peremOfFilter);
  };

  const clearAllFilters = () => {
    reload === true ? dispatch(addReload(false)) : dispatch(addReload(true));
    setFilterProduct('');
    setFilterCategory('');
    setFilterName('');
    setFilterLatinName('');
    setFilterAlcohol('');
    setFilterDetails('');
    setFilterSize('');
    setFilterUnit('');
    setFilterPrice('');
    setFilterCurrency('');
    setFilterImage('');
    setFilterActive('');
    setFilterAdmin('');
  };

  const handleSearchOnEnter = e => {
    // eslint-disable-next-line eqeqeq
    if (e.key == 'Enter') {
      setPositions(e);
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
      setTimeout(() => openModalWindow(e, null), 500);
    }
  };

  // table pagination
  const [perPage] = useState(20);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(
    getFromStorage('page') ? getFromStorage('page') : 1,
  );

  return (
    <>
      <AdminContainer>
        <Heading>
          <NavLink to={'/'}>
            {/* <img src={logo} width={42} height={42} alt="Logo" /> */}
          </NavLink>
          <LogoutBtn aria-label="logout" onClick={() => dispatch(logOut())}>
            <LogoutIcon />
            <LogoutLabel>Log Out</LogoutLabel>
          </LogoutBtn>
        </Heading>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        <div style={{ display: 'flex' }}>
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
                  name="filterProduct"
                  placeholder="Product"
                  value={filterProduct}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterProduct"
                    onClick={e => startFilterPositions(e)}
                  >
                    <MdDone />
                  </button>
                  <button
                    type="button"
                    id="filterProduct"
                    name="clearFilterProduct"
                    onClick={e => {
                      cleanFilterPositions(e);
                      setFilterProduct('');
                    }}
                  >
                    <MdClose />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterCategory"
                  placeholder="Category"
                  value={filterCategory}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterCategory"
                    onClick={e => startFilterPositions(e)}
                  >
                    <MdDone />
                  </button>
                  <button
                    type="button"
                    id="filterCategory"
                    name="clearFilterCategory"
                    onClick={e => {
                      cleanFilterPositions(e);
                      setFilterCategory('');
                    }}
                  >
                    <MdClose />
                  </button>
                </BtnWrapper>
              </TableHead>
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
                    onClick={e => startFilterPositions(e)}
                  >
                    <MdDone />
                  </button>
                  <button
                    type="button"
                    id="filterName"
                    name="clearFilterName"
                    onClick={e => {
                      cleanFilterPositions(e);
                      setFilterName('');
                    }}
                  >
                    <MdClose />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterPrice"
                  placeholder="Price"
                  value={filterPrice}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterPrice"
                    onClick={e => startFilterPositions(e)}
                  >
                    <MdDone />
                  </button>
                  <button
                    type="button"
                    id="filterPrice"
                    name="clearFilterPrice"
                    onClick={e => {
                      cleanFilterPositions(e);
                      setFilterPrice('');
                    }}
                  >
                    <MdClose />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterCurrency"
                  placeholder="Currency"
                  value={filterCurrency}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterCurrency"
                    onClick={e => startFilterPositions(e)}
                  >
                    <MdDone />
                  </button>
                  <button
                    type="button"
                    id="filterCurrency"
                    name="clearFilterCurrency"
                    onClick={e => {
                      cleanFilterPositions(e);
                      setFilterCurrency('');
                    }}
                  >
                    <MdClose />
                  </button>
                </BtnWrapper>
              </TableHead>
              {!isLearnMore && (
                <>
                  <TableHead>
                    <input
                      type="text"
                      name="filterAlcohol"
                      placeholder="Alcohol"
                      value={filterAlcohol}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterAlcohol"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterAlcohol"
                        name="clearFilterAlcohol"
                        onClick={e => {
                          cleanFilterPositions(e);
                          setFilterAlcohol('');
                        }}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterDetails"
                      placeholder="Details"
                      value={filterDetails}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterDetails"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterDetails"
                        name="clearFilterDetails"
                        onClick={e => {
                          cleanFilterPositions(e);
                          setFilterDetails('');
                        }}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterLatinName"
                      placeholder="LatinName"
                      value={filterLatinName}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterLatinName"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterLatinName"
                        name="clearFilterLatinName"
                        onClick={e => {
                          cleanFilterPositions(e);
                          setFilterLatinName('');
                        }}
                      >
                        <MdClose />
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
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterImage"
                        name="clearFilterImage"
                        onClick={e => {
                          cleanFilterPositions(e);
                          setFilterImage('');
                        }}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterSize"
                      placeholder="Size"
                      value={filterSize}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterSize"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterSize"
                        name="clearFilterSize"
                        onClick={e => {
                          cleanFilterPositions(e);
                          setFilterSize('');
                        }}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterUnit"
                      placeholder="Measure"
                      value={filterUnit}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterUnit"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterUnit"
                        name="clearFilterUnit"
                        onClick={e => {
                          cleanFilterPositions(e);
                          setFilterUnit('');
                        }}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterActive"
                      placeholder="Active"
                      value={filterActive}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterActive"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterActive"
                        name="clearFilterActive"
                        onClick={e => {
                          cleanFilterPositions(e);
                          setFilterActive('');
                        }}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterAdmin"
                      placeholder="Admin"
                      value={filterAdmin}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterAdmin"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterAdmin"
                        name="clearFilterAdmin"
                        onClick={e => {
                          cleanFilterPositions(e);
                          setFilterAdmin('');
                        }}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                </>
              )}
              <TableHead>
                <IconBtn
                  type="button"
                  aria-label="Create position"
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
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Currency</TableHead>
              {!isLearnMore && (
                <>
                  <TableHead>Alcohol</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>LatinName</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Measure</TableHead>
                  <TableHead>Active</TableHead>
                  <TableHead>Admin</TableHead>
                </>
              )}
              <TableHead>Action</TableHead>
            </TableRow>
            {filterPositions.length > 0 &&
              !error &&
              filterPositions
                .slice((current - 1) * size, current * size)
                .map(position => (
                  <TableRow key={position._id}>
                    <TableData>{position.product}</TableData>
                    <TableData>{position.category}</TableData>
                    <TableData>{position.name}</TableData>
                    <TableData>{position.price}</TableData>
                    <TableData>{position.currency}</TableData>
                    {!isLearnMore && (
                      <>
                        <TableData>{position.alcohol.join(',')}</TableData>
                        <TableData>{position.details.join(',')}</TableData>
                        <TableData>{position.latin_name}</TableData>
                        <TableData>
                          {position.images && position.images !== 'none'
                            ? 'yes'
                            : 'no'}
                        </TableData>
                        <TableData>{position.size.value}</TableData>
                        <TableData>{position.size.mesure}</TableData>
                        <TableData>{position.active.toString()}</TableData>
                        <TableData>{position.admin}</TableData>
                      </>
                    )}
                    <TableData>
                      <IconBtn
                        type="button"
                        aria-label="Edit position"
                        onClick={e => {
                          openModal(e);
                        }}
                        data-modal="admin"
                        data-id={position._id}
                      >
                        <MdEdit size={15} />
                      </IconBtn>
                      <IconBtn
                        type="button"
                        aria-label="Delete position"
                        onClick={() => {
                          deletePosition(position._id);
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
          items={filterPositions}
          size={size}
          setSize={setSize}
          current={current}
          setCurrent={setCurrent}
        />
      </AdminContainer>
      <EditModal />
      <CreateModal lastArticle={lastArticle} />
    </>
  );
};
