import { useState } from "react";
import { Box, Button, MenuItem, Divider } from "@mui/material";
import dropDownIcon from "assets/icons/dropDown.svg";
import Menu from "../Menu/Menu";
import Link from "../Link/Link";

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

function Nav({ nav, navList, endIcon = dropDownIcon, path }) {
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
      {path && (
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="link"
          disableElevation
          onClick={handleClick}
          sx={styles.nav}
        >
          <Link
            label={nav}
            endIcon={navList?.length && endIcon}
            bold={true}
            to={path}
            underline={false}
          />
        </Button>
      )}
      {!path && (
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="link"
          disableElevation
          onClick={handleClick}
          sx={styles.nav}
        >
          {nav}
          {navList?.length && <Box component={"img"} src={endIcon} />}
          &nbsp;
        </Button>
      )}
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
          {navList.map(({ nav, onClick, path }, index) => (
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
                <Link label={nav} underline={false} to={path} />
              </MenuItem>
              {index !== navList.length - 1 && <Divider />}
            </div>
          ))}
        </Menu>
      )}
    </div>
  );
}

export default Nav;
