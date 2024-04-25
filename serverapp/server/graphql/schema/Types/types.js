const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLFloat,
} = require("graphql");

const googleLocationType = new GraphQLObjectType({
  name: "googleLocationType",
  fields: () => ({
    type: { type: GraphQLString },
    coordinates: { type: new GraphQLList(GraphQLFloat) },
  }),
});

const googleLocationInputType = new GraphQLInputObjectType({
  name: "googleLocationInputType",
  fields: () => ({
    type: { type: GraphQLString },
    coordinates: { type: new GraphQLList(GraphQLFloat) },
  }),
});

const BranchType = new GraphQLObjectType({
  name: "BranchType",
  fields: () => ({
    id: { type: GraphQLString },
    location: { type: GraphQLString },
    mobile: { type: GraphQLString },
    googleLocation: { type: googleLocationType },
  }),
});

const BranchInputType = new GraphQLInputObjectType({
  name: "BranchInputType",
  fields: () => ({
    location: { type: GraphQLString },
    mobile: { type: GraphQLString },
    googleLocation: { type: googleLocationInputType },
  }),
});

const CompanyType = new GraphQLObjectType({
  name: "CompanyType",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    branches: { type: new GraphQLList(new GraphQLNonNull(BranchType)) },
  }),
});

const CompanyInputType = new GraphQLInputObjectType({
  name: "CompanyInputType",
  fields: () => ({
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    branches: {
      type: new GraphQLList(new GraphQLNonNull(BranchInputType)),
    },
  }),
});

module.exports = { CompanyType, CompanyInputType, BranchType, BranchInputType };
