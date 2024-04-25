import { Box, Grid, MenuItem, Select } from "@mui/material";

const styles = {
  select: {
    width: "300px",
  },
  logo: {
    maxHeight: "60px",
    maxWidth: "150px",
  },
};

function CompaniesList({
  companyID,
  companiesInfo,
  companies,
  handleCompanyIDChange,
}) {
  return (
    <Grid item xs={12} container>
      <Grid item xs={6} container justifyContent={"start"} alignItems={"start"}>
        <Grid item px={1}>
          {companiesInfo[companyID]?.logo && (
            <Box
              component={"img"}
              src={companiesInfo[companyID]?.logo}
              sx={styles.logo}
            />
          )}
        </Grid>
      </Grid>
      <Grid item xs={6} container justifyContent={"end"}>
        <Select
          sx={styles.select}
          value={companyID}
          defaultValue={companyID}
          onChange={(e) => handleCompanyIDChange(e.target.value)}
        >
          {companies?.map((company) => (
            <MenuItem value={company.id} key={company.id}>
              {company.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
}

export default CompaniesList;
