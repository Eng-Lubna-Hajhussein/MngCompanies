import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Link as LinkMUI } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/**
 * @param {{
 *   underline: boolean,
 *   bold: boolean,
 *   label: string,
 *   to:string,
 *   startIcon:string,
 *   endIcon:string,
 *   color:'primary'|'secondary'|'black',
 *   sx:object
 * }} props
 */

function Link({
  to,
  label,
  underline = true,
  startIcon,
  endIcon,
  color = "black",
  bold,
  sx,
}) {
  const theme = useTheme();
  return (
    <LinkMUI
      component={RouterLink}
      sx={{
        textDecoration: underline ? "underline" : "none",
        color: theme.palette[color].main,
        fontWeight: bold ? "800" : "600",
        ...sx,
      }}
      to={to}
    >
      <Grid container justifyContent={"center"}>
        {startIcon && (
          <Grid item>
            <Box component={"img"} src={startIcon} />
          </Grid>
        )}
        <Grid item>{label}</Grid>
        {endIcon && (
          <Grid item>
            <Box component={"img"} src={endIcon} />
          </Grid>
        )}
      </Grid>
    </LinkMUI>
  );
}

export default Link;
