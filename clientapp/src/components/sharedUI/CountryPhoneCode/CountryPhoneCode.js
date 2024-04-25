import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import { Country_Phone_Code } from "appHelper/appVariables";

const styles = {
  select: {
    height: "56px",
  },
  flag: {
    borderRadius: "5px",
  },
  code: {
    overflow: "hidden",
  },
};

function CountryPhoneCode({ countryCode }) {
  return (
    <Select
      fullWidth
      disabled
      value={Country_Phone_Code[countryCode]?.code || "none"}
      sx={styles.select}
    >
      <MenuItem value="none">{"none"}</MenuItem>
      {countryCode &&
        Object.keys(Country_Phone_Code).map((key, index) => (
          <MenuItem value={Country_Phone_Code[key].code} key={index}>
            <Grid container alignItems={"center"} alignContent={"center"}>
              <Grid item xs={5} px={1}>
                <Box
                  component={"img"}
                  src={Country_Phone_Code[key]?.flag}
                  height={"25px"}
                  width={"100%"}
                  sx={styles.flag}
                />
              </Grid>
              <Grid item xs={7}>
                <Typography sx={styles.code}>
                  ( {Country_Phone_Code[key]?.code} )
                </Typography>
              </Grid>
            </Grid>
          </MenuItem>
        ))}
    </Select>
  );
}

export default CountryPhoneCode;
