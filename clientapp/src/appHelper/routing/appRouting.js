import * as appPages from "./appPages";

const appRouting = {
  Public_LandingPage: { url: appPages.Public_LandingPage },
  Admin_Account: { url: appPages.Admin_Account },
  Admin_MngCompanies: { url: appPages.Admin_Account + appPages.MngCompanies },
  Admin_AddBranch: { url: appPages.Admin_Account + appPages.MngCompanies + appPages.Add_Branch },
  Admin_EditBranch: { url: appPages.Admin_Account + appPages.MngCompanies + appPages.Edit_Branch },
};

export default appRouting;