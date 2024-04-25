import { useState } from "react";
import { Box, IconButton, Typography, MenuItem, Divider } from "@mui/material";
import moreVertIcon from "assets/icons/moreVert.svg";
import Menu from "components/sharedUI/Menu/Menu";

const styles = {
  nav: {
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "16px",
    textTransform: "capitalize",
    color: "#000",
  },
  subNav: {
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "15px",
    textTransform: "capitalize",
  },
};

export default function OptionList({ navList }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => {
          handleClick(event);
        }}
      >
        <Box component={"img"} src={moreVertIcon} />
      </IconButton>
      {navList?.length && (
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {navList.map(({ nav, onClick }, index) => (
            <div key={index}>
              <MenuItem
                onClick={() => {
                  if (onClick) {
                    onClick();
                  }
                  handleClose();
                }}
                disableRipple
              >
                <Typography color={"#000"} sx={styles.subNav}>
                  {nav}
                </Typography>
              </MenuItem>
              {index !== navList.length - 1 && <Divider />}
            </div>
          ))}
        </Menu>
      )}
    </div>
  );
}
