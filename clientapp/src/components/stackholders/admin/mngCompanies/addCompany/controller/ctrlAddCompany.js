import { UploadFile } from "appHelper/fetchapi/appFetch";
import { createCompany } from "appHelper/fetchapi/company/company";

export const ctrlAddCompany = {
  handleSubmit: async ({
    appState,
    appDispatch,
    companyName,
    logo,
    setLogo,
  }) => {
    try {
      const objInput = {
        name: companyName,
        logo,
      };
      const company = await createCompany(objInput);
      if (company.id) {
        appState.systemInfo.companies = [
          ...appState.systemInfo.companies,
          company,
        ];
        appDispatch();
      }
      setLogo("");
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
