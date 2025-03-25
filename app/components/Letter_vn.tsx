// pages/index.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="font-sans antialiased">
      {/* Header Section */}
      <header className="bg-[#023f92] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold">
            Công ty TNHH Thương Mại và Dịch Vụ QCL
          </h1>
          <p className="mt-2 text-lg">
            Đối tác đáng tin cậy của bạn trong các giải pháp bảo trì và dịch vụ
            kỹ thuật.
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#d8a339]">
            1. Lời cảm ơn đến quý khách
          </h2>
          <p className="text-lg mb-6">
            Công ty TNHH Thương Mại và Dịch Vụ QCL xin gửi lời cảm ơn chân thành
            đến quý khách đã tin tưởng lựa chọn dịch vụ của chúng tôi. Với đội
            ngũ kỹ thuật viên giàu kinh nghiệm và chuyên môn cao, chúng tôi cam
            kết cung cấp các dịch vụ bảo trì, sửa chữa và lắp đặt hệ thống kỹ
            thuật chất lượng cao, đáp ứng mọi nhu cầu của quý khách.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#d8a339]">
            2. Các dịch vụ bảo trì của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {/* Service 1 */}
            <a href="/services_vn#air-conditioning">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Bảo trì hệ thống điều hòa không khí
                </h3>
                <p>
                  Lắp đặt và bảo dưỡng điều hòa không khí để đảm bảo hoạt động
                  ổn định và tiết kiệm năng lượng.
                </p>
              </div>
            </a>

            {/* Service 2 */}
            <a href="/services_vn#electrical-plumbing">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Bảo trì hệ thống điện và ống nước
                </h3>
                <p>
                  Kiểm tra, sửa chữa và lắp đặt hệ thống điện, nước đảm bảo an
                  toàn và hiệu quả.
                </p>
              </div>
            </a>

            {/* Service 3 */}
            <a href="/services_vn#chimney-systems">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Bảo trì hệ thống ống khói
                </h3>
                <p>
                  Vệ sinh và bảo dưỡng ống khói để đảm bảo hoạt động trơn tru và
                  an toàn.
                </p>
              </div>
            </a>

            {/* Service 4 */}
            <a href="/services_vn#wooden-furniture">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Bảo trì và sửa chữa nội thất gỗ
                </h3>
                <p>
                  Bảo dưỡng và sửa chữa đồ gỗ để duy trì vẻ đẹp và độ bền lâu
                  dài.
                </p>
              </div>
            </a>

            {/* Service 5 */}
            <a href="/services_vn#construction-decoration">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Thi công và bảo trì nội thất
                </h3>
                <p>
                  Thiết kế và bảo trì không gian nội thất theo yêu cầu, đảm bảo
                  thẩm mỹ và công năng.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#d8a339]">
            3. Cam kết của chúng tôi
          </h2>
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 pt-8">
            {/* Category 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg sm:flex-1">
              <h3 className="text-xl font-semibold mb-4">
                Chất lượng dịch vụ hàng đầu
              </h3>
              <p>Ứng dụng công nghệ tiên tiến và vật liệu chất lượng cao.</p>
            </div>

            {/* Category 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg sm:flex-1">
              <h3 className="text-xl font-semibold mb-4">Chi phí hợp lý</h3>
              <p>
                Mang đến giải pháp tiết kiệm và hiệu quả cho mọi khách hàng.
              </p>
            </div>

            {/* Category 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg sm:flex-1">
              <h3 className="text-xl font-semibold mb-4">Đội ngũ tận tâm</h3>
              <p>
                Kỹ thuật viên chuyên nghiệp, sẵn sàng hỗ trợ quý khách mọi lúc,
                mọi nơi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-col md:flex-row lg:flex-row flex justify-center items-center mt-7 gap-6">
        <Link href="/en/blog">
          <Button className="h-[50px] w-[250px] bg-[#023f92] text-white font-semibold rounded-lg shadow-lg border-2 border-transparent hover:border-[#023f92] hover:bg-[#023e92e7] transition duration-300 ease-in-out transform hover:scale-105">
            Tìm hiểu thêm
          </Button>
        </Link>
        <Link href="/en/contact">
          <Button className="h-[50px] w-[250px] bg-[#d8a339] text-white font-semibold rounded-lg shadow-lg border-2 border-transparent hover:border-[#c58e2f] hover:bg-[#c58e2f] transition duration-300 ease-in-out transform hover:scale-105">
            Liên hệ ngay
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
