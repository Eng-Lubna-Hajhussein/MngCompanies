import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { CircularProgress, Divider, Grid } from "@mui/material";
import { AppContext } from "contextapi/context/AppContext";
import { useNavigate } from "react-router-dom";
import { Admin_App_NavList, Google_Map_Api_Key } from "appHelper/appVariables";
import useGoogleMap from "hooks/useGoogleMap/useGoogleMap";
import logo from "assets/logo.png";
import AddCompany from "./addCompany/AddCompany";
import Header from "components/sharedUI/Header/Header";
import Button from "components/sharedUI/Button/Button";
import EditCompany from "./editCompany/EditCompany";
import Companies from "./companies/Companies";
import Branches from "./branches/Branches";

function RouteMngCompanies() {
  const { appState, appDispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [addCompanyOpen, setAddCompanyOpen] = useState(false);
  const [editCompanyOpen, setEditCompanyOpen] = useState(false);
  const [branchActionDelete, setBranchActionDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const initialCompanyID = appState?.systemInfo?.companies?.length
    ? appState?.systemInfo?.companies[0]?.id
    : "";
  const [companyID, setCompanyID] = useState(initialCompanyID);
  const companiesInfo = useMemo(() => {
    return appState.systemInfo.companies.reduce((info, company) => {
      info[company.id] = company;
      return info;
    }, {});
  }, [appState.systemInfo.companies]);

  const googleMapEls = useRef([]);
  useEffect(() => {
    if (companiesInfo[companyID]?.branches?.length) {
      googleMapEls.current = googleMapEls.current.slice(
        0,
        companiesInfo[companyID]?.branches?.length
      );
    }
  }, [companyID, companiesInfo[companyID]?.branches, googleMapEls]);

  const { initMapScript, initMap } = useGoogleMap();
  
  useEffect(() => {
    initMapScript(Google_Map_Api_Key).then(() => {
      googleMapEls.current.forEach((googleMapEl, index) => {
        const coordinates =
          companiesInfo[companyID]?.branches[index]?.googleLocation
            ?.coordinates;
        if (coordinates) {
          initMap(googleMapEl, coordinates);
        }
      });
    });
  }, [companyID, branchActionDelete]);

  const onBranchActionDelete = () => {
    setBranchActionDelete(true);
  };

  const handleAddCompanyOpen = () => {
    setAddCompanyOpen(true);
  };
  const handleAddCompanyClose = () => {
    setAddCompanyOpen(false);
  };
  const handleEditCompanyOpen = () => {
    setEditCompanyOpen(true);
  };
  const handleEditCompanyClose = () => {
    setEditCompanyOpen(false);
  };

  const handleIsLoadingChange = (value) => {
    setIsLoading(value);
  };

  const handleCompanyIDChange = (value) => {
    setCompanyID(value);
  };

  return (
    <React.Fragment>
      <Header
        navList={Admin_App_NavList}
        logo={logo}
      />
      {isLoading && <Grid container height={'100vh'} justifyContent={'center'} alignContent={'center'}>
          <CircularProgress color="secondary" />
        </Grid>}
      {!isLoading && (
        <Grid container my={4} sx={{ paddingX: "25px" }}>
          <Grid item xs={12} mb={4} container justifyContent={"end"}>
            <Button
              label={"Add Company"}
              color={"primary"}
              animation={"borderScale-toLeft"}
              onClick={handleAddCompanyOpen}
            />
          </Grid>
          {!!appState?.systemInfo?.companies?.length && (
            <Grid item xs={12}>
              <Divider />
            </Grid>
          )}
          {!!appState?.systemInfo?.companies?.length && (
            <Grid item xs={12} container mt={5}>
              <Companies
                appState={appState}
                appDispatch={appDispatch}
                companiesInfo={companiesInfo}
                companyID={companyID}
                handleCompanyIDChange={handleCompanyIDChange}
                handleIsLoadingChange={handleIsLoadingChange}
                handleEditCompanyOpen={handleEditCompanyOpen}
                navigate={navigate}
              />
              {!!companiesInfo[companyID]?.branches?.length && (
                <Branches
                  appState={appState}
                  appDispatch={appDispatch}
                  companiesInfo={companiesInfo}
                  companyID={companyID}
                  googleMapEls={googleMapEls}
                  handleIsLoadingChange={handleIsLoadingChange}
                  navigate={navigate}
                  onBranchActionDelete={onBranchActionDelete}
                />
              )}
            </Grid>
          )}
        </Grid>
      )}
      <AddCompany
        handleClose={handleAddCompanyClose}
        open={addCompanyOpen}
        appState={appState}
        appDispatch={appDispatch}
      />
      <EditCompany
        handleClose={handleEditCompanyClose}
        open={editCompanyOpen}
        appState={appState}
        appDispatch={appDispatch}
        company={companiesInfo[companyID]}
      />
    </React.Fragment>
  );
}

export default RouteMngCompanies;
