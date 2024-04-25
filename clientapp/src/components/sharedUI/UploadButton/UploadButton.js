import { Box, Fab, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import uploadIcon from "assets/icons/upload.svg";

const styles = {
  fab: {
    width: "100%",
    boxShadow: "none",
    width: "100%",
    height: "55px",
  },
  label: {
    textTransform: "capitalize",
    color: "#fff",
    fontWeight: "800",
    fontSize: { lg: "16px", xs: "13px" },
  },
};

function UploadButton({
  onChange,
  label,
  fullWidth,
  variant,
  color = "primary",
}) {
  const theme = useTheme();
  return (
    <label htmlFor="upload-photo" style={{ width: fullWidth && "100%" }}>
      <input
        style={{ display: "none", width: fullWidth && "100%" }}
        id="upload-photo"
        name="upload-photo"
        type="file"
        onChange={onChange}
      />
      <Fab
        size="large"
        component="span"
        aria-label="add"
        variant="extended"
        sx={{
          borderRadius: variant === "square" ? "5px" : "50%",
          background: theme.palette[color].main,
          ":hover": { background: theme.palette[color].main + "aa" },
          ...styles.fab,
        }}
      >
        <Box component={"img"} src={uploadIcon} />
        {label && (
          <Typography px={2} sx={styles.label}>
            {label}
          </Typography>
        )}
      </Fab>
    </label>
  );
}

export default UploadButton;
