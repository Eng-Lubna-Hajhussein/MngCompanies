export const createBranchQuery = (objInput) => {
  return `mutation{
          createBranch(companyID:"${objInput.companyID}",branchInput:{
            location:"${objInput.branchInput.location}",
            mobile:"${objInput.branchInput.mobile}",
            googleLocation:{
              type:"Point",
              coordinates:[${objInput.branchInput.googleLocation.coordinates[0]},${objInput.branchInput.googleLocation.coordinates[1]}]
            }
          }){
            id
            location
            mobile
            googleLocation{
              type
              coordinates
            }
          }
        }`;
};

export const updateBranchQuery = (objInput) => {
  return `mutation{
          updateBranch(companyID:"${objInput.companyID}",branchID:"${objInput.branchID}",branchInput:{
            location:"${objInput.branchInput.location}",
            mobile:"${objInput.branchInput.mobile}",
            googleLocation:{
              type:"Point",
              coordinates:[${objInput.branchInput.googleLocation.coordinates[0]},${objInput.branchInput.googleLocation.coordinates[1]}]
            }
          })
        }`;
};

export const deleteBranchQuery = (objInput) => {
  return `mutation {
          deleteBranch(companyID:"${objInput.companyID}",branchID:"${objInput.branchID}")
        }`;
};
