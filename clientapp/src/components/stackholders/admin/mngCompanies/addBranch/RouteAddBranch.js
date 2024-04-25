import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "contextapi/context/AppContext";
import { Admin_App_NavList } from "appHelper/appVariables";
import logo from "assets/logo.png";
import locationImg from "assets/location.png";
import { ctrlRouteAddBranch } from "./controller/ctrlRouteAddBranch";
import Header from "components/shared/website/home/sections/header/Header";
import AnimationBox from "components/sharedUI/AnimationBox/AnimationBox";
import Button from "components/sharedUI/Button/Button";
import GoogleLocation from "components/sharedUI/GoogleLocation/GoogleLocation";
import CountryPhoneCode from "components/sharedUI/CountryPhoneCode/CountryPhoneCode";

const styles = {
  container: {
    paddingX: "14px",
    marginY: "40px",
  },
};

function RouteAddBranch() {
  const { appState, appDispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { companyID } = useParams();
  const mobileInput = useRef();
  const [googleLocationInfo, setGoogleLocationInfo] = useState({
    location: "",
    coordinates: [],
  });
  const [countryCode, setCountryCode] = useState("JO");

  useEffect(() => {
    if (!countryCode) {
      setCountryCode("none");
    }
  }, [countryCode]);

  const onLocationChange = (location, coordinates, countryCode) => {
    setGoogleLocationInfo({
      location: location,
      coordinates: coordinates,
    });
    setCountryCode(countryCode);
  };

  const handleAddBranch = () => {
    ctrlRouteAddBranch.addBranch({
      appState: appState,
      appDispatch: appDispatch,
      companyID: companyID,
      googleLocationInfo: googleLocationInfo,
      mobile: mobileInput.current.value,
      countryCode,
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
                inputRef={mobileInput}
                required
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
          <GoogleLocation
            onChange={onLocationChange}
            label={"Branch Location"}
          />
        </Grid>
        <Grid item xs={12} container px={1} justifyContent={"end"}>
          <Button
            label={"Add Branch"}
            color={"primary"}
            animation={"borderScale-toLeft"}
            onClick={handleAddBranch}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default RouteAddBranch;
