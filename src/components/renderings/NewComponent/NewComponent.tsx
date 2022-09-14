import React, { memo, FunctionComponent, useState } from 'react';
import { AnchorableField } from '../../../types/types';
import classNames from 'classnames/bind';
import styles from './NewComponent.module.scss';
import Api from '../../../interceptor/Api';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

type NewComponentFields = Partial<AnchorableField> & {};

export type NewComponentProps = {
  fields: NewComponentFields;
};

const NewComponent: FunctionComponent<NewComponentProps> = ({ fields }) => {
  const [postData, setPostData] = useState<any>({
    name: '',
    author: '',
    price: 300,
    rating: 0,
    description: '',
  });

  const state = useSelector((state: any) => state.login);

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
    console.log('postData-----', postData);
  };
  // const { message } = fields;
  return (
    <div className={cx('div-bg')}>
      <h2 className="text-center">Add Books</h2>
      <form action="" className="w-full h-full">
        <div className="lg:flex mt-5 lg:justify-around px-5">
          <input
            className="lg:w-1/3 w-1/2"
            type="text"
            placeholder="Book Name"
            name="name"
            value={postData.name}
            onChange={handleChange}
          />
          <input
            className="lg:w-1/3 w-1/2"
            type="text"
            placeholder="Book Author"
            name="author"
            value={postData.author}
            onChange={handleChange}
          />
        </div>

        <div className="lg:flex mt-5 lg:justify-around px-5">
          <input
            className="lg:w-1/3 w-1/2"
            type="number"
            placeholder="Book Catogery"
            name="rating"
            value={postData.rating}
            onChange={handleChange}
          />
          <input
            className="lg:w-1/3 w-1/2"
            type="text"
            placeholder="&#8377; Price"
            name="price"
            value={postData.price}
            onChange={handleChange}
          />
        </div>
        <div className="w-full lg:flex justify-center mt-5 mx-5">
          <textarea
            name="description"
            placeholder="Add Your Description"
            cols={60}
            rows={5}
            defaultValue={'Add Your Description ...'}
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <input
            onClick={() => post()}
            type="button"
            value="Post"
            className="bg-red-600 lg:w-64 w-full mx-5 my-5 py-1 lg:py-2 rounded"
          />
        </div>
      </form>
    </div>
  );
};

export default memo(NewComponent);
