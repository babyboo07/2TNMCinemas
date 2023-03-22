import { Carousel } from "react-carousel-minimal";

const Home = () => {
  const data = [
    {
      image: "https://cgv.netlify.app/static/media/CGV_carousel_02.23d8cb23.jpg",
    },
    {
      image: "https://cgv.netlify.app/static/media/CGV_carousel_01.3e44719b.jpg",
    },
    {
      image: "https://cgv.netlify.app/static/media/CGV_carousel_03.c50b4712.jpg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mb-2 md:border-b py-2">
        <div className="container mx-auto">
          <div className="flex justify-between gap-2">
            <img
              className="w-32 ml-2"
              src="http://img.cgv.co.kr/R2014/images/title/h1_cgv.png"
              alt="Logo"
            />
            <ul className="hidden md:flex">
              <li className="float-left">
                <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out">
                  <span className="text-gray-900 uppercase font-semibold">Movie</span>
                </a>
              </li>
              <li className="float-left">
                <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out">
                  <span className="text-gray-900 uppercase font-semibold">Reservation</span>
                </a>
              </li>
              <li className="float-left">
                <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out">
                  <span className="text-gray-900 uppercase font-semibold">Login</span>
                </a>
              </li>
              <li className="float-left">
                <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out">
                  <span className="text-gray-900 uppercase font-semibold">Join</span>
                </a>
              </li>
              <li className="float-left">
                <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out">
                  <span className="text-gray-900 uppercase font-semibold">About</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900">
        <Carousel
          data={data}
          time={2000}
          width="100%"
          height="500px"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
      <div className="bg-white container mx-auto max-w-5xl">
        <div className="pt-4 center">
          <h3 className="uppercase font-bold">Movie Selection</h3>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/s/h/shazam_fotg_payoff_poster_1_.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Buy ticket
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/s/h/shazam_fotg_payoff_poster_1_.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Buy ticket
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/s/h/shazam_fotg_payoff_poster_1_.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Buy ticket
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src="https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/s/h/shazam_fotg_payoff_poster_1_.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Buy ticket
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
