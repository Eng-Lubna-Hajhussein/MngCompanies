import React from "react";
import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
import CompaniesCross from "./sections/companiesCross/CompaniesCross";
import Companies from "./sections/companies/Companies";

function Home({ navList, logo, companies }) {
  return (
    <React.Fragment>
      <Header navList={navList} logo={logo} />
      <Hero />
      {companies?.length && <CompaniesCross companies={companies} />}
      {companies?.length && <Companies companies={companies} />}
    </React.Fragment>
  );
}

export default Home;
