const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");
const { CompanyType } = require("../Types/types");
const CompanyResolvers = require("./../../resolvers/company/company");

const RootQuery = new GraphQLObjectType({
  name: "ViewTypeOfQueries",
  fields: {
    findCompanies: {
      type: new GraphQLList(new GraphQLNonNull(CompanyType)),
      resolve: CompanyResolvers.findCompanies,
    },
    findCompany: {
      type: CompanyType,
      args: {
        companyID: { type: GraphQLString },
      },
      resolve: CompanyResolvers.findCompany,
    },
  },
});

module.exports = RootQuery;
