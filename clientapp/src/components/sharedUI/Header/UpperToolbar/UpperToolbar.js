import { Grid, Typography, Toolbar, Box } from "@mui/material";
import searchIcon from "assets/icons/search.svg";
import favoriteIcon from "assets/icons/favorite.svg";
import cartIcon from "assets/icons/cart.svg";
import facebookIcon from "assets/icons/facebook.svg";
import twitterIcon from "assets/icons/twitter.svg";
import pinterestIcon from "assets/icons/pinterest.svg";
import dribbleIcon from "assets/icons/dribble.svg";
import InstagramIcon from "assets/icons/instagram.svg";
import Link from "components/sharedUI/Link/Link";

const styles = {
  followUs: {
    fontWeight: "600",
    color: "#676767",
    fontFamily: "sans-serif",
    fontSize: "15px",
    lineHeight: "24px",
    fontStyle: "normal",
  },
  title: {
    color: "#676767",
    fontFamily: "sans-serif",
    fontSize: "15px",
    lineHeight: "24px",
    fontStyle: "normal",
  },
};

const demo_List1 = [
  { icon: facebookIcon, path: "" },
  { icon: twitterIcon, path: "" },
  { icon: pinterestIcon, path: "" },
  { icon: dribbleIcon, path: "" },
  { icon: InstagramIcon, path: "" },
];

const demo_list2 = [
  { icon: searchIcon, label: "Search here", path: "" },
  { icon: favoriteIcon, label: "Wishlist", path: "" },
  { icon: cartIcon, label: "Cart", path: "" },
];

function UpperToolbar() {
  return (
    <Toolbar>
      <Grid container>
        <Grid item xs={4} container>
          <Grid item>
            <Typography sx={styles.followUs}>Follow us:</Typography>
          </Grid>
          {demo_List1.map(({ icon, path }, index) => (
            <Grid item px={1} key={index}>
              <Box component={"img"} src={icon} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={4} container justifyContent={"center"}>
          <Grid item>
            <Typography px={1} sx={styles.title}>
              We Have Special Offers Every{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Link label="Find your offer" color="primary" />
          </Grid>
        </Grid>
        <Grid item xs={4} container justifyContent={"flex-end"}>
          {demo_list2.map(({ icon, label, path }, index) => (
            <Grid item px={1} key={index}>
              <Link startIcon={icon} label={label} underline={false} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default UpperToolbar;
