import { Routes, Route, BrowserRouter } from "react-router-dom";
import appRouting from "appHelper/routing/appRouting";
import RouteLandingPage from "components/RouteLandingPage";
import RouteAdmin from "components/stackholders/admin/RouteAdmin";
import RouteMngCompanies from "components/stackholders/admin/mngCompanies/RouteMngCompanies";
import RouteAddBranch from "components/stackholders/admin/mngCompanies/addBranch/RouteAddBranch";
import RouteEditBranch from "components/stackholders/admin/mngCompanies/editBranch/RouteEditBranch";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={appRouting.Public_LandingPage.url}
          element={<RouteLandingPage />}
        />
        <Route
          path={appRouting.Admin_Account.url}
          element={<RouteAdmin />}
        />
        <Route
          path={appRouting.Admin_MngCompanies.url}
          element={<RouteMngCompanies />}
        />
        <Route
          path={appRouting.Admin_AddBranch.url}
          element={<RouteAddBranch />}
        />
        <Route
          path={appRouting.Admin_EditBranch.url}
          element={<RouteEditBranch />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
