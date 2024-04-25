import { Country_Phone_Code } from "appHelper/appVariables";
import { createBranch } from "appHelper/fetchapi/branch/branch";

export const ctrlRouteAddBranch = {
  addBranch: async ({
    appState,
    appDispatch,
    companyID,
    googleLocationInfo,
    mobile,
    countryCode,
    navigate,
  }) => {
    try {
      const mobileCode =
        countryCode !== "none"
          ? `(${Country_Phone_Code[countryCode]?.code})`
          : "";
      const objInput = {
        companyID: companyID,
        branchInput: {
          location: googleLocationInfo.location,
          mobile: `${mobileCode}${mobile}`,
          googleLocation: {
            coordinates: googleLocationInfo.coordinates,
          },
        },
      };
      const branch = await createBranch(objInput);
      if (branch?.id) {
        const companyIndex = appState.systemInfo.companies.findIndex(
          (company) => company.id === companyID
        );
        if (companyIndex !== -1) {
          appState.systemInfo.companies[companyIndex].branches.push(branch);
          appDispatch();
        }
        navigate(`/admin/mngcompanies`);
      } else {
        alert("something went wrong!");
      }
    } catch (err) {
      console.log({ err });
    }
  },
};
