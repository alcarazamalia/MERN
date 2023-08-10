import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="layout-main">
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;