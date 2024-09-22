import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.isRequired,
};
export default Layout;
