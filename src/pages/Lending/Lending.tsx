import Header from "components/Header";
import GeneralLending from "pages/GeneralLending";
const Lending = () => {
  window.addEventListener("scroll", () => {
    const pageYOffset = window.pageYOffset;
    const header = document.querySelector("header");
    if (header && pageYOffset <= 10) {
      header.style.opacity = "1";
      header.style.position = "relative";
    }
    if (header && pageYOffset > 10) {
      header.style.opacity = "0.35";
      header.style.position = "fixed";
    }
  });

  return (
    <div>
      <Header />
      <GeneralLending />
    </div>
  );
};

export default Lending;
