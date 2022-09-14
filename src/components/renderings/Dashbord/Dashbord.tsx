import Api from '../../../interceptor/Api';
import styles from './Dashbord.module.scss';
import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnchorableField } from '../../../types/types';

import React, { memo, FunctionComponent, useState, useEffect } from 'react';

const cx = classNames.bind(styles);

type DashbordFields = Partial<AnchorableField> & {};

export type DashbordProps = {
  fields: DashbordFields;
};

const Dashbord: FunctionComponent<DashbordProps> = () => {
  const [resData, setResData] = useState([]);

  const [increment, setIncrement] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState<any>();
  const [searchName, setSearch] = useState<any>({
    search: '',
  });
  const [navData, setNavData] = useState<any>();

  const state = useSelector((state: any) => state.login);
  const navigate = useNavigate();

  const fetchData = () => {
    try {
      Api(
        `/v1/books?page=${increment}&per_page=${perPage}&q=${searchName.search}`,
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
      [name]: value,
    });
  };

  const handlePerPage = (e: any) => {
    setPerPage(e.target.value);
  };

  const selectRow = async (id: number) => {
    navigate('/book', { state: { Api: id } });
  };

  useEffect(() => {
    fetchData();
  }, [increment, searchName, perPage]);

  console.log('render');

  return (
    <div className={cx('div-bg')}>
      <h1>Book List</h1>
      <input
        className="lg:float-right py-0 px-0 indent-2.5 lg:w-1/4 sm:w-full"
        type="text"
        name="search"
        value={searchName.search}
        onChange={handleChange}
      ></input>
      <p>{searchName.search}</p>
      <table className="w-full border-separate border-spacing-y-1.5">
        <thead>
          <tr className="bg-slate-600 text-white leading-8">
            <th>Name</th>
            <th>Category Name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Name"
                className="w-full py-0 px-0 indent-2.5"
                name="Name"
                // value={''}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Category Name"
                className="w-full py-0 px-0 indent-2.5"
                name="Category"
                // value={''}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Author"
                className="w-full py-0 px-0 indent-2.5"
                name="Author"
                // value={''}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Price"
                className="w-full py-0 px-0 indent-2.5"
                name="Price"
                // value={''}
              />
            </td>
          </tr>
        </thead>

        <tbody>
          {resData.map((data: any, index: number) => {
            return (
              <tr
                key={data.id}
                className=" odd:bg-indigo-200 even:bg-indigo-300 w-full leading-8	cursor-pointer"
                onClick={() => selectRow(data.id)}
              >
                <td className="text-left">{data.name}</td>
                <td className="text-left">{data.category_name}</td>
                <td className="text-left">{data.author}</td>
                <td className="text-left"> &#8377; &nbsp;{data.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
