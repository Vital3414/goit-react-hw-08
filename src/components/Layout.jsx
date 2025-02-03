import { Outlet } from "react-router";
import AppBar from "./AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
      <Outlet />
    </div>
  );
};

export default Layout;
