const mongoose = require('mongoose');
const Company = require("../../../database/models/company");

module.exports = {
  // QUERY--------------------------------------------------------------------------------
  findCompanies: async () => {
    try {
      return await Company.find({});
    } catch (err) {
      throw err;
    }
  },
  findCompany: async (_, { companyID }) => {
    try {
      return await Company.findById(companyID);
    } catch (err) {
      throw err;
    }
  },
  // MUTATION--------------------------------------------------------------------------------
  //CREATE COMPANY
  createCompany: async (_, { name, logo }) => {
    try {
      return await Company.create({ name, logo });
    } catch (err) {
      throw err;
    }
  },
  //UPDATE COMPANY
  updateCompany: async (_, { companyID, name, logo }) => {
    try {
      const updatedCompany = await Company.findByIdAndUpdate(companyID, {
        $set: { name, logo },
      });
      if (!updatedCompany) {
        throw new Error("Company Not Found.");
      }
      return true;
    } catch (err) {
      throw err;
    }
  },
  //DELETE COMPANY
  deleteCompany: async (_, { companyID }) => {
    try {
      const deletedCompany = await Company.findByIdAndDelete(companyID);
      if (!deletedCompany) {
        throw new Error("Company Not Found.");
      }
      return true;
    } catch (err) {
      throw err;
    }
  },
};
