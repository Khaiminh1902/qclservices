import FixedButton from "../components/FixedButton";
import Footer_vn from "../components/Footer_vn";
import Address_Contact from "./Address_Contact";
import ContactUs from "./ContactUs";
import Header from "./Header";
import Map from "./Map";

export default function About() {
  return (
    <div>
      <FixedButton />
      <Header />
      <div className="lg:flex lg:justify-between">
        <Address_Contact />
        <ContactUs />
      </div>
      <Map />
      <Footer_vn />
    </div>
  );
}
