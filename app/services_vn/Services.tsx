import React from "react";
import { Dot } from "lucide-react";

const Services: React.FC = () => {
  return (
    <div className="mt-[40px]">
      <h1 className="text-4xl font-bold text-center flex justify-center text-[#d8a339]">
        Dịch Vụ Của Chúng Tôi
      </h1>
      <div className="flex pt-6">
        {/* Left navigation */}
        <nav className=" p-6 text-black hidden sm:block border-r">
          <h2 className="text-2xl font-semibold mb-6 text-[#d8a339]">
            Dịch vụ
          </h2>
          <ul className="space-y-4">
            <li>
              <a
                href="#air-conditioning"
                className="hover:text-gray-700 flex items-center space-x-2"
              >
                <Dot />
                <span>Hệ Thống Máy Lạnh</span>
              </a>
            </li>
            <li>
              <a
                href="#electrical-plumbing"
                className="hover:text-gray-700 flex items-center space-x-2"
              >
                <Dot />
                <span>Hệ Thống Điện & Ống Nước</span>
              </a>
            </li>
            <li>
              <a
                href="#chimney-systems"
                className="hover:text-gray-700 flex items-center space-x-2"
              >
                <Dot />
                <span>Hệ Thống Ống Khói</span>
              </a>
            </li>
            <li>
              <a
                href="#wooden-furniture"
                className="hover:text-gray-700 flex items-center space-x-2"
              >
                <Dot />
                <span>Bảo Trì & Sửa Chữa Nội Thất Gỗ</span>
              </a>
            </li>
            <li>
              <a
                href="#construction-decoration"
                className="hover:text-gray-700 flex items-center space-x-2"
              >
                <Dot />
                <span>Thi Công & Bảo Trì Nội Thất</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <div className="flex-1 p-8">
          <div className="space-y-16">
            {/* Air Conditioning Systems */}
            <section id="air-conditioning">
              <h2 className="text-3xl font-semibold text-[#d8a339] mb-4">
                Hệ Thống Máy Lạnh
              </h2>
              <p>
                Chúng tôi cung cấp dịch vụ toàn diện cho hệ thống máy lạnh, bao
                gồm lắp đặt, bảo trì và sửa chữa. Các kỹ thuật viên giàu kinh
                nghiệm của chúng tôi sẽ đảm bảo hệ thống của quý khách hoạt động
                trơn tru và hiệu quả, giữ cho không gian của quý khách luôn
                thoải mái suốt cả năm.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Lắp đặt các đơn vị điều hòa không khí dân dụng và thương mại
                </li>
                <li>Bảo trì định kỳ để nâng cao hiệu suất năng lượng</li>
                <li>Sửa chữa và khắc phục sự cố cho mọi loại máy lạnh</li>
                <li>
                  Vệ sinh định kỳ để ngăn ngừa hỏng hóc và đảm bảo hiệu suất tối
                  ưu
                </li>
              </ul>
            </section>

            {/* Electrical & Plumbing Systems */}
            <section id="electrical-plumbing">
              <h2 className="text-3xl font-semibold text-[#d8a339] mb-4">
                Hệ Thống Điện & Ống Nước
              </h2>
              <p>
                Đội ngũ của chúng tôi chuyên về lắp đặt, bảo trì và sửa chữa hệ
                thống điện và ống nước cho cả bất động sản dân dụng và thương
                mại. Chúng tôi đảm bảo an toàn và hiệu quả, đồng thời giữ cho
                ngôi nhà hoặc doanh nghiệp của quý khách hoạt động trơn tru.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Lắp đặt hệ thống dây điện và chiếu sáng</li>
                <li>Sửa chữa dây điện và ổ cắm bị hỏng</li>
                <li>
                  Lắp đặt hệ thống ống nước, bao gồm vòi nước, bồn cầu và đường
                  ống
                </li>
                <li>
                  Bảo trì và sửa chữa máy nước nóng, đường ống và cống thoát
                  nước
                </li>
                <li>Kiểm tra an toàn cho cả hệ thống điện và ống nước</li>
              </ul>
            </section>

            {/* Chimney Systems */}
            <section id="chimney-systems">
              <h2 className="text-3xl font-semibold text-[#d8a339] mb-4">
                Hệ Thống Ống Khói
              </h2>
              <p>
                Chúng tôi cung cấp dịch vụ bảo trì hệ thống ống khói chuyên
                nghiệp, đảm bảo ngôi nhà của quý khách an toàn và ống khói hoạt
                động hiệu quả. Các dịch vụ của chúng tôi bao gồm kiểm tra, vệ
                sinh và sửa chữa để ngăn ngừa các nguy cơ như cháy ống khói và
                tích tụ khí carbon monoxide.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Kiểm tra lớp lót, nắp và ống dẫn của ống khói</li>
                <li>
                  Vệ sinh để loại bỏ muội than, nhựa creosote và tắc nghẽn
                </li>
                <li>Sửa chữa cấu trúc và các bộ phận của ống khói</li>
                <li>
                  Kiểm tra an toàn để ngăn ngừa rò rỉ và đảm bảo thông gió hợp
                  lý
                </li>
              </ul>
            </section>

            {/* Wooden Furniture */}
            <section id="wooden-furniture">
              <h2 className="text-3xl font-semibold text-[#d8a339] mb-4">
                Bảo Trì & Sửa Chữa Nội Thất Gỗ
              </h2>
              <p>
                Dịch vụ của chúng tôi bao gồm sửa chữa và phục hồi nội thất gỗ,
                mang lại vẻ đẹp và chức năng cho những món đồ quý khách yêu
                thích. Dù là sửa chữa nội thất gỗ bị hỏng hay nâng cấp vẻ ngoài
                của gỗ đã cũ, chúng tôi luôn sẵn sàng phục vụ.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Sửa chữa nội thất gỗ bị hư hỏng hoặc gãy</li>
                <li>Phục hồi bề mặt gỗ bị phai màu hoặc mòn</li>
                <li>
                  Tái hoàn thiện và đánh bóng nội thất gỗ về trạng thái ban đầu
                </li>
                <li>
                  Giải pháp chế tác gỗ tùy chỉnh cho nhu cầu nội thất đặc biệt
                </li>
              </ul>
            </section>

            {/* Construction & Interior Decoration */}
            <section id="construction-decoration">
              <h2 className="text-3xl font-semibold text-[#d8a339] mb-4">
                Thi Công & Bảo Trì Nội Thất
              </h2>
              <p>
                Dịch vụ thi công và trang trí nội thất của chúng tôi giúp quý
                khách tạo ra không gian vừa tiện dụng vừa thẩm mỹ. Từ xây dựng
                mới đến cải tạo nhà cửa, đội ngũ của chúng tôi cung cấp các giải
                pháp phù hợp cho mọi dự án.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Dịch vụ thi công toàn diện cho không gian dân dụng và thương
                  mại
                </li>
                <li>
                  Tư vấn thiết kế nội thất để biến ý tưởng của quý khách thành
                  hiện thực
                </li>
                <li>Giải pháp nội thất và trang trí tùy chỉnh</li>
                <li>Cải tạo và nâng cấp không gian hiện có</li>
                <li>Sơn tường, lắp đặt sàn và thiết kế chiếu sáng</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
