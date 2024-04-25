import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { App_Actions_IDS } from "appHelper/appVariables";
import mobileIcon from "assets/icons/mobile.svg";
import locationOnIcon from "assets/icons/locationOn.svg";
import { ctrlBranches } from "../controller/ctrlBranches";
import OptionList from "components/sharedUI/OptionList/OptionList";

const styles = {
  map: {
    height: "55vh",
    width: "100%",
    borderRadius: "50px 0px 50px 0px",
  },
  box: {
    height: "40vh",
    width: "100%",
    borderRadius: "0px 0px 50px 0px",
    background: "#fcf4f4",
  },
  boxContainer: {
    height: "100%",
  },
  logo: {
    maxHeight: "60px",
    maxWidth: "150px",
  },
  location: {
    overflow: "hidden",
    width: "260px",
    height: "20px",
  },
};

function Branch({
  appState,
  appDispatch,
  companyID,
  googleMapEls,
  companiesInfo,
  branch,
  index,
  navigate,
  handleIsLoadingChange,
  onBranchActionDelete,
}) {
  const branchActionsNavList = [
    { id: App_Actions_IDS.Delete, nav: "delete" },
    { id: App_Actions_IDS.Edit, nav: "edit" },
  ];

  const handleActionBranch = (actionID, branchID) => {
    if (App_Actions_IDS["Delete"] === actionID) {
      ctrlBranches.handleDeleteBranch({
        appState: appState,
        appDispatch: appDispatch,
        branchID,
        companyID,
        handleIsLoadingChange,
        onBranchActionDelete,
      });
    }
    if (App_Actions_IDS["Edit"] === actionID) {
      navigate(`${companyID}/editBranch/${branchID}`);
    }
  };
  return (
    <Grid item xs={12} container>
      <Grid item xs={6}>
        <Box ref={(el) => (googleMapEls.current[index] = el)} sx={styles.map} />
      </Grid>
      <Grid item xs={6}>
        <Box sx={styles.box}>
          <Grid container p={2} sx={styles.boxContainer} alignItems={"center"}>
            <Grid item container xs={10} justifyContent={"start"}>
              <Box
                component={"img"}
                src={companiesInfo[companyID]?.logo}
                sx={styles.logo}
              />
            </Grid>
            <Grid item container xs={2} justifyContent={"end"}>
              <OptionList
                navList={branchActionsNavList.map((nav) => ({
                  ...nav,
                  onClick: () => {
                    handleActionBranch(nav.id, branch.id);
                  },
                }))}
              />
            </Grid>
            <Grid item xs={12} container mt={2}>
              <Grid item>
                <Box component={"img"} src={mobileIcon} />
              </Grid>
              <Grid item>
                <Typography>{branch.mobile}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} container mt={2}>
              <Grid item>
                <Box component={"img"} src={locationOnIcon} />
              </Grid>
              <Grid item>
                <Typography sx={styles.location}>
                  {branch.location + branch.location + branch.location}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Branch;
