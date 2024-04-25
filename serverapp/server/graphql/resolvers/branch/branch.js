const mongoose = require("mongoose");
const Company = require("../../../database/models/company");

module.exports = {
  // MUTATION--------------------------------------------------------------------------------
  //CREATE BRANCH
  createBranch: async (_, { companyID, branchInput }) => {
    try {
      const branch = { _id: new mongoose.Types.ObjectId(), ...branchInput };
      const updatedCompany = await Company.findByIdAndUpdate(companyID, {
        $push: { branches: branch },
      });
      if (!updatedCompany) {
        throw new Error("Company Not Found.");
      }
      return { ...branch, id: branch._id };
    } catch (err) {
      throw err;
    }
  },
  //UPDATE BRANCH
  updateBranch: async (_, { companyID, branchID, branchInput }) => {
    try {
      const condition = {
        _id: companyID,
        "branches._id": branchID,
      };
      const update = {
        $set: {
          "branches.$.location": branchInput.location,
          "branches.$.mobile": branchInput.mobile,
          "branches.$.googleLocation": branchInput.googleLocation,
        },
      };
      const filter = { arrayFilters: [{ "branches._id": branchID }] };
      const updatedCompany = await Company.updateOne(condition, update, filter);
      if (!updatedCompany) {
        throw new Error("Company | Branch Not Found.");
      }
      return true;
    } catch (err) {
      throw err;
    }
  },
  //DELETE BRANCH
  deleteBranch: async (_, { companyID, branchID }) => {
    try {
      const updatedCompany = await Company.findByIdAndUpdate(companyID, {
        $pull: {
          branches: { _id: branchID },
        },
      });
      if (!updatedCompany) {
        throw new Error("Company | Branch Not Found.");
      }
      return true;
    } catch (err) {
      throw err;
    }
  },
};
