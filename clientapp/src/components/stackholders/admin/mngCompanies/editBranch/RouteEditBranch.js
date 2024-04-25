import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "contextapi/context/AppContext";
import { Admin_App_NavList, Google_Map_Api_Key } from "appHelper/appVariables";
import useGoogleMap from "hooks/useGoogleMap/useGoogleMap";
import logo from "assets/logo.png";
import locationImg from "assets/location.png";
import { ctrlRouteEditBranch } from "./controller/ctrlRouteEditBranch";
import Header from "components/shared/website/home/sections/header/Header";
import AnimationBox from "components/sharedUI/AnimationBox/AnimationBox";
import Button from "components/sharedUI/Button/Button";
import CountryPhoneCode from "components/sharedUI/CountryPhoneCode/CountryPhoneCode";

const styles = {
  container: {
    paddingX: "14px",
    marginY: "40px",
  },
  map: {
    height: "63vh",
    width: "100%",
    borderRadius: "0px 0px 5px 5px",
  },
};

function RouteEditBranch() {
  const { appState, appDispatch } = useContext(AppContext);
  const mobileInput = useRef();
  const searchInput = useRef();
  const googleMapEl = useRef();
  const { companyID, branchID } = useParams();
  const navigate = useNavigate();
  const { initMapScript, codeLatLng, initLocationSearch } = useGoogleMap();

  const initialBranch = useMemo(() => {
    const companyIndex = appState.systemInfo.companies.findIndex(
      (company) => company.id === companyID
    );
    if (companyIndex !== -1) {
      const company = appState.systemInfo.companies[companyIndex];
      const branch = company.branches.find((branch) => branch.id === branchID);
      if (branch?.id) {
        return branch;
      }
    }
  }, []);
  const [countryCode, setCountryCode] = useState("none");
  const [branch, setBranch] = useState(initialBranch);

  const onLocationChange = (location, coordinates, countryCode) => {
    setBranch({
      ...branch,
      location: location,
      googleLocation: {
        coordinates: coordinates,
      },
    });
    setCountryCode(countryCode);
  };

  useEffect(() => {
    if (branch.location) {
      searchInput.current.value = branch.location;
    }
    if (branch.mobile) {
      mobileInput.current.value = branch.mobile.slice(
        branch.mobile.indexOf(")") + 1
      );
    }
    initMapScript(Google_Map_Api_Key).then(() => {
      const coordinates = branch?.googleLocation?.coordinates;
      codeLatLng(coordinates[1], coordinates[0], (code) => {
        setCountryCode(code);
      });
      initLocationSearch(
        searchInput,
        googleMapEl,
        onLocationChange,
        coordinates
      );
    });
  }, []);

  useEffect(() => {
    if (!countryCode) {
      setCountryCode("none");
    }
  }, [countryCode]);

  const handleEditBranch = () => {
    ctrlRouteEditBranch.editBranch({
      appState,
      appDispatch,
      branchID,
      companyID,
      countryCode,
      googleLocation: branch.googleLocation,
      location: branch.location,
      mobile: mobileInput.current.value,
      navigate,
    });
  };

  return (
    <React.Fragment>
      <Header
        navList={Admin_App_NavList}
        logo={logo}
      />
      <Grid container sx={styles.container}>
        <Grid item container xs={4} py={1}>
          <Grid item xs={12} container>
            <Grid item xs={5} px={1}>
              <CountryPhoneCode countryCode={countryCode} />
            </Grid>
            <Grid item xs={7} px={1}>
              <TextField
                type="text"
                fullWidth
                label="Mobile Number"
                focused={!!(mobileInput?.current?.value)}
                inputRef={mobileInput}
                required
                onChange={(e) => {
                  setBranch({ ...branch, mobile: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} p={1} mx={1}>
              <AnimationBox
                animationMode="reverse"
                type="flipOutX"
                duration="5s"
                delay="5s"
              >
                <Box
                  component={"img"}
                  src={locationImg}
                  height={"65vh"}
                  width={"100%"}
                />
              </AnimationBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={8} p={1}>
          <Grid container alignContent={"start"}>
            <Grid item xs={12}>
              <TextField
                type="search"
                fullWidth
                label={"Branch Location"}
                variant="filled"
                color="primary"
                required
                focused={!!(searchInput?.current?.value)}
                inputRef={searchInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Box ref={googleMapEl} sx={styles.map} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} container px={1} justifyContent={"end"}>
          <Button
            label={"Edit Branch"}
            color={"primary"}
            animation={"borderScale-toLeft"}
            onClick={handleEditBranch}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default RouteEditBranch;
