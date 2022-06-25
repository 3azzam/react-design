import MainHeader from '../../components/mainHeader'
import NavBar from "../../components/navbar";
import Subscriptions from "../../views/Subscriptions";
import MainFooter from "../../components/mainFooter";

const MainLayout = () => {
  return (
    <div className="main-font" style={{ direction: "rtl" }}>
      <MainHeader/>
      <div className="container mb-5">
        <NavBar />
      </div>
      <Subscriptions />
      <div className="bg-white">
        <MainFooter />
      </div>
    </div>
  );
};

export default MainLayout;
