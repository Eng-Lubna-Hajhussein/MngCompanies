import { findCompanies } from "appHelper/fetchapi/company/company";

export const ctrlRouteLandingPage = {
  installData: async ({setCompanies, setIsLoading }) => {
    try {
      setIsLoading(true);
      const companiesData = await findCompanies();
      if (companiesData?.length) {
        setCompanies(companiesData);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log({ err });
    }
  },
};