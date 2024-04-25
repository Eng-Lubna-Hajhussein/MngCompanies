import {
  createCompanyQuery,
  updateCompanyQuery,
  deleteCompanyQuery,
  findCompaniesQuery,
  findCompanyQuery,
} from "appHelper/appQueries/companyQueries/companyQueries";
import { fetchData } from "../appFetch";

export const findCompanies = async () => {
  const query = findCompaniesQuery();
  const requestBody = {
    query: query,
  };
  const result = await fetchData(requestBody);
  return result?.data?.findCompanies;
};

export const findCompany = async (companyID) => {
  const query = findCompanyQuery(companyID);
  const requestBody = {
    query: query,
  };
  const result = await fetchData(requestBody);
  return result?.data?.findCompanies;
};

export const createCompany = async (objInput) => {
  const query = createCompanyQuery(objInput);
  const requestBody = {
    query: query,
  };
  const result = await fetchData(requestBody);
  return result?.data?.createCompany;
};

export const updateCompany = async (objInput) => {
  const query = updateCompanyQuery(objInput);
  const requestBody = {
    query: query,
  };
  const result = await fetchData(requestBody);
  return result?.data?.updateCompany;
};

export const deleteCompany = async (companyID) => {
    const query = deleteCompanyQuery(companyID);
    const requestBody = {
      query: query,
    };
    const result = await fetchData(requestBody);
    return result?.data?.deleteCompany;
  };
  