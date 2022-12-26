import GeneralLending from "pages/GeneralLending";
import Header from "components/Header";
import Footer from "components/Footer";

const Lending = () => {
  window.addEventListener("scroll", () => {
    const pageYOffset = window.pageYOffset;
    const header = document.querySelector("header");
    if (header && pageYOffset <= 10) {
      header.classList.remove("header-scroll");
    }
    if (header && pageYOffset > 10) {
      header.classList.add("header-scroll");
    }
  });

  return (
    <div>
      <Header />
      <GeneralLending />
      <Footer />
    </div>
  );
};

export default Lending;
