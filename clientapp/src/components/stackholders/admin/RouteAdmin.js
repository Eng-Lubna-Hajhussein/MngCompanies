import React, { useContext, useEffect, useState } from "react";
import {
  CircularProgress,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContext } from "contextapi/context/AppContext";
import { Admin_App_NavList } from "appHelper/appVariables";
import logo from "assets/logo.png";
import { ctrlRouteAdmin } from "./ctrlRouteAdmin";
import Website from "components/shared/website/Website";

function RouteAdmin() {
  const { appState, appDispatch } = useContext(AppContext);
  const [adminMode, setAdminMode] = useState(true);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!adminMode) {
      navigate("/");
    }
  }, [adminMode]);

  useEffect(() => {
    ctrlRouteAdmin.installData({
      appState,
      appDispatch,
      setIsLoading,
    });
  }, []);
  return (
    <React.Fragment>
      {isLoading && (
        <Grid
          container
          height={"100vh"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <CircularProgress color="secondary" />
        </Grid>
      )}
      {!isLoading && (
        <Grid container justifyContent={"center"}>
          <FormControlLabel
            control={
              <Switch
                checked={adminMode}
                onChange={() => setAdminMode(false)}
                color="secondary"
              />
            }
            label="Admin Mode"
          />
        </Grid>
      )}
      {!isLoading && <Divider />}
      {!isLoading && (
        <Website
          navList={Admin_App_NavList}
          logo={logo}
          companies={appState?.systemInfo?.companies}
        />
      )}
    </React.Fragment>
  );
}

export default RouteAdmin;
