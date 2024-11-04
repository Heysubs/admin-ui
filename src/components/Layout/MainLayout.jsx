import Header from '../Fragments/Header';
import Navbar from '../Fragments/Navbar';
import PropTypes from 'prop-types';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="flex bg-special-mainBg w-screen min-h-screen max-w-full">
      {/* navbar start*/}
      <Navbar/>
      {/* navbar end*/}
      <div className="w-screen">
        {/* header start*/}
        <Header/>
        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4">{children}</main>
        {/* content end*/}
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}; //memvalidasi tipe prop yang diterima oleh komponen MainLayout.

export default MainLayout;
