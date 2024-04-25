import { Country_Phone_Code } from "appHelper/appVariables";
import { updateBranch } from "appHelper/fetchapi/branch/branch";

export const ctrlRouteEditBranch = {
  editBranch: async ({
    appState,
    appDispatch,
    companyID,
    countryCode,
    mobile,
    branchID,
    location,
    googleLocation,
    navigate,
  }) => {
    try {
      const mobileCode =
        countryCode !== "none"
          ? `(${Country_Phone_Code[countryCode]?.code})`
          : "";
      const objInput = {
        companyID,
        branchID,
        branchInput: {
          location: location,
          googleLocation: googleLocation,
          mobile: `${mobileCode}${mobile}`,
        },
      };
      const branchUpdated = await updateBranch(objInput);
      if (branchUpdated) {
        const updatedCompanies = [...appState.systemInfo.companies];
        const companyIndex = updatedCompanies.findIndex(
          ({ id }) => id === companyID
        );
        if (companyIndex !== -1) {
          const branchIndex = updatedCompanies[companyIndex].branches.findIndex(
            ({ id }) => id === branchID
          );
          if (branchIndex !== -1) {
            updatedCompanies[companyIndex].branches[branchIndex] = {
              ...updatedCompanies[companyIndex].branches[branchIndex],
              ...objInput.branchInput,
            };
            appState.systemInfo.companies = updatedCompanies;
            appDispatch();
          }
        }
        navigate("/admin/mngCompanies");
      } else {
        alert("something went wrong!");
      }
    } catch (err) {
      console.log({ err });
    }
  },
};
