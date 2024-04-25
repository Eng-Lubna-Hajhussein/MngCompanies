const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require("graphql");
const { CompanyType, BranchInputType, BranchType } = require("../Types/types");
const CompanyResolvers = require("./../../resolvers/company/company");
const BranchResolvers = require("./../../resolvers/branch/branch");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createCompany: {
      type: CompanyType,
      args: {
        name: { type: GraphQLString },
        logo: { type: GraphQLString },
      },
      resolve: CompanyResolvers.createCompany,
    },
    updateCompany: {
      type: GraphQLBoolean,
      args: {
        companyID: { type: GraphQLString },
        name: { type: GraphQLString },
        logo: { type: GraphQLString },
      },
      resolve: CompanyResolvers.updateCompany,
    },
    deleteCompany: {
      type: GraphQLBoolean,
      args: {
        companyID: { type: GraphQLString },
      },
      resolve: CompanyResolvers.deleteCompany,
    },
    createBranch: {
      type: BranchType,
      args: {
        companyID: { type: GraphQLString },
        branchInput: { type: BranchInputType },
      },
      resolve: BranchResolvers.createBranch,
    },
    updateBranch: {
      type: GraphQLBoolean,
      args: {
        companyID: { type: GraphQLString },
        branchID: { type: GraphQLString },
        branchInput: { type: BranchInputType },
      },
      resolve: BranchResolvers.updateBranch,
    },
    deleteBranch: {
      type: GraphQLBoolean,
      args: {
        companyID: { type: GraphQLString },
        branchID: { type: GraphQLString },
      },
      resolve: BranchResolvers.deleteBranch,
    },
  },
});

module.exports = Mutation;