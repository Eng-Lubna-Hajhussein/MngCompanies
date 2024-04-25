import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import arrowForwardIcon from "assets/icons/arrowForward.svg";

const styles = {
  box: {
    height: "200px",
    width: "200px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    borderRadius: "3px",
    backgroundColor: "#fff",
  },
  icon: {
    maxHeight: "60px",
    maxWidth: "150px",
  },
  label: {
    textTransform: "capitalize",
    fontWeight: "800",
  },
  hoverBox: {
    width: "100%",
    height: "100%",
    borderRadius: "0px 0px 3px 3px",
    cursor: "pointer",
  },
  hoverBoxContainer: {
    height: "60px",
  },
  arrowContainer: {
    height: "100%",
  },
  arrowImg: {
    padding: "10px",
    borderRadius: "50%",
  },
};

function CardDirHover({
  icon,
  label,
  color = "primary",
  arrowColor = "secondary",
  ArrowDir = "forward",
}) {
  const [arrowHidden, setArrowHidden] = useState(true);
  const theme = useTheme();
  return (
    <React.Fragment>
      <Grid container justifyContent={"center"} my={2}>
        <Box
          component={"div"}
          sx={styles.box}
          onMouseOver={() => setArrowHidden(false)}
          onMouseLeave={() => setArrowHidden(true)}
        >
          <Grid container>
            <Grid
              item
              container
              xs={12}
              sx={{ height: arrowHidden ? "200px" : "140px" }}
              alignContent={"center"}
            >
              <Grid item xs={12} container justifyContent={"center"}>
                <Box component={"img"} src={icon} sx={styles.icon} />
              </Grid>
              <Grid item xs={12} container mt={2} justifyContent={"center"}>
                <Typography sx={styles.label}>{label}</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={styles.hoverBoxContainer}
              alignContent={"end"}
              display={{ xs: arrowHidden ? "none" : "flex" }}
            >
              <Box
                sx={{
                  ...styles.hoverBox,
                  backgroundColor: theme.palette[color].main,
                }}
              >
                <Grid
                  container
                  sx={styles.arrowContainer}
                  justifyContent={"center"}
                  alignContent={"center"}
                >
                  <Box
                    component={"img"}
                    src={ArrowDir === "forward" && arrowForwardIcon}
                    sx={{
                      ...styles.arrowImg,
                      background: theme.palette[arrowColor].main,
                    }}
                  />
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </React.Fragment>
  );
}

export default CardDirHover;
