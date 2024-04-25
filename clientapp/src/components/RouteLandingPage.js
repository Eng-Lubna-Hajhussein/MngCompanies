import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Public_App_NavList } from "appHelper/appVariables";
import logo from "assets/logo.png";
import { ctrlRouteLandingPage } from "components/ctrlRouteLandingPage";
import Website from "components/shared/website/Website";

function RouteLandingPage() {
  const [companies, setCompanies] = useState([]);
  const [adminMode, setAdminMode] = useState(false);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (adminMode) {
      navigate("/admin");
    }
  }, [adminMode]);

  useEffect(() => {
    ctrlRouteLandingPage.installData({
      setCompanies,
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
                onChange={() => setAdminMode(true)}
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
          navList={Public_App_NavList}
          logo={logo}
          companies={companies}
        />
      )}
    </React.Fragment>
  );
}

export default RouteLandingPage;
