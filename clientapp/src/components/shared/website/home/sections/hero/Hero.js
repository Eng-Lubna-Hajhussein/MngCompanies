import { Grid, Typography } from "@mui/material";
import heroBgImg1 from "assets/hero-one-bg-1.jpg";
import heroBgImg2 from "assets/hero-one-bg-2.jpg";

const styles = {
  container: {
    height: "70vh",
    marginTop: "-40px",
  },
  leftItem: {
    background: `url(${heroBgImg1})`,
    backgroundSize: "100% 100%",
    height: "100%",
  },
  rightItem: {
    background: `url(${heroBgImg2})`,
    backgroundSize: "100% 100%",
    height: "100%",
  },
  title: {
    fontSize: "26px",
    fontWeight: "800",
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: "30px",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#f8f4f4",
  },
};

function Hero() {
  return (
    <Grid container sx={styles.container}>
      <Grid
        item
        xs={7}
        container
        sx={styles.leftItem}
        alignContent={"center"}
        justifyContent={"start"}
        px={10}
      >
        <Grid item xs={12}>
          <Typography sx={styles.title}>
            Get information about a company
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={styles.subtitle}>
            You can get some details about a company for free!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={5}
        container
        sx={styles.rightItem}
        alignContent={"center"}
        justifyContent={"center"}
      />
    </Grid>
  );
}

export default Hero;
