import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
