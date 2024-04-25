const mongoose = require("mongoose");

const BranchSchema = mongoose.Schema({
  location: {
    type: String,
    required: true,
  },

  mobile: {
    type: String,
    required: true,
  },

  googleLocation: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],//[long,lat]
      required: true,
    },
  },
});

const CompanySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  branches: [BranchSchema],
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;