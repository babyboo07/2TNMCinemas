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
      <div>
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
      <div className="bg-white"></div>
    </div>
  );
};

export default Home;
