import { useMemo } from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from "components/sharedUI/Card/Card";
import Carousel from "components/sharedUI/Carousel/Carousel";

const styles = {
  container: {
    marginTop: "-100px",
    zIndex: 10,
  },
};

function Companies({ companies }) {
  const theme = useTheme();
  const slides = useMemo(() => {
    return companies.map((company) => ({
      slideContent: (
        <Card
          icon={company.logo}
          label={company.name}
          style="card-dir-hover"
          color="primary"
          arrowColor="secondary"
        />
      ),
      sxStyle: { height: { lg: "fit-content", xs: "fit-content" } },
    }));
  }, [companies]);

  return (
    <Grid container justifyContent={"start"} sx={styles.container}>
      <Carousel
        slides={slides}
        activeSlides={4}
        justify={"center"}
        activeColor={theme.palette.primary.main}
        inactiveColor={"#b5b5b5"}
        dir={"ltr"}
      />
    </Grid>
  );
}

export default Companies;
