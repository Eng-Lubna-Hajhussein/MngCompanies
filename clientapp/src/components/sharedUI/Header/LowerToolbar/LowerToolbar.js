import { Grid, Toolbar, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Nav from "components/sharedUI/Nav/Nav";

const styles = {
  toolbar: {
    background: "#f8f4f4",
    height: "80px",
    padding: "0px !important",
    marginX: "20px",
  },
  container: {
    height: "100%",
  },
};

function LowerToolbar({ navList, logo }) {
  const theme = useTheme();
  return (
    <Toolbar sx={styles.toolbar}>
      <Grid container p={0} m={0} sx={styles.container}>
        <Grid
          item
          xs={2}
          container
          alignContent={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: theme.palette.primary.main, height: "100%" }}
        >
          <Box component={"img"} src={logo} />
        </Grid>
        <Grid
          item
          container
          justifyContent={"start"}
          alignContent={"center"}
          lg={6}
          px={4}
        >
          {navList.map(({ nav, navList, path }, index) => (
            <Grid item key={index}>
              <Nav nav={nav} path={path} navList={navList} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default LowerToolbar;
