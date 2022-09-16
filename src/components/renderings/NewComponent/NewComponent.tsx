import React, { memo, FunctionComponent, useState } from 'react';
import { AnchorableField } from '../../../types/types';
import classNames from 'classnames/bind';
import styles from './NewComponent.module.scss';
import Api from '../../../interceptor/Api';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation, useSearchParams } from 'react-router-dom';

const cx = classNames.bind(styles);

type NewComponentFields = Partial<AnchorableField> & {};

export type NewComponentProps = {
  fields: NewComponentFields;
};
// : FunctionComponent<NewComponentProps>
const NewComponent: FunctionComponent<NewComponentProps> = () => {
  const [postData, setPostData] = useState<any>({
    name: '',
    author: '',
    price: 0,
    rating: 0,
    description: '',
    category_id: 1,
  });

  const state = useSelector((state: any) => state.login);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log('----->>', location);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostData({ ...postData, [name]: value });
  };

  const post = async () => {
    await Api('/v1/books', {
      method: 'POST',
      headers: {
        authorization: state.authorization,
      },
      data: postData,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate('/dashbord');
  };

  return (
    <div className={`${cx('div-bg')} h-screen`}>
      <h2 className="text-center">Add Books</h2>
      <form action="" className="w-full h-full">
        <div className="flex lg:flex-col flex-row flex-wrap px-16">
          <input
            className="mx-10 my-2"
            type="text"
            placeholder="Book Name"
            name="name"
            value={postData.name}
            onChange={handleChange}
          />
          <input
            className="mx-10 my-2"
            type="text"
            placeholder="Book Author"
            name="author"
            value={postData.author}
            onChange={handleChange}
          />

          <input
            className="mx-10 my-2"
            type="number"
            placeholder="Book Catogery"
            name="rating"
            value={postData.rating}
            onChange={handleChange}
          />
          <input
            className="mx-10 my-2"
            type="text"
            placeholder="&#8377; Price"
            name="price"
            value={postData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="category_id"
            value={postData.category_id}
            className="bg-inherit border-none focus:outline-none active:scale-75 duration-500"
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="">
          <div className="w-full flex justify-center mt-5 h-1/2">
            <textarea
              className="w-1/2"
              name="description"
              placeholder="Add Your Description"
              // cols={60}
              // rows={5}
              defaultValue={'Add Your Description ...'}
            ></textarea>
          </div>
          <div className="m-auto w-full flex justify-center">
            <input
              onClick={() => post()}
              type="button"
              value="Post"
              className="bg-rose-600 w-1/2 lg:w-1/4 mt-5 py-3 border rounded-lg"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(NewComponent);
