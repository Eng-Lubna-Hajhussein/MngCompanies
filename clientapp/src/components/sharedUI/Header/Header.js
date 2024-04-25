import React from "react";
import { AppBar, CssBaseline } from "@mui/material";
import UpperToolbar from "./UpperToolbar/UpperToolbar";
import LowerToolbar from "./LowerToolbar/LowerToolbar";

const styles = {
  appBar: {
    background: "none",
    boxShadow: "none",
  },
};

function Header({ navList, logo }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={styles.appBar} position="static">
        <UpperToolbar />
        <LowerToolbar navList={navList} logo={logo} />
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
