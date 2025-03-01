import FixedButton from "../components/FixedButton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_en";
import Address_Contact from "./Address_Contact";
import ContactUs from "./ContactUs";
import Header from "./Header";
import Map from "./Map";

export default function About() {
  return (
    <div>
      <Navbar />
      <FixedButton />
      <Header />
      <div className="lg:flex lg:justify-between">
        <Address_Contact />
        <ContactUs />
      </div>
      <Map />
      <Footer />
    </div>
  );
}
