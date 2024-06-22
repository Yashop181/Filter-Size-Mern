import { Link, Outlet } from "react-router-dom";
import "../Cse/Layout.css";

const Layout = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/add-product">Add Product</Link>
        <Link to="/product-display">Filter Display</Link>
      </nav>
        <Outlet />

    </div>
  );
};

export default Layout;
