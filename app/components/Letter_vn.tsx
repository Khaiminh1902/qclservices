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
            Công ty TNHH Dịch vụ Bảo trì QCL
          </h1>
          <p className="mt-2 text-lg">
            Đối tác đáng tin cậy của bạn trong các giải pháp và dịch vụ kỹ
            thuật.
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#d8a339]">
            1. Cảm ơn quý khách đã lựa chọn chúng tôi.
          </h2>
          <p className="text-lg mb-6">
            Chúng tôi chân thành cảm ơn sự tin tưởng của quý khách khi sử dụng
            dịch vụ của Công ty TNHH Dịch vụ Bảo trì QCL. Đội ngũ giàu kinh
            nghiệm và tay nghề cao của chúng tôi cam kết mang đến cho quý khách
            dịch vụ vượt trội cùng các giải pháp tối ưu cho việc bảo trì, sửa
            chữa và lắp đặt các hệ thống kỹ thuật.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#d8a339]">
            2. Dịch vụ của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {/* Service 1 */}
            <a href="/services#air-conditioning">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Hệ thống điều hòa không khí
                </h3>
                <p>
                  Lắp đặt và bảo trì hệ thống điều hòa không khí để đảm bảo hiệu
                  suất tối ưu và sự thoải mái.
                </p>
              </div>
            </a>

            {/* Service 2 */}
            <a href="/services#electrical-plumbing">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Hệ thống điện và ống nước
                </h3>
                <p>
                  Lắp đặt, bảo trì và sửa chữa hệ thống điện và ống nước theo
                  các tiêu chuẩn an toàn cao nhất.
                </p>
              </div>
            </a>

            {/* Service 3 */}
            <a href="/services#chimney-systems">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Bảo trì hệ thống ống khói
                </h3>
                <p>
                  Kiểm tra, vệ sinh và bảo trì ống khói để đảm bảo hoạt động
                  hiệu quả và ngăn ngừa sự cố.
                </p>
              </div>
            </a>

            {/* Service 4 */}
            <a href="/services#wooden-furniture">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Sửa chữa đồ nội thất gỗ
                </h3>
                <p>
                  Duy trì giá trị thẩm mỹ và nâng cao độ bền cho đồ nội thất gỗ.
                </p>
              </div>
            </a>

            {/* Service 5 */}
            <a href="/services#construction-decoration">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Thiết kế và thi công nội thất
                </h3>
                <p>
                  Thiết kế và xây dựng không gian sống sang trọng, phù hợp với
                  nhu cầu cá nhân của khách hàng.
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
            3. Cam kết của chúng tôi đối với quý khách
          </h2>
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 pt-8">
            {/* Category 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg sm:flex-1">
              <h3 className="text-xl font-semibold mb-4">
                Chất lượng vượt trội
              </h3>
              <p>Sử dụng vật liệu và công nghệ hiện đại nhất.</p>
            </div>

            {/* Category 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg sm:flex-1">
              <h3 className="text-xl font-semibold mb-4">Giá cả hợp lí</h3>
              <p>
                Offering reasonable and effective investments for customers.
              </p>
            </div>

            {/* Category 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg sm:flex-1">
              <h3 className="text-xl font-semibold mb-4">Dedicated Team</h3>
              <p>
                Experienced technicians, always ready to serve anytime and
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center mt-7">
        <Link href="/contact">
          <Button className="h-[50px] w-[250px] bg-[#d8a339] text-white font-semibold rounded-lg shadow-lg border-2 border-transparent hover:border-[#c58e2f] hover:bg-[#c58e2f] hover:text-black transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
