import { Fragment } from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <div className="container mx-auto">
        <NavBar />
        <main>{props.children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
