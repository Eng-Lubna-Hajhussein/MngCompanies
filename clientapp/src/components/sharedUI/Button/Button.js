import { Button as ButtonMUI, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import classes from "./Button.module.css";

/**
 * @param {{
 *   animation: 'borderScale-toLeft',
 *   color: 'primary' | 'secondary',
 *   onClick: Function,
 *   disabled: boolean,
 *   fullWidth: boolean,
 *   label: string,
 * }} props
 */

const styles = {
  inner: {
    fontWeight: "800",
    width: "100%",
    fontSize: { lg: "16px", xs: "14px" },
    padding: { lg: "18px 20px", xs: "12px 15px" },
  },
};

function Button({
  label,
  color = "primary",
  disabled,
  fullWidth,
  onClick = () => {},
  type = "button",
  animation,
}) {
  const theme = useTheme();
  return (
    <ButtonMUI
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <Typography
        className={classes[animation]}
        sx={{
          ...styles.inner,
          backgroundColor: theme.palette[color].main,
          ":before": {
            borderColor: theme.palette[color].main,
            height: { lg: "72px", xs: "58px" },
          },
        }}
      >
        {label}
      </Typography>
    </ButtonMUI>
  );
}

export default Button;
