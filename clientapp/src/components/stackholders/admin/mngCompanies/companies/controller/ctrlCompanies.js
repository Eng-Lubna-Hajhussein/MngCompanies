import { deleteCompany } from "appHelper/fetchapi/company/company";

export const ctrlCompanies = {
  handleDeleteCompany: async ({
    appState,
    appDispatch,
    companyID,
    handleIsLoadingChange,
    handleCompanyIDChange,
  }) => {
    try {
      handleIsLoadingChange(true);
      const companyDeleted = await deleteCompany(companyID);
      if (companyDeleted) {
        const updatedCompanies = [...appState.systemInfo.companies].filter(
          ({ id }) => id !== companyID
        );
        appState.systemInfo.companies = updatedCompanies;
        appDispatch();
        if (updatedCompanies?.length) {
          handleCompanyIDChange(updatedCompanies[0].id);
        }
      }
      handleIsLoadingChange(false);
    } catch (err) {
      handleIsLoadingChange(false);
      console.log({ err });
    }
  },
};
