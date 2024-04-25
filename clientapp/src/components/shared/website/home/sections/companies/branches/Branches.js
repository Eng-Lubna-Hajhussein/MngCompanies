import React from "react";
import { Grid } from "@mui/material";
import Branch from "./branch/Branch";

function Branches({ companyID, companiesInfo, googleMapEls }) {
  return (
    <Grid item xs={12} container my={3}>
      {companiesInfo[companyID]?.branches?.map((branch, index) => (
        <Grid item xs={6} container p={1} mb={2} key={branch.id}>
          <Branch
            companyID={companyID}
            branch={branch}
            companiesInfo={companiesInfo}
            googleMapEls={googleMapEls}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Branches;
