import React from "react";
import Home from "./home/Home";
import BtnProgressToTop from "components/sharedUI/BtnProgressToTop/BtnProgressToTop";

function Website({ navList, logo, companies }) {
  return (
    <React.Fragment>
      <Home
        navList={navList}
        logo={logo}
        companies={companies}
      />
      <BtnProgressToTop />
    </React.Fragment>
  );
}

export default Website;
