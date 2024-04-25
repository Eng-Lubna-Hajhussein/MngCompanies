import React, { useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import { Google_Map_Api_Key } from "appHelper/appVariables";
import useGoogleMap from "hooks/useGoogleMap/useGoogleMap";

const styles = {
  map: {
    height: "63vh",
    width: "100%",
    borderRadius: "0px 0px 5px 5px",
  },
};

function GoogleMap({ coordinates, mapStyle = {} }) {
  const googleMapEl = useRef();
  const { initMapScript, initMap } = useGoogleMap();

  useEffect(() => {
    initMapScript(Google_Map_Api_Key).then(() => {
      initMap(googleMapEl, coordinates);
    });
  }, []);

  return (
    <Grid container alignContent={"start"}>
      <Box ref={googleMapEl} sx={{ ...styles.map, ...mapStyle }} />
    </Grid>
  );
}

export default GoogleMap;
