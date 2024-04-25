import React, { useEffect, useMemo, useRef, useState } from "react";
import { Grid } from "@mui/material";
import { Google_Map_Api_Key } from "appHelper/appVariables";
import useGoogleMap from "hooks/useGoogleMap/useGoogleMap";
import Branches from "./branches/Branches";
import CompaniesList from "./companiesList/CompaniesList";

const styles = {
  container: {
    paddingX: "25px",
    marginY: "70px",
  },
};

function Companies({ companies }) {
  const initialCompanyID = companies?.length ? companies[0]?.id : "";
  const [companyID, setCompanyID] = useState(initialCompanyID);
  const companiesInfo = useMemo(() => {
    return companies.reduce((info, company) => {
      info[company.id] = company;
      return info;
    }, {});
  }, [companies]);

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
  }, [companyID]);

  const handleCompanyIDChange = (value) => {
    setCompanyID(value);
  };

  return (
    <React.Fragment>
      <Grid container my={4} sx={styles.container}>
        {!!companies?.length && (
          <Grid item xs={12} container my={5}>
            <CompaniesList
              companies={companies}
              companiesInfo={companiesInfo}
              companyID={companyID}
              handleCompanyIDChange={handleCompanyIDChange}
            />
            {!!companiesInfo[companyID]?.branches?.length && (
              <Branches
                companiesInfo={companiesInfo}
                companyID={companyID}
                googleMapEls={googleMapEls}
              />
            )}
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default Companies;
