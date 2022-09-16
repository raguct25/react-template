import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Api from '../../interceptor/Api';
import { useSelector } from 'react-redux';
import bookimg from '../../assests/images/book.jpeg';
import { useParams } from 'react-router-dom';
import spinner from '/home/yavar/React/Project/react-template/src/assests/images/refresh.svg';

const Book = () => {
  const location: any = useLocation();
  console.log(location);

  const [liked, setLiked] = useState(0);
  const [disLiked, setDisLiked] = useState(0);
  const [comment, setComment] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [replay, setReplay] = useState<string>();
  const [replay1, setReplay1] = useState<string>();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<any>();
  const state = useSelector((state: any) => state.login);

  const { id } = useParams();

  const fetchData = async () => {
    try {
      await Api(`/v1/books/${id}`, {
        method: 'GET',
        headers: {
          authorization: state.authorization,
        },
      }).then((res) => {
        setData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const like = () => {
    setLiked(liked + 1);
  };

  const disLike = () => {
    setDisLiked(disLiked + 1);
  };

  const toggell = () => {
    setPopUp(!popUp);
  };

  const sent = () => {
    setReplay1(replay);
  };

  const inc = () => {
    // setId(id + 1);
  };
  const dec = () => {
    // setId(id - 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={''}>
      <nav className="">
        <h2 className="text-center">Title:{data?.name}</h2>
      </nav>
      <div className="lg:flex">
        <div className=" lg:w-1/3 lg:mr-10">
          {!loading && (
            <div className="rounded-lg shadow-[0px_22px_90px_0px_rgba(0,0,200,0.3)] hover:duration-700">
              <img className="m-auto" src={bookimg} alt={data?.name} />
            </div>
          )}
          {loading && (
            <div className="flex justify-center items-center">
              <img
                className="animate-spin w-8"
                src={spinner}
                alt="Loading Icon"
              />
            </div>
          )}

          <p className="text-center mt-2">
            rating <strong>{data?.rating}</strong>
          </p>

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="35"
              height="35"
              style={{
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',
                imageRendering: 'auto',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              }}
              viewBox="0 0 6.827 6.827"
            >
              <path
                style={{
                  fill: `${data?.rating >= 0.5 && '#e68100'}`,
                  fillRule: 'nonzero',
                }}
                d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
              />
              <path
                style={{
                  fill: `${data?.rating >= 1.0 && '#e68100'}`,
                  fillRule: 'nonzero',
                }}
                d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923V.98z"
              />
              <path style={{ fill: 'none' }} d="M0 0h6.827v6.827H0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="35"
              height="35"
              style={{
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',
                imageRendering: 'auto',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              }}
              viewBox="0 0 6.827 6.827"
            >
              <path
                style={{
                  fill: `${data?.rating >= 1.5 && '#e68100'}`,
                  fillRule: 'nonzero',
                }}
                d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
              />
              <path
                style={{
                  fill: `${data?.rating >= 2.0 && '#e68100'}`,
                  fillRule: 'nonzero',
                }}
                d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923V.98z"
              />
              <path style={{ fill: 'none' }} d="M0 0h6.827v6.827H0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="35"
              height="35"
              style={{
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',
                imageRendering: 'auto',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              }}
              viewBox="0 0 6.827 6.827"
            >
              <path
                style={{
                  fill: `${data?.rating >= 2.5 && '#e68100'}`,
                  fillRule: 'nonzero',
                }}
                d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
              />
              <path
                style={{
                  fill: `${data?.rating >= 3.0 && '#e68100'}`,
                  fillRule: 'nonzero',
                }}
                d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923V.98z"
              />
              <path style={{ fill: 'none' }} d="M0 0h6.827v6.827H0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="35"
              height="35"
              style={{
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',
                imageRendering: 'auto',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              }}
              viewBox="0 0 6.827 6.827"
            >
              <path
                style={{
                  fill: `${data?.rating >= 3.5 && '#e68100'}`,
                  fillRule: 'nonzero',
                }}
                d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
              />
              <path
                style={{
                  fill: `${data?.rating >= 4.0 && '#e68100'}`,
                  fillRule: 'nonzero',
                }}
                d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923V.98z"
              />
              <path style={{ fill: 'none' }} d="M0 0h6.827v6.827H0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="35"
              height="35"
              style={{
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',
                imageRendering: 'auto',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              }}
              viewBox="0 0 6.827 6.827"
            >
              <path
                style={{
                  fill: `${data?.rating >= 4.5 && '#e68100'}`,
                  fillRule: 'nonzero',
                }}
                d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
              />
              <path
                style={{
                  fill: `${data?.rating >= 5.0 && '#e68100'}`,
                  fillRule: 'nonzero',
                }}
                d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923V.98z"
              />
              <path style={{ fill: 'none' }} d="M0 0h6.827v6.827H0z" />
            </svg>
          </div>
        </div>
        {!loading && (
          <div className="lg:flex lg:justify-between bg-indigo-100 rounded-lg lg:w-2/3 relative">
            <div className="lg:p-6 p-4">
              <p>
                <strong>Book Name : </strong> {data?.name}
              </p>
              <p>
                <strong> Book Author :</strong> {data?.author}
              </p>
              <p>
                <strong>Category : </strong> {data?.category_name}
              </p>
              <p>
                <strong>Price : {data?.price}</strong>
              </p>
              <p>
                <strong>Description :</strong>
                {data?.description}
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                neque quidem sequi quam saepe. Quo ut odit voluptatem repellat
                repudiandae ducimus incidunt minus molestiae consequuntur
                corporis delectus, ipsam, voluptas blanditiis.
              </p>
            </div>

            <div className="flex flex-row lg:flex-col m-auto lg:m-0 lg:pr-2">
              {/* like svg */}
              <button className="lg:h-1/3 active:scale-75 duration-500">
                <svg
                  className=" "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  height="40"
                  width="40"
                  onClick={() => like()}
                >
                  <path
                    fill="red"
                    d="M27 11h-8.52L19 9.8A6.42 6.42 0 0 0 13 1a1 1 0 0 0-.93.63L8.32 11H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18.17a3 3 0 0 0 2.12-.88l3.83-3.83a3 3 0 0 0 .88-2.12V14a3 3 0 0 0-3-3zM4 28V14a1 1 0 0 1 1-1h3v16H5a1 1 0 0 1-1-1zm24-3.83a1 1 0 0 1-.29.71l-3.83 3.83a1.05 1.05 0 0 1-.71.29H10V12.19l3.66-9.14a4.31 4.31 0 0 1 3 1.89 4.38 4.38 0 0 1 .44 4.12l-1 2.57A1 1 0 0 0 17 13h10a1 1 0 0 1 1 1z"
                    data-name="thumb up android app aplication phone"
                  />
                </svg>
                <p className="text-center">{liked}</p>
              </button>

              {/* disLike */}
              <button className="lg:h-1/3 active:scale-75 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  height="40"
                  width="40"
                  onClick={() => disLike()}
                >
                  <path
                    d="m29.12 5.71-3.83-3.83A3 3 0 0 0 23.17 1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h3.32l3.75 9.37A1 1 0 0 0 13 31a6.42 6.42 0 0 0 6-8.8l-.52-1.2H27a3 3 0 0 0 3-3V7.83a3 3 0 0 0-.88-2.12zM4 18V4a1 1 0 0 1 1-1h3v16H5a1 1 0 0 1-1-1zm24 0a1 1 0 0 1-1 1H17a1 1 0 0 0-.93 1.37l1 2.57a4.38 4.38 0 0 1-.44 4.12 4.31 4.31 0 0 1-3 1.89L10 19.81V3h13.17a1 1 0 0 1 .71.29l3.83 3.83a1 1 0 0 1 .29.71z"
                    data-name="thumb down android app aplication phone"
                  />
                </svg>
                <p className="text-center">{disLiked}</p>
              </button>

              {/* feedback */}
              <button
                className={`lg:h-1/3 ${
                  popUp && `relative`
                } focus:scale-75 duration-500`}
              >
                <svg
                  className="absolute"
                  onClick={() => toggell()}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 340 340"
                  height="40"
                  width="40"
                >
                  <path
                    d="M145.457 106.94h163.055a20.113 20.113 0 0 1 20.112 20.112v125.283a20.113 20.113 0 0 1-20.112 20.112h-28.576l8.354 32.822a3.7 3.7 0 0 1-5.473 4.088l-58.492-34.827a14.788 14.788 0 0 0-7.57-2.083h-71.3a20.112 20.112 0 0 1-20.112-20.112V127.052a20.112 20.112 0 0 1 20.114-20.112z"
                    style={{ fill: '#88b0ea' }}
                  />
                  <path
                    d="M125.345 127.052v77.368h111.416a26.993 26.993 0 0 0 26.993-26.992V106.94h-118.3a20.112 20.112 0 0 0-20.109 20.112z"
                    style={{ fill: '#648ecc' }}
                  />
                  <path
                    d="M232.191 26.072H31.488a20.113 20.113 0 0 0-20.113 20.112v125.283a20.113 20.113 0 0 0 20.113 20.112h28.576L51.709 224.4a3.7 3.7 0 0 0 5.473 4.088l58.492-34.827a14.8 14.8 0 0 1 7.57-2.083h108.947a20.112 20.112 0 0 0 20.109-20.111V46.184a20.112 20.112 0 0 0-20.109-20.112z"
                    style={{ fill: '#ffd071' }}
                  />
                  <path
                    d="M138.965 109.552c-.09 5.258-7.911 5.257-8 0 .09-5.258 7.911-5.252 8 0zM103.51 109.552c-.09 5.258-7.911 5.257-8 0 .09-5.258 7.911-5.252 8 0zM174.42 109.552c-.089 5.258-7.911 5.257-8 0 .09-5.258 7.911-5.252 8 0z"
                    style={{ fill: '#fff' }}
                  />
                  <path
                    d="M290.5 317.928a3.99 3.99 0 0 1-2.046-.564l-68.722-40.918h-74.27a24.138 24.138 0 0 1-24.112-24.111v-37.3c.1-5.241 7.9-5.275 8 0v37.3a16.129 16.129 0 0 0 16.112 16.111h75.37a4 4 0 0 1 2.047.564l61.359 36.534-8.173-32.111a4.025 4.025 0 0 1 3.876-4.987h28.576a16.13 16.13 0 0 0 16.112-16.111V127.052a16.13 16.13 0 0 0-16.112-16.112H252.3a4 4 0 0 1 0-8h56.209a24.139 24.139 0 0 1 24.112 24.112v125.283a24.138 24.138 0 0 1-24.112 24.111h-23.428l9.29 36.495a4.028 4.028 0 0 1-3.871 4.987z"
                    style={{ fill: '#383a49' }}
                  />
                  <path
                    d="M49.505 237.061a4.028 4.028 0 0 1-3.876-4.987l9.289-36.5H31.487a24.138 24.138 0 0 1-24.111-24.107V46.185a24.139 24.139 0 0 1 24.111-24.113h200.7A24.14 24.14 0 0 1 256.3 46.185v125.282a24.139 24.139 0 0 1-24.113 24.112H120.273L51.552 236.5a4 4 0 0 1-2.047.561zM31.487 30.072a16.13 16.13 0 0 0-16.111 16.113v125.282a16.13 16.13 0 0 0 16.111 16.112h28.576a4.025 4.025 0 0 1 3.876 4.986l-8.172 32.112 61.359-36.534a3.987 3.987 0 0 1 2.047-.564H232.19a16.13 16.13 0 0 0 16.11-16.112V46.185a16.131 16.131 0 0 0-16.11-16.113z"
                    style={{ fill: '#383a49' }}
                  />
                </svg>
                <p className="text-center">{comment}</p>
              </button>
            </div>
            {/* popup */}
            <div
              className={`${
                popUp ? 'translate-x-0' : 'translate-x-[50rem]'
              } absolute lg:full w-full h-full bg-white border rounded-lg top-0 transition duration-700 ease-in-out transform-gpu shadow-[0px_22px_90px_0px_rgba(0,0,200,0.3)]`}
            >
              <div className="flex justify-between mt-3 mx-5">
                <h1>Comment</h1>
                <button className="float-right" onClick={() => toggell()}>
                  <span className="font-bold">X</span>
                </button>
              </div>
              <hr />
              <div className="p-2">
                <p>{replay1}</p>
              </div>
              <div className="flex absolute inset-x-0 bottom-0 w-full justify-center">
                <div className="">
                  <input
                    className="border rounded-lg mr-2 mb-2"
                    placeholder="Add Comment"
                    value={replay}
                    type="text"
                    onChange={(e) => setReplay(e.target.value)}
                  />
                </div>
                <svg
                  onClick={() => sent()}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                >
                  <path
                    d="M21.707 2.293a1 1 0 0 0-1.069-.225l-18 7a1 1 0 0 0 .145 1.909l8.379 1.861 1.862 8.379a1 1 0 0 0 .9.78L14 22a1 1 0 0 0 .932-.638l7-18a1 1 0 0 0-.225-1.069zm-7.445 15.275L13.1 12.319l2.112-2.112a1 1 0 0 0-1.414-1.414L11.681 10.9 6.432 9.738l12.812-4.982z"
                    style={{ fill: '#1c1b1e' }}
                    data-name="Share"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
        {loading && (
          <div className="border border-blue-100 shadow rounded-md p-4 max-w-lg w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <div className="w-1/3 m-auto">
          <button className="lg:mr-5 float-left active:scale-75 duration-500">
            <svg
              onClick={() => inc()}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
            </svg>
          </button>
          <button className="lg:ml-5 float-right active:scale-75 duration-500">
            <svg
              onClick={() => dec()}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Book;
