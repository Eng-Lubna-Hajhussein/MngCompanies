import { UploadFile } from "appHelper/fetchapi/appFetch";
import { updateCompany } from "appHelper/fetchapi/company/company";

export const ctrlEditCompany = {
  handleSubmit: async ({
    appState,
    appDispatch,
    companyID,
    companyName,
    logo,
  }) => {
    try {
      const objInput = {
        companyID: companyID,
        name: companyName,
        logo,
      };
      const companyUpdated = await updateCompany(objInput);
      if (companyUpdated) {
        const updatedCompanies = [...appState.systemInfo.companies];
        const companyIndex = appState.systemInfo.companies.findIndex(
          ({ id }) => id === companyID
        );
        updatedCompanies[companyIndex] = {
          ...updatedCompanies[companyIndex],
          name: companyName,
          logo,
        };
        appState.systemInfo.companies = updatedCompanies;
        appDispatch();
      }
    } catch (err) {
      console.log({ err });
    }
  },
  handleUploadLogo: async ({ formData, setLogo }) => {
    try {
      const filePathURL = await UploadFile(formData);
      if (filePathURL) {
        setLogo(filePathURL);
      }
    } catch (err) {
      console.log({ err });
    }
  },
};
