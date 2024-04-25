import { deleteBranch } from "appHelper/fetchapi/branch/branch";

export const ctrlBranches = {
  handleDeleteBranch: async ({
    appState,
    appDispatch,
    companyID,
    branchID,
    onBranchActionDelete,
    handleIsLoadingChange,
  }) => {
    try {
      handleIsLoadingChange(true);
      const branchDeleted = await deleteBranch({
        companyID,
        branchID,
      });
      if (branchDeleted) {
        const companyIndex = appState.systemInfo.companies.findIndex(
          ({ id }) => companyID === id
        );
        if (companyIndex !== -1) {
          const updatedCompanies = [...appState.systemInfo.companies];
          updatedCompanies[companyIndex].branches = updatedCompanies[
            companyIndex
          ].branches.filter(({ id }) => id !== branchID);
          appState.systemInfo.companies = updatedCompanies;
          appDispatch();
        }
        onBranchActionDelete();
      }
      handleIsLoadingChange(false);
    } catch (err) {
      handleIsLoadingChange(false);
      console.log({ err });
    }
  },
};
