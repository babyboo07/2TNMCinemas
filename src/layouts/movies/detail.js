import { Card } from "@mui/material";
import { getMoviesById } from "API/movies/movie";
import { URL_IMG } from "AppConstants";
import SoftBox from "components/SoftBox";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

const DetailMovie = () => {
  const [movieInfo, setMovieInfo] = useState();
  const movieId = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const movie = await getMoviesById(movieId.movieId);
    setMovieInfo(movie);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox p={2}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex pt-3">
                    <span className="pr-3 text-base font-medium">Title:</span>
                    <span className="uppercase text-base">{movieInfo?.titile}</span>
                  </div>
                  <div className="flex pt-3">
                    <span className="pr-3 text-base font-medium">Desciption:</span>
                    <span className="text-base">{movieInfo?.description}</span>
                  </div>
                  <div className="flex pt-3">
                    <span className="pr-3 text-base font-medium">Category:</span>
                    <div
                      data-te-chip-init
                      data-te-ripple-init
                      className="[word-wrap: break-word] mr-4 flex h-[26px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1]"
                      data-te-close="true"
                    >
                      Text
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex pt-3">
                      <span className="pr-3 text-base font-medium">Running Time:</span>
                      <span className="text-base">{movieInfo?.runningTime}</span>
                    </div>
                    <div className="flex pt-3">
                      <span className="pr-3 text-base font-medium">Release Date:</span>
                      <span className="text-base">{movieInfo?.releaseDate}</span>
                    </div>
                    <div className="flex pt-3">
                      <span className="pr-3 text-base font-medium">Hot:</span>
                      <div
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] mr-4 flex h-[26px] cursor-pointer items-center justify-between rounded-[16px] bg-red-500 py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-white shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1]"
                        data-te-close="true"
                      >
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-3">
                    <span className="pr-3 text-base font-medium">Director:</span>
                    <span className="text-base">{movieInfo?.directorName}</span>
                  </div>
                  <div className="flex pt-3">
                    <span className="pr-3 text-base font-medium">Cast:</span>
                    <span className="text-base">Chloë Grace Moretz, Michael Peña, Rob Delaney</span>
                  </div>
                  <div className="flex pt-3">
                    <span className="pr-3 text-base font-medium">Trailers:</span>
                    <iframe
                      className="w-full h-64"
                      id="video"
                      title="movie"
                      src={"https://www.youtube.com/embed/" + movieInfo?.trailer}
                    ></iframe>
                  </div>
                </div>
                <div>
                  <div className="flex pt-3">
                    <span className="pr-3 text-base font-medium">Thumnail:</span>
                    <img src={URL_IMG + movieInfo?.thumail} alt="img title" />
                  </div>
                </div>
              </div>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default DetailMovie;
