import Api from '../../../interceptor/Api';
import styles from './Dashbord.module.scss';
import spinner from '/home/yavar/React/Project/react-template/src/assests/images/refresh.svg';
import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnchorableField } from '../../../types/types';
import { useSearchParams } from 'react-router-dom';

import React, { memo, FunctionComponent, useState, useEffect } from 'react';

const cx = classNames.bind(styles);

type DashbordFields = Partial<AnchorableField> & {};

export type DashbordProps = {
  fields: DashbordFields;
};

const Dashbord: FunctionComponent<DashbordProps> = () => {
  const [resData, setResData] = useState<any>([]);

  const [increment, setIncrement] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [searchName, setSearch] = useState<any>({
    gsearch: '',
    name: '',
    price: '',
    category: '',
    author: '',
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const state = useSelector((state: any) => state.login);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      await Api(
        `/v1/books?page=${increment}&per_page=${perPage}&q=${searchName.gsearch}&name=${searchName.name}&price=${searchName.price}&author=${searchName.author}`,
        {
          method: 'GET',
          headers: {
            authorization: state.authorization,
          },
        },
      ).then((res) => {
        setResData(res.data.books);
        setPage(res.data.pagination);
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const remove = async (rmv_id: number) => {
    await Api(`/v1/books/${rmv_id}`, {
      method: 'DELETE',
      headers: {
        authorization: state.authorization,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    fetchData();
  };

  const inc = () => {
    setIncrement(increment + 1);
  };
  const dec = () => {
    setIncrement(increment - 1);
  };
  const firstPage = () => {
    setIncrement(1);
  };
  const lastPage = () => {
    setIncrement(page.total_pages);
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setSearch({
      ...searchName,
      [name]: value,
    });
  };

  const handlePerPage = (e: any) => {
    setPerPage(e.target.value);
  };

  const selectRow = async (id: number) => {
    navigate(`/book/${id}`);
  };

  const edit = async (id: number) => {
    console.log('clicked');
    navigate(`/analytics`, { state: { Api: id } });
  };

  useEffect(() => {
    fetchData();
  }, [increment, searchName, perPage]);

  console.log('render');

  return (
    <div className={cx('div-bg')}>
      <h1>Book List</h1>
      <input
        className="lg:float-left py-0 px-0 indent-2.5 lg:w-1/4 sm:w-full"
        type="text"
        name="gsearch"
        placeholder="Search"
        value={searchName.search}
        onChange={handleChange}
      ></input>
      <table className="w-full border-separate border-spacing-y-1.5">
        <thead>
          <tr className="bg-slate-600 text-white leading-8">
            <th>Name</th>
            <th>Category Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Edit</th>
          </tr>
          <tr>
            <td>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Name"
                className="w-full py-0 px-0 indent-2.5"
                name="name"
                value={searchName.name}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Category Name"
                className="w-full py-0 px-0 indent-2.5"
                name="category"
                value={searchName.category}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Author"
                className="w-full py-0 px-0 indent-2.5"
                name="author"
                value={searchName.author}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Price"
                className="w-full py-0 px-0 indent-2.5"
                name="price"
                value={searchName.price}
              />
            </td>
          </tr>
        </thead>

        <tbody className="w-full">
          {!loading &&
            resData.map((data: any, index: number) => {
              return (
                <tr
                  key={data.id}
                  className=" odd:bg-indigo-200 even:bg-indigo-300 w-full leading-8	cursor-pointer"
                >
                  <td onClick={() => selectRow(data.id)} className="text-left">
                    {data.name}
                  </td>
                  <td onClick={() => selectRow(data.id)} className="text-left">
                    {data.category_name}
                  </td>
                  <td onClick={() => selectRow(data.id)} className="text-left">
                    {data.author}
                  </td>
                  <td onClick={() => selectRow(data.id)} className="text-left">
                    &#8377; &nbsp;{data.price}
                  </td>
                  <td>
                    <span className="flex">
                      <svg
                        onClick={() => remove(data.id)}
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 7a1 1 0 0 1 1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 1 1 2 0v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1z"
                          fill="red"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM14 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM4 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM8 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"
                          fill="red"
                        />
                      </svg>
                      &nbsp;
                      <svg
                        onClick={() => edit(data.id)}
                        className="ml-1"
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.241 3.83a1 1 0 0 1-.07 1.412L6.866 14.565 6.387 16h1.226l10.714-9.74a1 1 0 0 1 1.346 1.48l-11 10A1 1 0 0 1 8 18H5a1 1 0 0 1-.949-1.316l1-3a1 1 0 0 1 .278-.426l10.5-9.5a1 1 0 0 1 1.412.071zM4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
                          fill="green"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.793 3.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414zM15.293 9.707l-2.5-2.5 1.414-1.414 2.5 2.5-1.414 1.414z"
                          fill="green"
                        />
                      </svg>
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {loading && (
        <div className="w-full">
          <img
            className="animate-spin w-8 m-auto"
            src={spinner}
            alt="Loading ..."
          />
        </div>
      )}
      <div className="mt-5">
        <button
          className="py-2 px-4 hover:bg-indigo-200 active:scale-75 duration-500"
          onClick={() => firstPage()}
        >
          &laquo;
        </button>
        <button
          disabled={increment < 2}
          className="py-2 px-4 hover:bg-indigo-200 active:scale-75 duration-500"
          onClick={() => dec()}
        >
          {page?.prev_page === 0 ? '' : page?.prev_page}
        </button>
        <button className="py-2 font-bold text-white px-4 bg-indigo-400 m-2 active:scale-75 duration-500">
          {page?.current_page}
        </button>
        <button
          disabled={increment > page?.total_pages - 1}
          className="py-2 px-4 hover:bg-indigo-200 active:scale-75 duration-500"
          onClick={() => inc()}
        >
          {page?.next_page}
        </button>
        <button
          className="py-2 px-4 hover:bg-indigo-200 active:scale-75 duration-500"
          onClick={() => lastPage()}
        >
          &raquo;
        </button>
        <span>Per Page</span>
        <select
          name="selected"
          value={perPage}
          className="bg-inherit border-none focus:outline-none active:scale-75 duration-500"
          onChange={handlePerPage}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default Dashbord;
