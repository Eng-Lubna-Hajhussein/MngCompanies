import React, { useEffect, useRef } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { Google_Map_Api_Key } from "appHelper/appVariables";
import useGoogleMap from "hooks/useGoogleMap/useGoogleMap";

const styles = {
  map: {
    height: "63vh",
    width: "100%",
    borderRadius: "0px 0px 5px 5px",
  },
};

function GoogleLocation({
  onChange,
  label,
  initialLocation,
  coordinates = [35.9105776, 31.9543786],
  mapStyle = {},
}) {
  const searchInput = useRef();
  const googleMapEl = useRef();
  const { initMapScript, initLocationSearch } = useGoogleMap();

  useEffect(() => {
    if (initialLocation) {
      searchInput.current.value = initialLocation;
    }
    initMapScript(Google_Map_Api_Key).then(() => {
      initLocationSearch(searchInput, googleMapEl, onChange, coordinates);
    });
  }, []);

  return (
    <Grid container alignContent={"start"}>
      <Grid item xs={12}>
        <TextField
          type="search"
          fullWidth
          label={label}
          variant="filled"
          color="primary"
          required
          focused={!!(searchInput?.current?.value)}
          inputRef={searchInput}
        />
      </Grid>
      <Grid item xs={12}>
        <Box ref={googleMapEl} sx={{ ...styles.map, ...mapStyle }} />
      </Grid>
    </Grid>
  );
}

export default GoogleLocation;
