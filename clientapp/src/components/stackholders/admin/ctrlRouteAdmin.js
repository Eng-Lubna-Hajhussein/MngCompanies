import { findCompanies } from "appHelper/fetchapi/company/company";

export const ctrlRouteAdmin = {
  installData: async ({ appState, appDispatch, setIsLoading }) => {
    try {
      setIsLoading(true);
      const companies = await findCompanies();
      if (companies?.length) {
        appState.systemInfo.companies = companies;
        appDispatch();
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log({ err });
    }
  },
};
