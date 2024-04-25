import { Box, Grid, MenuItem, Select } from "@mui/material";
import { App_Actions_IDS } from "appHelper/appVariables";
import { ctrlCompanies } from "./controller/ctrlCompanies";
import OptionList from "components/sharedUI/OptionList/OptionList";

const styles = {
  select: {
    width: "300px",
  },
  logo: {
    height: "100%",
    width: "100%",
    maxHeight: "60px",
    maxWidth: "150px",
  },
};

function Companies({
  companyID,
  companiesInfo,
  appState,
  appDispatch,
  handleIsLoadingChange,
  navigate,
  handleEditCompanyOpen,
  handleCompanyIDChange,
}) {
  const companyActionsNavList = [
    { id: App_Actions_IDS.Delete, nav: "delete" },
    { id: App_Actions_IDS.Edit, nav: "edit" },
    { id: App_Actions_IDS.Add, nav: "add branch" },
  ];

  const handleActionCompany = (actionID) => {
    if (App_Actions_IDS["Delete"] === actionID) {
      ctrlCompanies.handleDeleteCompany({
        appState,
        appDispatch,
        companyID,
        handleIsLoadingChange,
        handleCompanyIDChange,
      });
    }
    if (App_Actions_IDS["Add"] === actionID) {
      navigate(`${companyID}/addBranch`);
    }
    if (App_Actions_IDS["Edit"] === actionID) {
      handleEditCompanyOpen();
    }
  };

  return (
    <Grid item xs={12} container>
      <Grid item xs={6} container justifyContent={"start"}>
        <Select
          sx={styles.select}
          value={companyID}
          defaultValue={companyID}
          onChange={(e) => handleCompanyIDChange(e.target.value)}
        >
          {appState?.systemInfo?.companies?.map((company) => (
            <MenuItem value={company.id} key={company.id}>
              {company.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={6} container justifyContent={"end"} alignItems={"start"}>
        <Grid item px={1}>
          {companiesInfo[companyID]?.logo && (
            <Box
              component={"img"}
              src={companiesInfo[companyID]?.logo}
              sx={styles.logo}
            />
          )}
        </Grid>
        <Grid item>
          <OptionList
            navList={companyActionsNavList.map((nav) => ({
              ...nav,
              onClick: () => {
                handleActionCompany(nav.id);
              },
            }))}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Companies;
