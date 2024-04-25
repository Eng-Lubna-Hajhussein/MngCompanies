import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Grid,
  Box,
} from "@mui/material";
import closeIcon from "assets/icons/close.svg";
import { ctrlEditCompany } from "./controller/ctrlEditCompany";
import UploadButton from "components/sharedUI/UploadButton/UploadButton";
import Button from "components/sharedUI/Button/Button";

const styles = {
  dialogTitle: {
    height: "fit-content",
  },
  closeIcon: {
    cursor: "pointer",
  },
  dialogContent: {
    py: "0",
  },
  dialogActions: {
    py: "0",
  },
  textField: {
    textTransform: "capitalize",
  },
  logoBox: {
    padding: "20px",
    border: "1px dashed #d4d4d4",
    width: "100%",
    borderRadius: "5px",
  },
  logo: {
    maxHeight: "60px",
    maxWidth: "150px",
  },
};

function EditCompany({ open, handleClose, appState, appDispatch, company }) {
  const [logo, setLogo] = useState();
  useEffect(() => {
    setLogo(company.logo);
  }, [company]);

  const onLogoChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    ctrlEditCompany.handleUploadLogo({
      formData,
      setLogo,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { companyName } = formJson;
    ctrlEditCompany.handleSubmit({
      appState,
      appDispatch,
      companyID: company.id,
      companyName,
      logo,
    });
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit,
        }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={styles.dialogTitle}>
          <Grid container justifyContent={"end"}>
            <Box
              component={"img"}
              sx={styles.closeIcon}
              onClick={handleClose}
              src={closeIcon}
            />
          </Grid>
        </DialogTitle>
        <DialogContent sx={styles.dialogContent}>
          <Grid container py={1} justifyContent={"center"}>
            <Grid item container xs={12}>
              <Grid
                item
                xs={12}
                p={1}
                container
                justifyContent={"center"}
                alignContent={"center"}
                sx={styles.container}
              >
                <UploadButton
                  onChange={onLogoChange}
                  label={"Upload Logo"}
                  variant={"square"}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} container p={1} justifyContent={"center"}>
                <Box component={"div"} sx={styles.logoBox}>
                  <Grid container justifyContent={"center"}>
                    <Box component={"img"} src={logo} sx={styles.logo} />
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} p={1}>
                <TextField
                  color="warning"
                  required
                  sx={styles.textField}
                  name="companyName"
                  type="text"
                  fullWidth
                  label={"Company Name"}
                  defaultValue={company.name}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={styles.dialogActions}>
          <Grid
            container
            p={3}
            justifyItems={"flex-end"}
            justifyContent={"flex-end"}
          >
            <Grid item lg={4}>
              <Button
                label={"save"}
                type="submit"
                fullWidth={true}
                animation={"borderScale-toLeft"}
                color="secondary"
              />
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default EditCompany;
