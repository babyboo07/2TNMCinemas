import { Card } from "@mui/material";
import SoftBox from "components/SoftBox";
const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

const DetailMovie = () => {
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
                    <span className="uppercase text-base">
                      TOM & JERRY: QUẬY TUNG NEW YORK (CHIẾU LẠI)
                    </span>
                  </div>
                  <div className="flex pt-3">
                    <span className="pr-3 text-base font-medium">Desciption:</span>
                    <span className="text-base">
                      “Sau nhiều năm chành chọe, nay cặp kỳ phùng địch thủ nổi tiếng nhất thế giới
                      Tom và Jerry đã làm hòa, khăn gói rời khỏi mái nhà chung, và bắt đầu hành
                      trình của riêng mình. Chuột Jerry nay trú ngụ tại một khách sạn sang trọng,
                      nơi chuẩn bị tổ chức một đám cưới Thế kỷ. Cô nhân viên mới Kayla được giao cho
                      nhiệm vụ đuổi Jerry đi nên mang về một chàng mèo “mình đầy kinh nghiệm” đối
                      phó với chuột, không ai khác chính là Tom. Và thế là cuộc chiến mèo - chuột
                      lại nổ ra, kéo theo loạt rắc rối cho khách sạn, và biết bao tình huống dở khóc
                      dở cười.“
                    </span>
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
                      <span className="text-base">110 minutes</span>
                    </div>
                    <div className="flex pt-3">
                      <span className="pr-3 text-base font-medium">Release Date:</span>
                      <span className="text-base">Mar 10, 2023</span>
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
                    <span className="text-base">Tim Story</span>
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
                      src="https://www.youtube.com/embed/1ue84WhBdK4&t=1s"
                    ></iframe>
                  </div>
                </div>
                <div>
                  <div className="flex pt-3">
                    <span className="pr-3 text-base font-medium">Thumnail:</span>
                    <img
                      src="https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/t/o/tom_jerry_rerun_poster.jpg"
                      alt="img title"
                    />
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
