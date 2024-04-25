import {
  createBranchQuery,
  deleteBranchQuery,
  updateBranchQuery,
} from "appHelper/appQueries/branchQueries/branchQueries";
import { fetchData } from "../appFetch";

export const createBranch = async (objInput) => {
  const query = createBranchQuery(objInput);
  const requestBody = {
    query: query,
  };
  const result = await fetchData(requestBody);
  return result?.data?.createBranch;
};

export const updateBranch = async (objInput) => {
  const query = updateBranchQuery(objInput);
  const requestBody = {
    query: query,
  };
  const result = await fetchData(requestBody);
  return result?.data?.updateBranch;
};

export const deleteBranch = async (objInput) => {
  const query = deleteBranchQuery(objInput);
  const requestBody = {
    query: query,
  };
  const result = await fetchData(requestBody);
  return result?.data?.deleteBranch;
};
